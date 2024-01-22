(function () {
  const fs = require('fs');
  const path = require('path');

  moveBrowserFilesToDocs();
  replaceMockServiceWorkerUrl();

  function moveBrowserFilesToDocs() {
    const sourceDir = 'docs/browser';
    const destDir = 'docs';

    if (!fs.existsSync(sourceDir)) {
      return;
    }
    fs.readdirSync(sourceDir).forEach(file => {
      const currentPath = path.join(sourceDir, file);
      const newPath = path.join(destDir, file);
      fs.renameSync(currentPath, newPath);
    });
    fs.rmdirSync(sourceDir);
  }

  function replaceMockServiceWorkerUrl() {
    const sourceDir = 'docs';
    const mainJs = fs.readdirSync(sourceDir)
      .find(file => file.match(/^main-.*\.js$/));
    if (mainJs) {
      const mainJsPath = path.join(sourceDir, mainJs);
      const content = fs.readFileSync(mainJsPath, {encoding: 'utf-8'});
      const replacedContent = content.replaceAll(/"\/mockServiceWorker\.js"/g, '"mockServiceWorker.js"');
      fs.writeFileSync(mainJsPath, replacedContent, 'utf-8');
    }
  }
})();
