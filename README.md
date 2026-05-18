# Banuba Video Editor SDK — Expo example

[Banuba Video Editor SDK](https://www.banuba.com/video-editor-sdk) lets you embed a full-featured video editor with AR filters, effects, trimming, and AI background removal into your Expo (React Native) app.

This repository is an Expo example project that shows how to integrate the Video Editor SDK end-to-end on iOS and Android.

## Overview

The example app demonstrates:
- Launching the Banuba Video Editor from an Expo app.
- Integrating the React Native plugin in an Expo workflow.
- Exporting edited videos for use elsewhere in your app.

## Requirements

- Node.js 18+
- Expo SDK matching the version in `package.json`
- iOS 13.0+ (for iOS builds)
- Android 7.0 (API 24)+ (for Android builds)

## License

The example code in this repository is provided under the terms in the LICENSE file. The Banuba Video Editor SDK itself is commercial — a trial token is required to run the editor.

To obtain a free trial token, send a message via [www.banuba.com/contacts](https://www.banuba.com/contacts) — we'll respond with a trial token.

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
4. Add required resources to iOS and Android modules according to the [iOS documentation](https://docs.banuba.com/ve-pe-sdk/docs/ios/resources-installation) and [Android doumentation](https://docs.banuba.com/ve-pe-sdk/docs/android/resources-installation).\
   Please, make sure all these resources are present in your project:
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
   :exclamation: Important  
   Expo cleans up native modules after the `prebuild` phase. You'll need to repeat step 4 again.
 
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

## Documentation

Full Banuba Video Editor SDK documentation: [docs.banuba.com/ve-pe-sdk](https://docs.banuba.com/ve-pe-sdk).

React Native specific docs: [Banuba Photo Editor React Native](https://docs.banuba.com/ve-pe-sdk/docs/react/pe_installation.md) · [Integration Guide on React Native](https://docs.banuba.com/ve-pe-sdk/docs/react/pe_integration.md).

## Support

For help with this example or integration questions, contact [www.banuba.com/support](https://www.banuba.com/support).

## Dependencies

See `package.json` for the exact React Native plugin version (`@banuba/ve-sdk-react-native`) and Expo SDK version. The Banuba Video Editor SDK native libraries are pulled in transitively by the plugin.
