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
        redirect: { name: 'InformationZongheIndex' },
        children: [
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
          {
            path: '/information/latest/index',
            name: 'InformationLatestIndex',
            component: () => import('@/views/information/latest/Index')
          },
        ]  
      },
      {
        path: '/other',
        name: 'Other',
        component: Menu,
        props: { id: 'other' },
        redirect: { name: 'OtherTestIndex' },
        children: [
          {
            path: '/other/test/index',
            name: 'OtherTestIndex',
            component: () => import('@/views/other/test/Index')
          },
        ] 
      }
    ]
  }
]
