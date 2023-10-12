# melonJS ES6 Vite Boilerplate
![melonJS Logo](https://github.com/melonjs/melonJS/raw/master/media/Banner/Banner%20-%20Billboard%20-%20Original%20Logo%20-%20horizontal.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/melonjs/es6-boilerplate/blob/master/LICENSE)

A simple ES6 Vite based boilerplate to create games with [melonJS](https://github.com/melonjs/melonJS), built with :
- [melonJS 2](https://github.com/melonjs/melonJS)
- [ECMAScript 6](http://es6-features.org) structure and semantic
- [Vite](https://vitejs.dev) ultra fast bundler
- Default transpiling to ES5 using target [option](./vite.config.ts) in the Vite config file
- Static Asset [management](https://www.npmjs.com/package/vite-plugin-static-copy) (used for the melonJS preloader)
- Favicon support using the [vite-plugin-favicons-inject](https://www.npmjs.com/package/vite-plugin-favicons-inject) plugin
- melonJS [debug plugin](https://github.com/melonjs/debug-plugin) to display stats on number of objects, memory usage, draw time, frame rate, etc...

## Prerequisites

Ensure you have [Node.js](http://nodejs.org/) installed, then install all the build dependencies in the folder where you cloned the repository :

    $ [sudo] npm install

## Usage

- `npm run dev` to start the dev server on watch mode at `localhost:5173`.
- `npm run build` to generate a minified, production-ready build, in the `public` folder

if everything goes well, on running the dev server for the first time you should see this :
![boilerplate-helloworld](https://user-images.githubusercontent.com/4033090/134762171-6e1fac3d-8b41-4665-890b-daa217ba61dc.png)

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
  - [manifest.js](src/manifest.js) is a list of asset to be preloaded by melonJS
- `src/js`
  - add your source classes here
- `src/data`
  - where to add your game assets
- `public`
  - where the production-ready build files will be copied/generated when using `npm run build`

Debug plugin
-------------------------------------------------------------------------------
The boilerplate include the melonJS plugin, and will automatically import and instantiate it when running under a development environement.

the Debug Panel is hidden by default and can be displayed using the "S" key, see [here](https://github.com/melonjs/debug-plugin/blob/main/README.md) for more details about the plugin.


Questions, need help ?
-------------------------------------------------------------------------------
If you need technical support, you can contact us through the following channels :
* Forums: with melonJS 2 we moved to a new discourse [forum](https://melonjs.discourse.group), but we can still also find the previous one [here](http://www.html5gamedevs.com/forum/32-melonjs/)
* Chat: come and chat with us on [discord](https://discord.gg/aur7JMk)
* we tried to keep our [wikipage](https://github.com/melonjs/melonJS/wiki) up-to-date with useful links, tutorials, and anything related melonJS.
