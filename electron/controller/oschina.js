'use strict';

const Controller = require('ee-core').Controller;
const url = require('url');
const querystring = require('querystring');

/**
 * oschina控制器
 * @class
 */
class OschinaController extends Controller {

  constructor(ctx) {
    super(ctx);
  }

  /**
   * authInfo
   */
  async authInfo () {
    const macAddr = await this.service.common.getMacAddress();
    let state = {
      app_id: "oschina_desktop",
      mac_addr: macAddr,
    }

    let authUrl = 'https://www.oschina.net/action/oauth2/authorize?';
    authUrl += 'response_type=code';
    authUrl += '&client_id=KUM768r2I1qA00RUUAyp';
    authUrl += '&state=' + JSON.stringify(state);
    authUrl += '&redirect_uri=https%3A%2F%2Fwww.kaka996.com%2Fapi%2Foschina%2Fverify';

    // authUrl = url.format({
    //   protocol: 'https',
    //   hostname: 'www.oschina.net',
    //   pathname: '/action/oauth2/authorize',
    //   query: {
    //     response_type: 'code',
    //     client_id: 'KUM768r2I1qA00RUUAyp',
    //     state: JSON.stringify(state),
    //     redirect_uri: 'https://www.kaka996.com/api/oschina/verify'
    //   }
    // });

    const result = {
      authUrl: authUrl,
      macAddr: macAddr
    }
    console.log('authUrl:', authUrl);
    return result;
  }

  /**
   * 授权信息
   */ 
  getAuthToken () {
    const macAddr = pcMac.default();
    const params = {
      mac_addr: macAddr,
    }
    const authTokenUrl = '' 

  }   
}

module.exports = OschinaController;
