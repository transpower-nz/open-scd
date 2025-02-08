const fs = require("fs");
const path = require("path");

// Electron Builder afterPack hook configuration
// Required because package.json is especially difficult to handle:
// https://github.com/electron-userland/electron-builder/issues/4160
const afterPack = async (context) => {
  const { appOutDir, packager } = context;

  try {
    const sourcePackageJsonPath = path.join(
      packager.projectDir,
      "package.json"
    );

    const resourcesPath = path.join(appOutDir, "resources");
    if (!fs.existsSync(resourcesPath)) {
      fs.mkdirSync(resourcesPath);
    }

    const destPackageJsonPath = path.join(resourcesPath, "package.json");
    fs.copyFileSync(sourcePackageJsonPath, destPackageJsonPath);
  } catch (error) {
    console.error("Error copying package.json:", error);
  }
};

module.exports = {
  afterPack,
};
