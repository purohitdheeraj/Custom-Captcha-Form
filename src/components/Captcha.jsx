const Captcha = (props) => {
  const {
    captchaStatus,
    regenerateCaptcha,
    handleChange,
    input,
    validate,
    randomCaptcha
  } = props.captchaState;

  return (
    <>
      <section className="captcha">
        {!captchaStatus && (
          <>
            <h2>Captcha</h2>
            <div className="captcha-result">{randomCaptcha}</div>
            <button type="button" onClick={regenerateCaptcha}>
              &#8635;
            </button>
            <input
              onChange={handleChange}
              name="captcha"
              type="text"
              value={input}
              // required
            />
            <button onClick={validate}>validate</button>
          </>
        )}
      </section>

      {captchaStatus && (
        <div className="captcha-success captcha-status">
          Validated
          <span role="img" aria-label="success">
            ✅
          </span>
        </div>
      )}

      {captchaStatus === false && (
        <div className="captcha-failed captcha-status">
          Wrong Captcha
          <span role="img" aria-label="success">
            ❌
          </span>
        </div>
      )}
    </>
  );
};

export default Captcha;
