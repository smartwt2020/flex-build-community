import app_config from '@/app_config.js'
export const logger = function (msg, type='info') {
  if (app_config.log) {
    let log = ''
    let Logtype = '' 
    let color = ''
    if (type === 'info') {
      Logtype = `[LOG INFO]:: `
      color = '"color:blue"'
    } else if (type === 'warning') {
      Logtype = `[LOG WARN]:: `
      color = '"color:yellow"'
    } if (type === 'success') {
      Logtype = `[LOG SUCCESS]:: `
      color = '"color:green"'
    } if (type === 'error') {
      Logtype = `[LOG ERROR]:: `
      color = '"color:red"'
    }
    log += new Date().toGMTString() + ':: '

    if (typeof msg) {
      msg = JSON.stringify(msg)
    }
    log += msg + '\n'
    console.log(Logtype, log)
  }
}