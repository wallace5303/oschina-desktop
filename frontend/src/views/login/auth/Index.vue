<template>
  <div id="app-auth">
    <div class="block-1">
      <a v-if="!loading" :href="authUrl" target="_blank" @click="getToken">
        <a-button type="primary">
          授权登录
        </a-button>
      </a>
      <span v-else>{{ loginText }}</span>
    </div>  
  </div>
</template>
<script>
import storage from 'store2'
import _ from 'lodash'
import { ipcApiRoute } from '@/api/main'

export default {
  data() {
    return {
      loading: false, 
      authUrl: '',
      loginText: '正在登陆......'
    };
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (this.checkToken()) {
        this.redectHome();
        return;
      }
      this.$ipcInvoke(ipcApiRoute.oschina.authInfo, {}).then(res => {
        console.log('authInfo:', res)
        this.authUrl = res.authUrl;
      })
    },
    checkToken () {
      const token_info = storage.get('token_info');
      console.log('token_info:', token_info);
      if (_.isEmpty(token_info)) {
        return false
      }
      let time = new Date().valueOf();
      let expires_time = token_info.expires_time * 1000;
      if (time > expires_time) {
        return false;
      }

      return true;
    },
    delToken () {
      storage.remove('token_info');
    },
    getToken () {
      if (_.isEmpty(this.authUrl)) {
        this.$message.error(`无效的授权链接`);
        return;
      }
      const that = this;
      let myTimer;
      let times = 1;
      myTimer = setInterval(function(){
        console.log('retry number:', times);
        that.$ipcInvoke(ipcApiRoute.oschina.getAuthToken, {}).then(res => {
          console.log('getAuthToken res:', res)
          if (res.code == 0) {
            clearInterval(myTimer);
            const token_info = res.data.token_info;
            storage.set('token_info', token_info);
            that.redectHome();
            return;
          }
        })
        times++;
      }, 1000)
      setTimeout(function(){
        this.$message.error(`服务器超时异常`);
        clearInterval(myTimer);
      }, 15000)
    },
    redectHome () {
      this.loading = true;
      this.$ipcInvoke(ipcApiRoute.common.changeWindowSize, {}).then(res => {
        this.$router.push({ name: 'Information', params: {}});
      })
    }
  }
};
</script>
<style lang="less" scoped>
#app-auth {
  //padding: 0px 10px;
  //text-align: left;
  width: 100%;
  min-height: 100%;
  background: #f0f2f5 url(~@/assets/login.png) no-repeat 50%;
  display: flex;
  .block-1 {
    font-size: 16px;
    align-items: center;
    margin: auto;
    display: inline-block;
  }
}
</style>
