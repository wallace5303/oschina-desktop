<template>
  <div id="information-news-index">
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
                  <a slot="title" href="#" class="news-title" @click="showDetail(item.id)">{{ item.title }}</a>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>  
    <div class="one-block-2">
      <a-drawer
        :title="newsTitle"
        width="100%"
        :visible="detailVisible"
        :body-style="{ panding: '10px' }"
        :header-style="{ textAlign: 'center' }"
        @close="onDetailClose"
      >
        <a-space :style="{ fontSize: '14px' }">
          <span>作者：{{ newsContent.author }}</span>
          <span>{{ newsContent.pubDate }}</span>
          <span><a-icon type="message" /> {{ newsContent.commentCount }}</span>
        </a-space>
        <div :style="{ fontSize: '14px', color: '#000' }">
          <p/>
          <div v-html="newsContent.body"></div>
        </div>
      </a-drawer>
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
      detailVisible: false,
      loading: false,
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
      newsTitle: '',
      newsContent: ''
    };
  },
  mounted () {
    this.init();
    this.getNews();
  },
  methods: {
    init () {
      const token_info = storage.get('token_info');
      this.auth_token = token_info.access_token;
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
    getNewsDetail (id) {
      const params = {
        access_token: this.auth_token,
        id:id,
        dataType: 'json'
      }
      this.$ipcInvoke(ipcApiRoute.oschina.getNewsDetail, params).then(res => {
        console.log('res:', res)
        if (_.isEmpty(res)) {
          this.$message.error('数据不存在');
        }
        this.newsContent = res;
        this.newsTitle = res.title;
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
    showDetail(id) {
      this.detailVisible = true;
      this.getNewsDetail(id);
    },
    onDetailClose () {
      console.log('sssss');
      this.detailVisible = false;
    } 
  }
};
</script>
<style lang="less" scoped>
#information-news-index {
  padding: 0px 30px;
  text-align: left;
  width: 100%;
  .one-block-1 {
    font-size: 16px;
    padding-top: 10px;
  }
  .one-block-2 {
    padding-top: 0px;
  }
  .one-block-3 {
    //padding-top: 10px;
  }
}
</style>
