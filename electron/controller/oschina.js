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
    // console.log(JSON.stringify(res));
    // let tmp = `{"author":"局","id":204764,"authorid":2720166,"title":"LLVM 16 默认为 RISC-V 启用可伸缩矢量","body":"<style type='text/css'>pre {white-space:pre-wrap;word-wrap:break-word;}</style><p>随着 LLVM 16 的公开，下一个编译器发布周期的早期变化之一是默认为 RISC-V 启用可伸缩矢量 (Scalable Vectorization)，并 
    // 支持 RISC-V 矢量指令的 target。</p> \n<p>LLVM 开发者 Philip Reames 已默认为支持 Zve 或 V 扩展的 RISC-V target 启用了可伸缩矢量。他对这一变化进行了解 
    // 释：</p> \n<blockquote>\n  当矢量指令可用于 target 配置时，此更改为 RISCV 启用矢量化（仅使用可伸缩矢量，尚未启用固定矢量）。 \n <br> \n <br> 在这一点
    // 上，生成的配置应该是稳定的（例如没有出现崩溃），且具有收益（即很少有标量循环超越矢量循环的情况），但不会有特别好的调整。此更改的目标是使跨组织的测试 
    // 保持一致，并确保默认配置与下游正在使用的配置尽可能匹配。 \n <br> \n <br> 这会暴露默认情况下大量未启用的代码，因此可能尚未完全执行。鉴于此，出现问题并
    // 不意外。如果你发现问题，请确保在还原此变化时包含尽可能多的信息。 \n</blockquote> \n<p><img src=\"https://static.oschina.net/uploads/space/2022/0731/085125_FKxP_2720166.png\"></p> \n<p>由于此变化是在 LLVM 16 开发周期开始时进行的，因此在稳定版发布之前仍有大量时间来改进编译器的 RISC-V 矢量支持，直到 
    // 3 月左右发布。</p> \n<p>RISC-V 中的&nbsp;\"V\" 是这种免版税 CPU 架构的完整矢量数学扩展，而 Zve 是它的 \"modest\" 子集，旨在用于嵌入式设备和微控制器中
    // 的较小内核。RISC-V 的<a href=\"https://github.com/riscv/riscv-v-spec\" rel=\"nofollow\"> Vector Extension 1.0</a> 自去年以来一直被冻结，并被认为稳定 
    // 到可以开始用于软件开发工作。</p> \n<p>详情查看&nbsp;<a href=\"https://reviews.llvm.org/D129013\" rel=\"nofollow\">reviews.llvm.org</a>。</p>","pubDate":"2022-07-31 08:49:35","favorite":0,"url":"https://www.oschina.net/news/204764/llvm-riscv-vectorization-def","relativies":[{"title":"ARM 和 RISC-V 
    // 公然开撕，GNOME 之父指责 ARM","url":"https://www.oschina.net/news/97929/arm-vs-riscv"},{"title":"LLVM 6.0.1 发布，编译器架构","url":"https://www.oschina.net/news/97813/llvm-6-0-1-released"},{"title":"MIT 研究人员正研发基于 RISC-V 的安全芯片方案","url":"https://www.oschina.net/news/96653/mit-research-risc-v-based-chips"},{"title":"LLVM 5.0.2 发布，缓解 Spectre 变种漏洞","url":"https://www.oschina.net/news/96196/llvm-5-0-2-released"},{"title":"LDC 1.9.0 发布，基于 LLVM 架构的 D 语言编译器","url":"https://www.oschina.net/news/96042/ldc-1-9-0-released"},{"title":"LLVM 开发者退出事件持续发酵，Swift 语言之父回应","url":"https://www.oschina.net/news/95864/chris-talk-about-rafael"},{"title":"因不满社区变化，LLVM 资深开发者发长邮件宣布退出","url":"https://www.oschina.net/news/95790/rafael-leacing-llvm"},{"title":"ARM 授权费用太贵 科技巨头欲转向开源架构 RISC-V","url":"https://www.oschina.net/news/95722/tech-giants-want-to-turn-to-open-source-architecture-risc-v"},{"title":"英特尔 Tremont CPU 将支持 LLVM 的 Clang 编译器","url":"https://www.oschina.net/news/95273/intel-tremont-llvm-clang"},{"title":"新 Red Hat 编译器工具箱：Clang、LLVM、GCC 等","url":"https://www.oschina.net/news/95132/new-red-hat-compilers-in-beta-clang-llvm-gcc-go-rust"}],"commentCount":0,"notice":{"referCount":0,"replyCount":0,"msgCount":0,"fansCount":0}}`;
    // let res = JSON.parse(tmp);
    return res;
  }   
}

OschinaController.toString = () => '[class OschinaController]';
module.exports = OschinaController;
