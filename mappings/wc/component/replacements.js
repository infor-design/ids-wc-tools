const { toPascalCase } = require('../../lib/strings');

module.exports = ({ namespace }) => [
  {
    input: /ids-component/g,
    replacer: () => namespace
  },
  {
    input: /IdsComponent/g,
    replacer: () => toPascalCase(namespace)
  },
  {
    input: /IDSComponent/g,
    replacer: () => toPascalCase(namespace).replace('Ids', 'IDS')
  },
  {
    input: /IDS Component/g,
    replacer: () => toPascalCase(namespace).replace('Ids', 'IDS ')
  },
  {
    input: /Ids Component/g,
    replacer: () => toPascalCase(namespace).replace('Ids', 'Ids ')
  }
];
