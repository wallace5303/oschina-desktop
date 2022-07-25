<template>
  <div id="app-auth">
    <div class="block-1">
      <a-button type="primary">
        <a :href="loginUrl" target="_blank">授权登录</a>
      </a-button>
    </div>  
  </div>
</template>
<script>
import storage from 'store2'
import _ from 'lodash'

export default {
  data() {
    return {
      state: {
        "app_id": "oschina_desktop",
        "mac_addr": "",
      },
      authUrl: 'https://www.oschina.net/action/oauth2/authorize?response_type=code&client_id=KUM768r2I1qA00RUUAyp&state=@state&redirect_uri=https%3A%2F%2Fwww.kaka996.com%2Fapi%2Foschina%2Fverify',
      getToken: '',
    };
  },
  mounted () {
    this.checkToken()
  },
  methods: {
    checkToken () {
      const auth_token = storage.get('auth_token');
      if (!_.isEmpty(auth_token)) {
        //this.$router.push({ name: 'Auth', params: {}})
      }
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
