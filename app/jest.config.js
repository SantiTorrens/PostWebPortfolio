export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    "<rootDir>/globals.d.ts"
  ],

};
