const fs = require("fs");

const saveFile = async (file) => {
  try {
    const { originalname, path } = file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);
    return newPath;
  } catch (error) {
    return null;
  }
};

module.exports = saveFile;
