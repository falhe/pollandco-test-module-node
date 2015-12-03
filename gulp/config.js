var src = 'app',
	dist = 'public/dist',
	proxyUrl = 'http://localhost/pollandco-test-module-node/public/',
	publicAssets = 'public';

module.exports = {
	browsersync: {
		development: {
			proxy: proxyUrl
			//port: 3000
		}
	},
	delete: {
		src: [dist]
	},
	sass: {
		src: publicAssets + '/sass/**/*.{sass,scss}',
		dest: dist + 'css',
		options: {
			noCache: true,
			compass: false,
			bundleExec: true,
			sourcemap: true
		}
	},
	autoprefixer: {
		browsers: [
			'last 2 versions',
			'safari 5',
			'ie 8',
			'ie 9',
			'opera 12.1',
			'ios 6',
			'android 4'
		],
		cascade: true
	}
};