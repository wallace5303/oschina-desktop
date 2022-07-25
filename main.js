const Appliaction = require('ee-core').Appliaction;
const {shell} = require('electron');

class Main extends Appliaction {

  constructor() {
    super();
    // this === eeApp;
  }

  /**
   * core app have been loaded
   */
  async ready () {
    // do some things
  }

  /**
   * electron app ready
   */
  async electronAppReady () {
    // 改变窗口大小
    this.config.windowsOption.width = 400;
    this.config.windowsOption.height = 300;
    this.config.windowsOption.minWidth = 400;
    this.config.windowsOption.minHeight = 300;
  }

  /**
   * main window have been loaded
   */
  async windowReady () {
    // do some things
    // 链接控制
    const win = this.electron.mainWindow;
    win.webContents.setWindowOpenHandler(({ url }) => {
      console.log('watch url:', url);
      // 使用默认浏览器打开连接
      shell.openExternal(url);
      return { action: 'deny' }
    })
  }

  /**
   * before app close
   */  
  async beforeClose () {
    // do some things

  }
}

new Main();
 
