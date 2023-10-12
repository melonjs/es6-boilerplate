import { defineConfig } from "vite";
import vitePluginFaviconsInject from "vite-plugin-favicons-inject";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: "",
  build: {
    assetsDir: "assets",
    emptyOutDir: true,
    manifest: true,
    outDir: "public",
    target: "es2015"
  },
  plugins: [
    vitePluginFaviconsInject("./src/favicon/logo.png"),
    viteStaticCopy({
      targets: [
        {
          src: "src/data/*",
          dest: "data/",
        },
      ],
    })
  ]
});