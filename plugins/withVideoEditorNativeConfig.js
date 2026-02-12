const { withDangerousMod, withAndroidManifest } = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

function withBanubaPodSources(config) {
  return withDangerousMod(config, ["ios", async (config) => {
    const podfilePath = path.join(config.modRequest.platformProjectRoot, "Podfile");
    let contents = await fs.promises.readFile(podfilePath, "utf8");

    const sourcesToAdd = [
      `source 'https://github.com/CocoaPods/Specs.git'`,
      `source 'https://github.com/Banuba/specs.git'`,
      `source 'https://github.com/sdk-banuba/banuba-sdk-podspecs.git'`,
    ];

    let header = "";
    for (const s of sourcesToAdd) {
      if (!contents.includes(s)) header += s + "\n";
    }

    if (header) {
      contents = header + contents;
      await fs.promises.writeFile(podfilePath, contents, "utf8");
    }

    return config;
  }]);
}

function withBanubaActivity(config) {
  return withAndroidManifest(config, (config) => {
    const manifest = config.modResults;
    const app = manifest.manifest.application?.[0];
    if (!app) return config;

    app.activity = app.activity || [];
    const name = "com.banuba.sdk.ve.flow.VideoCreationActivity";

    const exists = app.activity.some((a) => a.$?.["android:name"] === name);
    if (!exists) {
      app.activity.push({
        $: {
          "android:name": name,
          "android:exported": "false",
          "android:screenOrientation": "portrait",
          "android:theme": "@style/CustomIntegrationAppTheme",
          "android:windowSoftInputMode": "adjustResize",
          "tools:replace": "android:theme",
        },
      });
    }

    manifest.manifest.$ = manifest.manifest.$ || {};
    manifest.manifest.$["xmlns:tools"] =
      manifest.manifest.$["xmlns:tools"] || "http://schemas.android.com/tools";

    return config;
  });
}

function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDirSync(from, to);
    else fs.copyFileSync(from, to);
  }
}

function withIosLocalizableStrings(config) {
  return withDangerousMod(config, ["ios", async (config) => {
    const projectRoot = config.modRequest.projectRoot;
    const sourceRoot = path.join(projectRoot, "ios-locales");
    const destRoot = path.join(config.modRequest.platformProjectRoot, "en.lproj");

    copyDirSync(sourceRoot, destRoot);
    return config;
  }]);
}

function withIosLutsResources(config) {
  return withDangerousMod(config, ["ios", async (config) => {
    const projectRoot = config.modRequest.projectRoot;
    //Add your resource directory from which this function will copy and paste Luts into the desired part of the project during assembly.
    const sourceResDir = path.join(projectRoot, "assets", "ios-res", "luts");
    const destResDir = path.join(config.modRequest.platformProjectRoot, "vesdkexpo", "luts");

    copyDirSync(sourceResDir, destResDir);
    return config;
  }]);
}

function withIosDrawableEffectsPreviewAndColorEffectsPreviewResources(config) {
  return withDangerousMod(config, ["ios", async (config) => {
    const projectRoot = config.modRequest.projectRoot;
    //Add your resource directory from which this function will copy and paste EffectsPreview and ColorEffectsPreview into the desired part of the project during assembly.
    const sourceResDir = path.join(projectRoot, "assets", "ios-res", "Images", "xcassets");
    const destResDir = path.join(config.modRequest.platformProjectRoot, "vesdkexpo", "Images.xcassets");

    copyDirSync(sourceResDir, destResDir);
    return config;
  }]);
}

function withAndroidDrawableResources(config) {
  return withDangerousMod(config, ["android", async (config) => {
    const projectRoot = config.modRequest.projectRoot;
    //Add your resource directory from which this function will copy and paste drawable-xxxhdpi into the desired part of the project during assembly.
    const sourceResDir = path.join(projectRoot, "assets", "android-res", "drawable-xxxhdpi");
    const destResDir = path.join(config.modRequest.platformProjectRoot, "app", "src", "main", "res", "drawable-xxxhdpi");

    copyDirSync(sourceResDir, destResDir);
    return config;
  }]);
}

module.exports = function withBanuba(config) {
  config = withBanubaPodSources(config);
  config = withBanubaActivity(config);
  config = withIosLocalizableStrings(config);
  config = withAndroidDrawableResources(config)
  config = withIosDrawableEffectsPreviewAndColorEffectsPreviewResources(config)
  config = withIosLutsResources(config)
  return config;
};