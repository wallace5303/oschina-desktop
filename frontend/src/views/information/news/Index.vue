<template>
  <div id="app-base-test-api">
    <div class="one-block-1">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1">
          <span slot="tab">
            <!-- <a-icon type="apple" /> -->
            最新资讯
          </span>
          <div class="one-block-3">
            <a-list item-layout="vertical" size="large" :data-source="listData">
              <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
                <template v-for="{ type, text } in actions" slot="actions">
                  <span :key="type">
                    <a-icon :type="type" style="margin-right: 8px" />
                    {{ text }}
                  </span>
                </template>
                <img
                  slot="extra"
                  width="272"
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
                <a-list-item-meta :description="item.description">
                  <a slot="title" :href="item.href">{{ item.title }}</a>
                  <a-avatar slot="avatar" :src="item.avatar" />
                </a-list-item-meta>
                {{ item.content }}
              </a-list-item>
            </a-list>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab">
            <!-- <a-icon type="android" /> -->
            综合资讯
          </span>
          <div class="one-block-3">
            <a-list item-layout="vertical" size="large" :data-source="listData">
              <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
                <template v-for="{ type, text } in actions" slot="actions">
                  <span :key="type">
                    <a-icon :type="type" style="margin-right: 8px" />
                    {{ text }}
                  </span>
                </template>
                <img
                  slot="extra"
                  width="272"
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
                <a-list-item-meta :description="item.description">
                  <a slot="title" :href="item.href">{{ item.title }}</a>
                  <a-avatar slot="avatar" :src="item.avatar" />
                </a-list-item-meta>
                {{ item.content }}
              </a-list-item>
            </a-list>
          </div>
        </a-tab-pane>
        <a-tab-pane key="3">
          <span slot="tab">
            <!-- <a-icon type="android" /> -->
            软件更新
          </span>
          <div class="one-block-3">
            <a-list item-layout="vertical" size="large" :data-source="listData">
              <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
                <template v-for="{ type, text } in actions" slot="actions">
                  <span :key="type">
                    <a-icon :type="type" style="margin-right: 8px" />
                    {{ text }}
                  </span>
                </template>
                <img
                  slot="extra"
                  width="272"
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
                <a-list-item-meta :description="item.description">
                  <a slot="title" :href="item.href">{{ item.title }}</a>
                  <a-avatar slot="avatar" :src="item.avatar" />
                </a-list-item-meta>
                {{ item.content }}
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
import { ipcApiRoute } from '@/api/main'

const listData = [];
for (let i = 0; i < 2; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

export default {
  data() {
    return {
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    };
  },
  methods: {
    exec (id) {
      const params = {
        id: id
      }
      this.$ipcInvoke(ipcApiRoute.test, params).then(res => {
        console.log('res:', res)
      }) 
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
  }
}
</style>
