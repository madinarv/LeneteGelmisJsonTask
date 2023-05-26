/* eslint-disable @typescript-eslint/no-var-requires */
export enum environment {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  env = process.env.NODE_ENV,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  //applicationUrl = process.env.BASE_URL,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
 //applicationName = process.env.REACT_APP_TITLE,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // apiMain = process.env.NODE_ENV === 'development'
  //   ? localStorage.getItem('api-url')
  //     ? localStorage.getItem('api-url')
  //     : process.env.REACT_APP_API_MAIN
  //   : process.env.REACT_APP_API_MAIN,

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
 // apiLogin = process.env.REACT_APP_API_LOGIN,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
 // applicationVersion = require('../../../package.json').version,
 apiUsers = process.env.REACT_APP_API_USERS,
    applicationVersion = require('../../../package.json').version,
  
}
