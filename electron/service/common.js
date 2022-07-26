'use strict';

const Service = require('ee-core').Service;
const pcMac = require('getmac');

/**
 * 通用
 * @class
 */
class CommonService extends Service {

  constructor(ctx) {
    super(ctx);
  }

  /**
   * 获取Mac地址
   */
  async getMacAddress (origin = false) {
    let macAddr = pcMac.default();
    if (!origin) {
      macAddr = macAddr.replace(/:/g, '');
    }
    console.log('macAddr:', macAddr);
    return macAddr;
  }
}

module.exports = CommonService;