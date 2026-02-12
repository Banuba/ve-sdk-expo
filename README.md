# Example of Expo Project with Video Editor React Native Plugin

## Overview

This example demonstrates how to integrate the [Video Editor React Native Plugin](https://github.com/Banuba/ve-sdk-react-native) into an Expo project.

## Launch Instructions

1. Set the Banuba license token [within the app](app/(tabs)/index.tsx#L10).
2. Install ```node_modules``` by running the following command in the terminal:

   ```bash
   npm install
   ```
3. Install resources into your project that will be transferred to the Android and iOS modules after building (add the `assets` directory to the project root). \
   Downloadable resources:
   * Android:
     1. [drawable-xhdpi](https://github.com/Banuba/ve-sdk-android-integration-sample/tree/main/app/src/main/res/drawable-xhdpi), [drawable-xxhdpi](https://github.com/Banuba/ve-sdk-android-integration-sample/blob/main/app/src/main/res/drawable-xxhdpi), [drawable-xxxhdpi](http://github.com/Banuba/ve-sdk-android-integration-sample/tree/main/app/src/main/res/drawable-xxxhdpi) are visual assets for the color filter. previews.
        themes.xml includes implementation of VideoCreationTheme of Video Editor SDK - insert them here `assets/android-res/drawable-xxxhdpi`.

   * iOS:
     1. [luts](https://github.com/Banuba/ve-sdk-ios-integration-sample/tree/main/Example/Example/luts) - the folder where all color effects are stored - insert them here `assets/ios-res/luts`;
     2. [ColorEffectsPreview](https://github.com/Banuba/ve-sdk-ios-integration-sample/tree/main/Example/Example/Assets.xcassets/ColorEffectsPreview) - preview images of color effects - insert them here `assets/ios-res/Images/xcassets/ColorEffectsPreview`;
     3. [Effects Preview](https://github.com/Banuba/ve-sdk-ios-integration-sample/tree/main/Example/Example/Assets.xcassets/Effects%20Preview) - preview images of visual effects - insert them here `assets/ios-res/Images/xcassets/Effects Preview`;

4. Check or modify the functions in `plugins/withVideoEditorNativeConfig.js` - the added functions are responsible for copying resources from the `assets` folder to the Android and iOS modules generated after the build.

5. Run the following command to build native parts: 
   ```bash
   npx expo prebuild --clean
   ```
   
6. Run the project on the devices:
   * Android
   ```bash
   npx expo run:android    
   ```
   * iOS
   ```bash
   npx expo run:ios    
   ```

## Integration instructions

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
5. Add [Localization file](ios-locales/en.lproj/Localizable.strings) and add it to Copy Bundle Resources of iOS project.
