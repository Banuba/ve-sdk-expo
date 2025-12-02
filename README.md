# Example of Expo Project with Video Editor React Native Plugin

## Overview

This example demonstrates how to integrate the [Video Editor React Native Plugin](https://github.com/Banuba/ve-sdk-react-native) into an Expo project.

## Launch Instructions

1. Set the Banuba license token [within the app](app/(tabs)/index.tsx#L10).
2. Install ```node_modules``` by running the following command in the terminal:

   ```bash
   npm install
   ```
3. Run the following command to build native parts: 
   ```bash
   npx expo prebuild --clean
   ```
4. Run the project on the devices:
   * Android
   ```bash
   npx expo run:android    
   ```
   * iOS
   ```bash
   npx expo run:ios    
   ```

## Integration insttructions

1. Run the command to intall Video Editor React Native Plugin: 
   ```bash
   npm install video-editor-react-native
   ```

2. Add [Expo config plugin](plugins/withBanubaVideoEditor.js) (Android Manifest + iOS Podfile) to the root of your project
3. Register the plugin in app.json (or app.config.js)
   ```typescript
   "expo": {
      "plugins": [
         "./plugins/withVideoEditorNativeConfig",
         ...
      ]
   }
   ```
4. Add the [necessary permissons](app.json#L13) for iOS.
5. Add [Localization file](ios-locales/en.lproj/Localizable.strings).
