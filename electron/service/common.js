'use strict';

const Service = require('ee-core').Service;
const electronApp = require('electron').app;
const { dialog } = require('electron');

/**
 * 通用
 * @class
 */
class CommonService extends Service {

  constructor(ctx) {
    super(ctx);
  }
}

module.exports = CommonService;