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
    // const res = await this.service.osc.api('news_list', params);
    // console.log(JSON.stringify(res.newslist));
    let tmp = '[{"author":"dd","id":204764,"title":"LLVM 16 ","type":4,"authorid":2720166,"pubDate":"2022-07-31 08:49:35","commentCount":0},{"author":"Alias_Travis","id":204763,"title":"测试","type":0,"authorid":4937141,"pubDate":"2022-07-31 08:16:16","url":"https://www.oschina.net/project/awesome?columnId=19","object":0,"commentCount":0},{"author":"Alias_Travis","id":204762,"title":".NET Core 3.1","type":4,"authorid":4937141,"pubDate":"2022-07-31 08:10:36","commentCount":2},{"author":"下想","id":204761,"title":"adasfda垯","type":2,"authorid":2720166,"pubDate":"2022-07-31 08:00:32","commentCount":5,"object":2326412},{"author":"卡卡","id":204760,"title":"LinkedDataHub 啦啦啦啦","type":1,"authorid":2720166,"pubDate":"2022-07-31 07:50:03","object":64563,"commentCount":0}]';
    let res = {
      newslist: JSON.parse(tmp)
    };
    return res;
  } 
  /**
   * news
   */ 
  async getNewsDetail (args, event) {
    const params = args;
    console.log('params:', params);
    const res = await this.service.osc.api('news_detail', params);
    console.log(JSON.stringify(res));
    //let tmp = '[{"author":"dd","id":204764,"title":"LLVM 16 ","type":4,"authorid":2720166,"pubDate":"2022-07-31 08:49:35","commentCount":0},{"author":"Alias_Travis","id":204763,"title":"测试","type":0,"authorid":4937141,"pubDate":"2022-07-31 08:16:16","url":"https://www.oschina.net/project/awesome?columnId=19","object":0,"commentCount":0},{"author":"Alias_Travis","id":204762,"title":".NET Core 3.1","type":4,"authorid":4937141,"pubDate":"2022-07-31 08:10:36","commentCount":2},{"author":"下想","id":204761,"title":"adasfda垯","type":2,"authorid":2720166,"pubDate":"2022-07-31 08:00:32","commentCount":5,"object":2326412},{"author":"卡卡","id":204760,"title":"LinkedDataHub 啦啦啦啦","type":1,"authorid":2720166,"pubDate":"2022-07-31 07:50:03","object":64563,"commentCount":0}]';
    // let res = {
    //   content: JSON.parse(tmp)
    // };
    return res;
  }   
}

module.exports = OschinaController;
