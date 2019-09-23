module.exports = {
  extends: [
    'stylelint-config-htmlacademy',
    'stylelint-config-styled-components',
  ],
  processors: [
    [
      'stylelint-processor-styled-components',
      {
        moduleName: 'lit-element',
        importName: 'css',
        strict: true,
        ignoreFiles: [
          '**/*.css',
        ],
      },
    ],
  ],
};
