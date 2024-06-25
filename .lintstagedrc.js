module.exports = {
  // this will check Typescript files
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit --skipLibCheck --incremental',

  // This will lint TypeScript files
  '**/*.(ts|tsx)': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}`,
  ],
};
