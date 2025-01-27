import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';


export default defineConfig({
  server: {
    port: 5170,
  },
  output: {
    distPath: {
      root: 'dist'
    },
  },
  tools: {
    rspack: {
      plugins: [new ModuleFederationPlugin({
        name: 'profile',
        filename: 'profile/remoteEntry.js',
        exposes: {
          './App': './src/App.jsx'
        },
        experiments: {
          federationRuntime: 'hoisted'
        },
        shared: {
          'react': { singleton: true, eager: true, requiredVersion: '^18.0.0' },
          'react-dom': { singleton: true, eager: true, requiredVersion: '^18.0.0' }
        },
      })]
    }
  },
  plugins: [
    pluginReact()
  ]
});
