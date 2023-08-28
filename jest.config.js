/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	collectCoverageFrom: ['src/**/*.{js,ts}', '!**/node_modules/**'],
	roots: ['<rootDir>/src', '<rootDir>/tests'],
	testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)', '**/tests/gutenberg_scraper.test.ts'],
	moduleDirectories: ['node_modules', 'src'],
	transform: {
		'^.+\\.ts?$': 'ts-jest',
	},
	moduleNameMapper: {
		'@settings/(.*)': '<rootDir>/src/settings/$1',
		'@models/(.*)': '<rootDir>/src/models/$1',
		'@editor/(.*)': '<rootDir>/src/editor/$1',
		'@utils/(.*)': '<rootDir>/src/utils/$1',
		'@apis/(.*)': '<rootDir>/src/apis/$1',
		'@src/(.*)': '<rootDir>/src/$1',
		obsidian: '<rootDir>/tests/mock_obsidian.test.ts'
	},
};
