'use strict';

const Service = require('ee-core').Service;
const constant = require('../enums/constant');

/**
 * osc
 * @class
 */
class OscService extends Service {

  constructor(ctx) {
    super(ctx);
  }

  /*
   * 访问远程api
   */
  async api(shortUri, params, method = 'POST') {
    const res = {
      code: 1000,
      message: 'unknown error',
    };
    let url = constant.oscUrl + constant.oscApi[shortUri];

    try {
      //throw new Error('Sync Error');
      const response = await this.app.curl(url, {
        method: method,
        contentType: 'application/json',
        data: params,
        dataType: 'json',
        timeout: 10000,
      });
      //console.log('response:', response);
      if (response.status != 200) {
        this.app.logger.error('[OschinaController] [getNews] res:', response);
      }
      const result = response.data;
      return result;
    } catch (e) {
      console.log('e.code:', e.code);
      console.log('e.message:', e.message);
      res.message = e.message;
      this.app.logger.error('[OscService] [api]:  ERROR ', e);
    }

    return res;
  }  
}

OscService.toString = () => '[class OscService]';
module.exports = OscService;