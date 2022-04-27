module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverage: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  tranform: {
    ".+\\ts$": "ts-jest",
  },
};
