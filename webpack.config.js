const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	mode: "development",
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index_bundle.js',
		publicPath: './dist'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_module/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(c|sc|sa)ss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	],
	devtool: 'eval-cheap-source-map',
	devServer: {
		hot: true,
		overlay: true,
		writeToDisk: true,
		host: "localhost",
		port: 5000
	}
}