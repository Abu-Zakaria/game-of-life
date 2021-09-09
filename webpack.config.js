module.exports = {
	entry: './src/main.ts',
	mode: "development",
	output: {
		path: `${__dirname}/public`,
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	}
}