const fs = require('fs');
const path = require('path');
const genHook = require('../utils/genHook');
const {renameFromKebabToCamel} = require("../utils/methods");

describe('genHook', () => {
  const testHookName = 'use-debounce';
  const testFolderPath = path.join(__dirname, 'testHooks');

  beforeEach(() => {
    if (fs.existsSync(testFolderPath)) {
      fs.rmSync(testFolderPath, { recursive: true });
    }
  });

  it('generates useDebounce hook file successfully', () => {
    genHook(testHookName, testFolderPath);

    const generatedFilePath = path.join(testFolderPath, `${renameFromKebabToCamel(testHookName)}.js`);
    expect(fs.existsSync(generatedFilePath)).toBe(true);
    
    const fileContent = fs.readFileSync(generatedFilePath, 'utf8');
    expect(fileContent).toContain(`export default ${renameFromKebabToCamel(testHookName)}`);
  });
});
