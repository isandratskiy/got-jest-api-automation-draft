module.exports = {
	rootDir: '.',
	testMatch: ['<rootDir>src/tests/**/*.test.ts'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	setupFilesAfterEnv: ['jest-allure/dist/setup'],
	reporters: ['jest-spec-reporter'],
}
