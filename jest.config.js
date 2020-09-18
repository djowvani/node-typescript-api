const { resolve } = require('path');
const root = resolve(__dirname);

module.exports = {
    rootDir: root,
    displayname: 'root-tests',
    testMatch: ['<rootDir>/src/**/*.test.ts'],
    testEnviroment: 'node',
    clearMocks: true,
    preset: 'ts-jest',
    moduleNameMapper: {
        '@src/(.*)': '<rootDir>/src/$1,',
        '@test/(.*)': '<rootDir>/test/$1,'
    }
}