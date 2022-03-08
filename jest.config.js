/*
 * @Author: 周长升
 * @Date: 2022-02-16 14:50:16
 * @LastEditTime: 2022-02-16 15:20:29
 * @LastEditors: 周长升
 * @Description:
 */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
      "packages/**/*.{ts,js,jsx}"
  ],
  coveragePathIgnorePatterns: [
      "jest.config.js",
      "/node_modules/",
      "/dist/",
  ],
  moduleNameMapper: {
      '^@westsecuan/(.*)$': '<rootDir>/packages/$1/'
  }
};
