'use strict';

const Controller = require('ee-core').Controller;
const constant = require('../enums/constant');

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
      app_id: constant.appInfo.appId,
      mac_addr: macAddr,
    }

    let authUrl = 'https://www.oschina.net/action/oauth2/authorize?';
    authUrl += 'response_type=code';
    authUrl += '&client_id=KUM768r2I1qA00RUUAyp';
    authUrl += '&state=' + JSON.stringify(state);
    authUrl += '&redirect_uri=https%3A%2F%2Fwww.kaka996.com%2Fapi%2Foschina%2Fverify';

    const data = {
      authUrl: authUrl,
      macAddr: macAddr
    }
    return data;
  }

  /**
   * 授权信息
   */ 
  async getAuthToken () {
    const macAddr = await this.service.common.getMacAddress();
    const authTokenUrl = 'https://www.kaka996.com/api/oschina/getToken';
    const options = {
      method: 'POST',
      data: {
        app_id: constant.appInfo.appId,
        mac_addr: macAddr,
      },
      dataType: 'json',
      timeout: 5000,  
    };
    const tokenRes = await this.app.curl(authTokenUrl, options);
    if (tokenRes.status != 200) {
      this.app.logger.error('[Controller] [Oschina] [getAuthToken] tokenRes:', tokenRes);
    }

    return tokenRes.data;
  }

  /**
   * news
   */ 
  async getNews (args, event) {
    const params = args;
    console.log('params:', params);
    const res = await this.service.osc.api('news_list', params);
    return res;
  } 
}

module.exports = OschinaController;
