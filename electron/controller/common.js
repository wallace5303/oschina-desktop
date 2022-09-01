'use strict';

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
   * 改变窗体大小
   */
   async changeWindowSize (args, event) {
    const mainWindow = this.app.electron.mainWindow;
    const size = {
      width: args?.width ?? 1080,
      height: args?.width ?? 720
    }
    mainWindow.setSize(size.width, size.height);
    mainWindow.setResizable(true);
    mainWindow.center();
    mainWindow.show();
    
    return true;
  }
}

CommonController.toString = () => '[class CommonController]';
module.exports = CommonController;
