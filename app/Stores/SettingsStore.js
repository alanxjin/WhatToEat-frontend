export default class SettingsStore {
  constructor() {
    this.splashTime = 3000
    this.splashImg = require('../../images/splash.jpg')
  }
  get SplashTime() {
    return this.splashTime
  }
  get SplashImg() {
    return this.splashImg
  }
}