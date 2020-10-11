module.exports = {
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],
    setupFilesAfterEnv: ["<rootDir>/modules/test/jest.setup.ts"],
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/ts-jest',
        '^.+\\.css$': '<rootDir>/modules/test/css_transform.js',
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    moduleNameMapper: {
        '^@modules/(.*)$': '<rootDir>/modules/$1',
        '^@server/(.*)$': '<rootDir>/server/$1',
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
    coveragePathIgnorePatterns: ["/node_modules/"],
    coverageReporters: ["json", "lcov", "text", "text-summary"],
    globals: {
        "ts-jest": {
            babelConfig: true,
            tsConfig: "tsconfig.jest.json",
            diagnostics: true,
        },
    },
    preset: "ts-jest",
}
