const allCharacters =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-";

function alphabetsCaptcha(captchaLength = 6) {
  let captcha = "";
  // iterate till length
  for (var i = 0; i < captchaLength; i++) {
    // get random char from charaacter
    const randomNum = Math.floor(Math.random() * allCharacters.length);
    captcha += allCharacters[randomNum];
  }
  return captcha;
}

const getRandomCaptcha = alphabetsCaptcha;

export default getRandomCaptcha;
