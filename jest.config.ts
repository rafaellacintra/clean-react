import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/main/**/*',
    '!<rootDir>/src/**/index.ts',
    '!**/*.d.ts'
  ],
  testMatch: ["<rootDir>/tests/**/*.ts?(x)", "**/?(*.)(spec|test).ts?(x)"],
    testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  transform: {
    '.+\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy'
  }
};
export default config;
