# melonJS ES6 Webpack Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/melonjs/es6-boilerplate/blob/master/LICENSE)

A simple ES6 Webpack based boilerplate to create games with [melonJS](https://github.com/melonjs/melonJS), built with :
- [melonJS 2](https://github.com/melonjs/melonJS)
- [ECMAScript 6](http://es6-features.org) structure and semantic
- [Webpack](https://webpack.js.org/guides)
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) plugin for local development
- [Hot Reloading](https://webpack.js.org/concepts/hot-module-replacement) dev server
- Basic Asset Build [management](https://webpack.js.org/plugins/copy-webpack-plugin/)
- Minification and Transpiling to ES5 using [Babel](https://babeljs.io/docs/setup/#installation)
- Favicon support using the [favicons Webpack Plugin)](https://www.npmjs.com/package/favicons-webpack-plugin)
- a [debug plugin](#Debug-plugin) to display stats on number of objects, memory usage, draw time, frame rate, etc...

## Prerequisites

Ensure you have [Node.js](http://nodejs.org/) installed, then install all the build dependencies in the folder where you cloned the repository :

    $ [sudo] npm install

## Usage

- `npm run dev` to start the dev server on watch mode at `localhost:9000`.
- `npm run build` to generate a minified, production-ready build, in the `public` folder

if everything goes well, on running the dev server for the first time you should see this :
![boilerplate-helloworld](https://user-images.githubusercontent.com/4033090/134762171-6e1fac3d-8b41-4665-890b-daa217ba61dc.png)

> Note: when generating the production build, Webpack will attempt to filter files under the data folder to only copy final assets and ignore project files (e.g. .ftpp project files from Free Texture Packer). If you find your file being wrongly ignore you can easily add the corresponding extension in the [webpack.config.js](webpack.config.js) file

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

Debug plugin
-------------------------------------------------------------------------------
In development mode, the boilerplate will automatically register and instantiate the melonJS Debug Plugin
![debug-panel](https://user-images.githubusercontent.com/4033090/138006717-cf3165a4-a52d-4855-a7c7-16b2a09ed124.png)

the Debug Panel is hidden by default and can be displayed using the "S" key, it will then provide the below information :
* Amount of objects currently active in the current scene
* Amount of draws operation
* Amount of body shape (requires to enable the hitbox checkbox)
* Amount of bounding box
* Amount of sprites objects
* Amount of objects currently inactive in the the object pool
* Heap/memory usage
* Frame update time (in ms)
* Frame draw time (in ms)
* Current fps rate vs target fps

> Note: Heap information requires starting Chrome [with](http://www.chromium.org/developers/how-tos/run-chromium-with-flags) `--enable-precise-memory-info`

Additionally, using the checkbox in the panel it is also possible to draw :
* Shape and Bounding box for all objects
* Current velocity vector
* Quadtree spatial visualization


Questions, need help ?
-------------------------------------------------------------------------------
If you need technical support, you can contact us through the following channels :
  - [melonJS developer forum](http://www.html5gamedevs.com/forum/32-melonjs/)
  - [gitter web chat](https://gitter.im/melonjs/public)
  - [melonJS wikipage](https://github.com/melonjs/melonJS/wiki)
  - [Discord](https://discord.gg/aur7JMk)

For any other non technical related questions, feel free to also send us an [email](mailto:contact@melonjs.org).
