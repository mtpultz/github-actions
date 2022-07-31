const { pathsToModuleNameMapper } = require('ts-jest');
const { paths } = require('./tsconfig.json').compilerOptions;

globalThis.ngJest = {
  skipNgcc: false,
  tsconfig: 'tsconfig.spec.json',
};

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: ['<rootDir>/src/test.ts'],
  transformIgnorePatterns: ['node_modules/(?!uuid).+\\.js$'],
};
