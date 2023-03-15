const path = require('path');
const fs = require("fs");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
require("@babel/register");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						generatorOpts: { compact: false },
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			hash: true,
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "./src/data",
					to: "./data",
					filter: async (resourcePath) => {
						const data = await fs.promises.readFile(resourcePath);

						// add your custom extension here if not listed
						var texture = /\.(jpe?g|gif|png|svg|heic|avif|webp|pkm|pvr)$/;
						var fnt = /\.(woff|woff2|ttf|fnt)$/;
						var map = /\.(tmx|tmj|tsx|tsj)$/;
						var audio = /\.(wav|mp3|mpeg|opus|ogg|oga|wav|aac|caf|m4a|m4b|mp4|weba|webm|dolby|flac)$/;
						var misc = /\.(xml|bin|glsl|ym|json|js)$/;

						// only copy production files
						var ret = texture.test(resourcePath) || fnt.test(resourcePath) || map.test(resourcePath) || audio.test(resourcePath) || misc.test(resourcePath);

						if (ret === false) {
							console.log("ignoring data: " + resourcePath);
						}
						return ret;
					},
				},
			],
		}),
		new FaviconsWebpackPlugin({
			logo: "./src/favicon/logo.png", // svg works too!
			mode: "auto", // optional can be 'webapp', 'light' or 'auto' - 'auto' by default
			devMode: "webapp", // optional can be 'webapp' or 'light' - 'light' by default
			favicons: {
				appName: "melonJS ES6 Boilerplate",
				appDescription: "My melonJS ES6 Boilerplate Game",
				developerName: "melonJS",
				developerURL: "http://www.melonjs.org", // prevent retrieving from the nearest package.json
				icons: {
					coast: false,
					yandex: false,
					appleStartup: false,
				},
			},
		}),
	],
	resolve: {
		modules: [path.resolve("./src"), path.resolve("./node_modules")],
	},
	performance: {
		hints: false,
		maxEntrypointSize: 524288,
		maxAssetSize: 524288
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		hot: true,
		port: 9000,
		open: true,
	},
	watch: false,
};
