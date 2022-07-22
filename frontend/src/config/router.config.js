/**
 * 基础路由
 * @type { *[] }
 */
import {AppSider, Menu} from '@/layouts'

export const constantRouterMap = [
  {
    path: '/',
    component: AppSider,
    children: [
      {
        path: '/information',
        name: 'Information',
        component: Menu,
        props: { id: 'information' },
        redirect: { name: 'InformationNewsIndex' },
        children: [
          {
            path: '/information/news/index',
            name: 'InformationNewsIndex',
            component: () => import('@/views/information/news/Index')
          },
          {
            path: '/information/blog/index',
            name: 'InformationBlogIndex',
            component: () => import('@/views/information/blog/Index')
          },
          {
            path: '/information/post/index',
            name: 'InformationPostIndex',
            component: () => import('@/views/information/post/Index')
          },
          {
            path: '/information/soft/index',
            name: 'InformationSoftIndex',
            component: () => import('@/views/information/soft/Index')
          },
          {
            path: '/information/favorite/index',
            name: 'InformationFavoriteIndex',
            component: () => import('@/views/information/favorite/Index')
          },
          {
            path: '/information/message/index',
            name: 'InformationMessageIndex',
            component: () => import('@/views/information/message/Index')
          },
        ]  
      },
      {
        path: '/gitee',
        name: 'Gitee',
        component: Menu,
        props: { id: 'gitee' },
        redirect: { name: 'GiteeRecommendIndex' },
        children: [
          {
            path: '/gitee/recommend/index',
            name: 'GiteeRecommendIndex',
            component: () => import('@/views/gitee/recommend/Index')
          },
          {
            path: '/gitee/repos/index',
            name: 'GiteeReposIndex',
            component: () => import('@/views/gitee/repos/Index')
          },
          {
            path: '/gitee/activity/index',
            name: 'GiteeActivityIndex',
            component: () => import('@/views/gitee/activity/Index')
          },
          {
            path: '/gitee/message/index',
            name: 'GiteeMessageIndex',
            component: () => import('@/views/gitee/message/Index')
          },
          {
            path: '/gitee/my/index',
            name: 'GiteeMyIndex',
            component: () => import('@/views/gitee/my/Index')
          },                                        
        ] 
      },
      {
        path: '/enterprise',
        name: 'Enterprise',
        component: Menu,
        props: { id: 'enterprise' },
        redirect: { name: 'EnterpriseTestIndex' },
        children: [
          {
            path: '/enterprise/test/index',
            name: 'EnterpriseTestIndex',
            component: () => import('@/views/enterprise/test/Index')
          },
        ] 
      },
      {
        path: '/user',
        name: 'User',
        component: Menu,
        props: { id: 'user' },
        redirect: { name: 'UserTestIndex' },
        children: [
          {
            path: '/other/user/index',
            name: 'UserTestIndex',
            component: () => import('@/views/user/test/Index')
          },
        ] 
      },                  
      {
        path: '/setting',
        name: 'Setting',
        component: Menu,
        props: { id: 'setting' },
        redirect: { name: 'SettingTestIndex' },
        children: [
          {
            path: '/setting/test/index',
            name: 'SettingTestIndex',
            component: () => import('@/views/setting/test/Index')
          },
        ] 
      }
    ]
  }
]
