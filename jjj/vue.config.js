module.exports = {
	
	devServer: {
		//修改端口号
		// port: 443,
		//是否打开https
		//https: true,
		proxy: {
			//劫持域名后的文件
			'/v8': {
				//域名
				target: 'https://c.y.qq.com/',
				// 是否changeOrigin: true,跨域
				ws: true,
				pathRewrite: {
					'^/v8': '/v8'
				}
			},
			'/try': {
				target: 'https://www.runoob.com',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/try': '/try'
				}
			},
			'/artist': {
				target: 'https://autumnfish.cn',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/artist': '/artist'
				}
			},
			'/song': {
				target: 'https://autumnfish.cn',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/song': '/song'
				}
            },
            '/search': {
				target: 'https://autumnfish.cn',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/search': '/search'
				}
            },
			'/twirp': {
				target: 'https://manga.bilibili.com',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/twirp': '/twirp'
				}
			},
			'/username': {
				target: 'http://localhost:3001/',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/username': '/username'
				}
			},
			'/userpost': {
				target: 'http://localhost:3000/',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/userpost': '/userpost'
				}
			},
			'/api': {
				target: 'http://music.163.com',
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': '/'
				}
			},
		
		}
	},
}