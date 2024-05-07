const path = require('path');

module.exports = {
	entry: './src/indexAbuelo.ts',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['css-loader'],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
<<<<<<< HEAD
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'images',
						},
					},
				],
			},
=======
>>>>>>> 22e0a98b70b3c75bf9a609a5b226d90fe4dc2a1f
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
