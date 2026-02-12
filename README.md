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
4. Add the necessary resources to the created iOS and Android modules according to the [iOS documentation](https://docs.banuba.com/ve-pe-sdk/docs/ios/resources-installation) and [android doumentation](https://docs.banuba.com/ve-pe-sdk/docs/android/resources-installation).
   * Android:
     1. [drawable-xhdpi](https://github.com/Banuba/ve-sdk-android-integration-sample/tree/main/app/src/main/res/drawable-xhdpi), [drawable-xxhdpi](https://github.com/Banuba/ve-sdk-android-integration-sample/blob/main/app/src/main/res/drawable-xxhdpi), [drawable-xxxhdpi](http://github.com/Banuba/ve-sdk-android-integration-sample/tree/main/app/src/main/res/drawable-xxxhdpi) are visual assets for color filter previews.
     themes.xml includes implementation of VideoCreationTheme of Video Editor SDK - insert them here `android/app/src/main/res`.
     2. [themes.xml](https://github.com/Banuba/ve-sdk-android-integration-sample/blob/main/app/src/main/res/values/themes.xml) includes implementation of VideoCreationTheme of Video Editor SDK - insert them here `android/app/src/main/res/values`.

   * iOS:
     1. [luts](https://github.com/Banuba/ve-sdk-ios-integration-sample/tree/main/Example/Example/luts) - the folder where all color effects are stored  - insert them here `ios/vesdkexpo`; 
     2. [ColorEffectsPreview](https://github.com/Banuba/ve-sdk-ios-integration-sample/tree/main/Example/Example/Assets.xcassets/ColorEffectsPreview) - preview images of color effects - insert them here `ios/vesdkexpo/Images.xcassets`;
     3. [Effects Preview](https://github.com/Banuba/ve-sdk-ios-integration-sample/tree/main/Example/Example/Assets.xcassets/Effects%20Preview) - preview images of visual effects - insert them here `ios/vesdkexpo/Images.xcassets`;
     4. [Localized Strings](https://github.com/Banuba/ve-sdk-ios-integration-sample/blob/main/Example/Example/en.lproj/Localizable.strings) - insert them here `ios/vesdkexpo/en.lproj` and add it to Copy Bundle Resources of iOS project.
   
    \
   Important !\
   Manual copying preserves your files in Android and iOS modules until they are cleared.
 
 \
5. Run the project on the devices:
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
4. Add the [necessary permissons](app.json#L13) for iOS.zable.strings&#41;
5. Add [Localization file](ios-locales/en.lproj/Localizable.strings) and add it to Copy Bundle Resources of iOS project.
