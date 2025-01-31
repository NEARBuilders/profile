import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginNodePolyfill } from '@rsbuild/plugin-node-polyfill';
import { RsbuildConfig } from "@rsbuild/core";

const isDevelopment = process.env.NODE_ENV === "development";

// Development-only entries and exposes
const devConfig: Partial<RsbuildConfig> = isDevelopment
  ? {
      source: {
        entry: {
          index: "./src/index.tsx",
        },
      },
      plugins: [
        pluginReact(),
        pluginNodePolyfill(),
        pluginModuleFederation({
          name: "profile",
          filename: "profile/remoteEntry.js",
          exposes: {
            "./Profile": "./src/components/Profile.tsx",
          },
          experiments: {
            federationRuntime: "hoisted",
          },
          shared: {
            react: { singleton: true, eager: true, requiredVersion: "^18.0.0" },
            "react-dom": {
              singleton: true,
              eager: true,
              requiredVersion: "^18.0.0",
            },
            "@tanstack/react-router": { singleton: true, eager: true },
          },
        }),
      ],
    }
  : {
      source: {
        entry: {
          index: "./src/components/Profile.tsx",
        },
      },
      plugins: [
        pluginReact(),
        pluginNodePolyfill(),
        pluginModuleFederation({
          name: "profile",
          filename: "profile/remoteEntry.js",
          exposes: {
            "./Profile": "./src/components/Profile.tsx",
          },
          experiments: {
            federationRuntime: "hoisted",
          },
          shared: {
            react: { singleton: true, eager: true, requiredVersion: "^18.0.0" },
            "react-dom": {
              singleton: true,
              eager: true,
              requiredVersion: "^18.0.0",
            },
          },
        }),
      ],
    };
// import { TanStackRouterRspack } from '@tanstack/router-plugin/rspack';

export default defineConfig({
  ...devConfig,
  html: {
    template: "./index.html",
  },
  server: {
    port: 5170,
  },
  output: {
    distPath: {
      root: "dist",
    },
  },
  // tools: {
  //   rspack: {
  //     plugins: [
  //       TanStackRouterRspack({
  //         routesDirectory: "./src/routes",
  //         enableRouteGeneration: true
  //       }),
  //     ]
  //   }
  // },
});
