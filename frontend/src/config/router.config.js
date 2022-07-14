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
        redirect: { name: 'InformationAllIndex' },
        children: [
          {
            path: '/information/all/index',
            name: 'InformationAllIndex',
            component: () => import('@/views/information/all/Index')
          },
          {
            path: '/information/zonghe/index',
            name: 'InformationZongheIndex',
            component: () => import('@/views/information/zonghe/Index')
          },
          {
            path: '/information/soft/index',
            name: 'InformationSoftIndex',
            component: () => import('@/views/information/soft/Index')
          },
        ]  
      },
      {
        path: '/gitee',
        name: 'Gitee',
        component: Menu,
        props: { id: 'gitee' },
        redirect: { name: 'GiteeTestIndex' },
        children: [
          {
            path: '/gitee/test/index',
            name: 'GiteeTestIndex',
            component: () => import('@/views/gitee/test/Index')
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
