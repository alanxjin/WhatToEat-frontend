export default class SettingsStore {
  constructor() {
    this.splashTime = 3000
    this.splashImg = require('../../images/splash.jpg')
    this.siderbarImg = require('../../images/logo.jpg')
    this.avatarImg = require('../../images/cleaned_cute_dog.png')
    this.loginImg = require('../../images/login_background.jpg')
  }
  get SplashTime() {
    return this.splashTime
  }
  get SplashImg() {
    return this.splashImg
  }
}