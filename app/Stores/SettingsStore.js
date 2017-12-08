export default class SettingsStore {
  constructor() {
    this.splashTime = 3000
    this.splashImg = require('../../images/splash.jpg')
    this.siderbarImg = require('../../images/logo.jpg')
    this.avatarImg = require('../../images/doge.jpg')
    this.testImg = require('../../images/login.jpg')
  }
  get SplashTime() {
    return this.splashTime
  }
  get SplashImg() {
    return this.splashImg
  }
}