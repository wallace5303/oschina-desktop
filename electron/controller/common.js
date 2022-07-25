'use strict';

const pcMac = require('getmac');
const Controller = require('ee-core').Controller;

/**
 * 通用控制器
 * @class
 */
class CommonController extends Controller {

  constructor(ctx) {
    super(ctx);
  }

  /**
   * 获取Mac地址
   */
  async macAddress () {
    const macAddr = pcMac.default();

    return macAddr;
  }
}

module.exports = CommonController;
