# melonJS ES6 Webpack Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/melonjs/es6-boilerplate/blob/master/LICENSE)

A simple ES6 Webpack based boilerplate to create games with [melonJS](https://github.com/melonjs/melonJS), built with :
- [ECMAScript 6](http://es6-features.org) structure and semantic (using melonJS 9.0 or higher)
- [Webpack](https://webpack.js.org/guides)
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) plugin for local development
- [Hot Reloading](https://webpack.js.org/concepts/hot-module-replacement) dev server
- Basic Asset Build [management](https://webpack.js.org/plugins/copy-webpack-plugin/)
- Minification and Transpiling to ES5 using [Babel](https://babeljs.io/docs/setup/#installation)
- Favicon support using the [favicons Webpack Plugin)](https://www.npmjs.com/package/favicons-webpack-plugin)

> Note: ES6 requires melonJS 9.0 or higher.
> Note: pure ES6 inheritance (as opposed to Jay Inheritance) will require melonJS 10.0 or higher

## Prerequisites

- [NodeJS](https://nodejs.org/en/)

## Usage

- `npm run dev` to start the dev server on watch mode at `localhost:9000`.
- `npm run build` to generate a minified, production-ready build, in the `public` folder

if everything goes well, on running the dev server for the first time you should see this :
![boilerplate-helloworld](https://user-images.githubusercontent.com/4033090/134762171-6e1fac3d-8b41-4665-890b-daa217ba61dc.png)

> Note: when generating the production build, webpack will attempt to filter files under the data folder to only copy final assets and ignore project files (e.g. .ftpp project files from Free Texture Packer). If you find your file being wrongly ignore you can easily add the corresponding extention in the [webpack.config.js](webpack.config.js) file

## Folder structure

```none
src
└── data
│    ├── bgm
│    ├── fnt
|    ├── img
|    ├── map
|    └── sfx
└── js
|    ├── renderables
|    └── stage
├── index.js
├── index.css
├── index.html
├── manifest.js
public
├── data
├── bundle.js
└── index.html
```

- `src`
  - the root folder for your game source code
  - The entry file is [index.js](src/index.js).
  - [index.css](src/index.css) and [index.html](src/index.html) are default templates that can be customized
  - [manifest.js](src/manifest.js) is a list of asset to be preloaded by melonJS (these won't be automatically imported and bundled by webpack)
- `scr/js`
  - add your source classes here
- `scr/data`
  - where to add your game assets
- `public`
  - where the production-ready build files will be copied/generated when using `npm run build`

Questions, need help ?
-------------------------------------------------------------------------------
If you need technical support, you can contact us through the following channels :
  - [melonJS developer forum](http://www.html5gamedevs.com/forum/32-melonjs/)
  - [gitter web chat](https://gitter.im/melonjs/public)
  - [melonJS wikipage](https://github.com/melonjs/melonJS/wiki)
  - [Discord](https://discord.gg/aur7JMk)

For any other non technical related questions, feel free to also send us an [email](mailto:contact@melonjs.org).
