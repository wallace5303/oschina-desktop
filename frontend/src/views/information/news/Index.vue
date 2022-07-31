<template>
  <div id="app-base-test-api">
    <div class="one-block-1">
      <a-tabs default-active-key="1" @change="changeTab">
        <a-tab-pane v-for="{id, name} in tabs" :key="id" >
          <span slot="tab">
            {{ name }}
          </span>
          <div class="one-block-3">
            <a-list item-layout="vertical" size="large" :data-source="itemList">
              <a-list-item slot="renderItem" key="item.title" slot-scope="item">
                <template v-for="{ type } in actions" slot="actions">
                  <span :key="type">
                    <a-icon :type="type" style="margin-right: 8px" />
                    {{ dealActions(type, item) }}
                  </span>
                </template>
                <a-list-item-meta>
                  <a slot="title" href="#" class="newsTitle">{{ item.title }}</a>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>  
    <div class="one-block-2">
    </div>
  </div>
</template>
<script>
import storage from 'store2'
import { ipcApiRoute } from '@/api/main'

export default {
  data() {
    return {
      auth_token: '',
      currentPage: 1,
      perPage: 5,
      itemList: [],
      catalogText:{
        1: '综合新闻',
        2: '软件更新',
        3: '所有'
      },
      newsCount: 0,
      newsTypeText: {
        0: '链接新闻',
        1: '软件推荐',
        2: '讨论区帖子',
        3: '博客',
        4: '普通新闻',
        7: '翻译文章',
      },
      total: -1,
      loading: false,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
      tabs: [
        { id: '1', name: '综合新闻'},
        { id: '2', name: '软件更新'},
        { id: '3', name: '最新资讯'},
      ],
      currentTabKey: '1',
      actions: [
        { type: 'user', text: '' },
        { type: 'tag', text: '' },
        { type: 'message', text: '' },
        { type: 'calendar', text: '' },
      ],
    };
  },
  mounted () {
    this.init();
    this.getNews();
  },
  methods: {
    init () {
      this.auth_token = storage.get('auth_token');
    },
    getNews () {
      const params = {
        access_token: this.auth_token,
        catalog: this.currentTabKey,
        page: this.currentPage,
        pageSize: this.perPage,
        dataType: 'json'
      }
      this.$ipcInvoke(ipcApiRoute.oschina.getNews, params).then(res => {
        //console.log('res:', this.res)
        this.itemList = res.newslist;
        console.log('itemList:', this.itemList)
      }) 
    },
    changeTab (key) {
      this.currentTabKey = key;
      this.currentPage = 1;
      console.log('currentTabKey:', this.currentTabKey)
      this.getNews();
    },
    dealActions (type, item) {
      let text = '';
      //console.log(item.full_name);
      if (type == 'user') {
        text = item.author;
      } else if (type == 'tag') {
        text = this.newsTypeText[item.type] || '其它';
      } else if (type == 'message') {
        text = item.commentCount;
      } else if (type == 'calendar') {
        text = item.pubDate;
      }

      return text;
    },
  }
};
</script>
<style lang="less" scoped>
#app-base-test-api {
  padding: 0px 30px;
  text-align: left;
  width: 100%;
  .one-block-1 {
    font-size: 16px;
    padding-top: 10px;
  }
  .one-block-2 {
    padding-top: 10px;
  }
  .one-block-3 {
    //padding-top: 10px;
    .newsTitle {
      font-size: 18px;
      color: #3975C6;
    }
  }
}
</style>
