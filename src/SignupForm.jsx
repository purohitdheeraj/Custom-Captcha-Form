import { useState } from "react";
import { Captcha } from "./components";
import "./styles.css";
import getRandomCaptcha from "./utility/captcha";

export default function SignupForm() {
  const [input, setInput] = useState("");
  const [randomCaptcha, setRandomCaptcha] = useState(getRandomCaptcha());
  const [captchaStatus, setCaptchaStatus] = useState("");
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setInput(e.target.value);
    setCaptchaStatus("");
  };

  const regenerateCaptcha = () => {
    setRandomCaptcha(getRandomCaptcha());
  };

  const validate = (e) => {
    e.preventDefault();

    if (input === randomCaptcha) {
      setCaptchaStatus(true);
      // setRandomCaptcha("");
    } else {
      setCaptchaStatus(false);
      regenerateCaptcha();
    }
    setInput("");
  };

  const captchaProps = {
    handleChange,
    regenerateCaptcha,
    validate,
    captchaStatus,
    input,
    randomCaptcha
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormInput((prevInputs) => {
      return {
        ...prevInputs,
        [name]: value
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formInput);
    setFormInput({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

    window.alert("Form Submitted Successfully!");
    setCaptchaStatus("");
    regenerateCaptcha();
  };

  return (
    <>
      <h2 className="app-title">Moonshot Signup Form</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <p>Name:</p>
        <input
          name="name"
          type="text"
          value={formInput.name}
          onChange={handleInputs}
          placeholder="enter name"
          aria-label="username"
        />
        <p>Email:</p>
        <input
          name="email"
          type="email"
          value={formInput.email}
          onChange={handleInputs}
          placeholder="enter email"
          aria-label="email"
        />
        <p>Password:</p>
        <input
          name="password"
          type="password"
          value={formInput.password}
          onChange={handleInputs}
          placeholder="enter password"
          aria-label="password"
        />
        <p>Confirm Password:</p>
        <input
          name="confirmPassword"
          type="password"
          value={formInput.confirmPassword}
          onChange={handleInputs}
          placeholder="re-enter password"
          aria-label="confirm password"
        />
        <Captcha captchaState={captchaProps} />
        <button
          type="submit"
          disabled={!captchaStatus}
          className={`btn-submit  ${!captchaStatus ? "disabled-btn" : "btn"}`}
        >
          Sign Up
        </button>
      </form>
    </>
  );
}
