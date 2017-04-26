const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'react-hot-loader/patch',
		'babel-polyfill',
		/*'style!css!nm/main.css', //import LVTK
		'style!css!nm/icons.css', //import LVTK
		'style!css!nm/fonts.css',*/ //import LVTK
		'./index.jsx'
	],
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel'
		}, {
			test: /\.css$/,
			loader: 'style!css?modules&importLoaders=1!postcss',
			exclude: /ui-toolkit/
		}, {
			test: /\.(woff|woff2)/,
			loader: 'url?limit=10000&mimetype=application/font-woff'
		}, {
			test: /\.ttf/,
			loader: 'url?limit=10000&mimetype=application/octet-stream'
		}, {
			test: /\.eot/,
			loader: 'file'
		}, {
			test: /\.svg/,
			loader: 'url?limit=10000&mimetype=image/svg+xml'
		}]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	/*resolve: {
		root: [
			path.resolve('./ext/ui-toolkit/css') //resolve to the root CSS directory of the ui-toolkit
		]
	},*/
	postcss: function(webpack) {
		return [
			require('postcss-import')({
				addDependencyTo: webpack
			}),
			require('postcss-cssnext')(),
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Sales Cycle',
			template: 'index.ejs'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'source-map'
}
