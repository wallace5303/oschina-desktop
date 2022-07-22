'use strict';

const _ = require('lodash');
const Controller = require('ee-core').Controller;
const Utils = require('ee-core').Utils;
const electronApp = require('electron').app;
const { BrowserWindow } = require('electron');

/**
 * oschina控制器
 * @class
 */
class OschinaController extends Controller {

  constructor(ctx) {
    super(ctx);
  }

  /**
   * test
   */
  async test () {
    const result = await this.service.example.test('electron');

    let tmpDir = Utils.getLogDir();
    console.log('tmpDir:', tmpDir);

    console.log('this.app.request:', this.app.request.query);

    return result;
  }

  /**
   * 测试接口
   */ 
  hello (args) {
    console.log('hello ', args);
  }   
}

module.exports = OschinaController;
