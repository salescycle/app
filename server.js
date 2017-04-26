const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config.debug')

const server = new WebpackDevServer(webpack(webpackConfig), {
	publicPath: webpackConfig.output.publicPath,
	hot: true,
	historyApiFallback: true
})

server.listen(3000, 'localhost', function(err) {
	if (err) {
		return console.error(err)
	}

	console.info('Listening at http://localhost:3000/')
})
