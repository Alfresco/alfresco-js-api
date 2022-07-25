module.exports = () => ({
    autoDetect: true,

    // modify `files` automatic configuration settings
    files: ['src/**/*.ts', '!src/**/*.spec.ts'],

    // modify `tests` automatic configuration settings
    tests: ['src/**/*.spec.ts'],
});
