/**
 * 菜单
 */
const siderMenu = {
	'menu_1' : {
		icon: 'home',
		title: '资讯',
		pageName: 'Information',
		params: {},
	},
	'menu_2' : {
		icon: 'code',
		title: 'gitee',
		pageName: 'Gitee',
		params: {},
	},
	'menu_3' : {
		icon: 'cloud-server',
		title: '企业',
		pageName: 'Enterprise',
		params: {},
	},
	'menu_4' : {
		icon: 'user',
		title: '我的',
		pageName: 'User',
		params: {},
	}, 
	'menu_5' : {
		icon: 'setting',
		title: '设置',
		pageName: 'Setting',
		params: {},
	}, 	
}

const subMenu = {
	information: {
		'menu_100' : {
			icon: 'profile',
			title: '资讯',
			pageName: 'InformationNewsIndex',
			params: {}
		},
		'menu_110' : {
			icon: 'profile',
			title: '博客',
			pageName: 'InformationBlogIndex',
			params: {}
		},
		'menu_120' : {
			icon: 'profile',
			title: '帖子',
			pageName: 'InformationPostIndex',
			params: {}
		},   
		'menu_130' : {
			icon: 'profile',
			title: '软件',
			pageName: 'InformationSoftIndex',
			params: {}
		},
		'menu_140' : {
			icon: 'profile',
			title: '收藏',
			pageName: 'InformationFavoriteIndex',
			params: {}
		}, 
		'menu_150' : {
			icon: 'profile',
			title: '消息',
			pageName: 'InformationMessageIndex',
			params: {}
		}				                                          
	},
	gitee: {
		'menu_100' : {
			icon: 'profile',
			title: '推荐项目',
			pageName: 'GiteeRecommendIndex',
			params: {}
		},
		'menu_110' : {
			icon: 'profile',
			title: '我的仓库',
			pageName: 'GiteeReposIndex',
			params: {}
		},
		'menu_120' : {
			icon: 'profile',
			title: '动态',
			pageName: 'GiteeActivityIndex',
			params: {}
		},
		'menu_130' : {
			icon: 'profile',
			title: '消息',
			pageName: 'GiteeMessageIndex',
			params: {}
		},
		'menu_140' : {
			icon: 'profile',
			title: '个人中心',
			pageName: 'GiteeMyIndex',
			params: {}
		},
	},
	enterprise: {
		'menu_100' : {
			icon: 'profile',
			title: '测试',
			pageName: 'EnterpriseTestIndex',
			params: {}
		},
	},	
	user: {
		'menu_100' : {
			icon: 'profile',
			title: '测试',
			pageName: 'UserTestIndex',
			params: {}
		},
	},
	setting: {
		'menu_100' : {
			icon: 'profile',
			title: '测试',
			pageName: 'SettingTestIndex',
			params: {}
		},
	}	
}

export {
	siderMenu,
	subMenu
}