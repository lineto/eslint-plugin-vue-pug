// SKIP AUTOGENERATION
// AUTOGENERATED FROM https://github.com/vuejs/eslint-plugin-vue/blob/8f094200664a2b10bc597016f5486066a174e098/tests/lib/rules/no-deprecated-inline-template.js
/**
 * @author Yosuke Ota
 * See LICENSE file in root directory for full license.
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../eslint-plugin-vue/lib/rules/no-deprecated-inline-template')
const RuleTester = require('eslint').RuleTester

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {  ecmaVersion: 2019 , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}}
})

ruleTester.run('no-deprecated-inline-template', rule, {
  valid: [
    {
      filename: 'test.vue',
      code: `<template lang="pug">
my-component
  div
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">div</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
my-component(:inline-template="foo")
  div
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
my-component(Inline-Template="foo")
  div
</template>`
    }
  ],

  invalid: [
    {
      filename: 'test.vue',
      code: `<template lang="pug">
my-component(inline-template)
  div
</template>`,
      errors: [
        {
          line: 2,
          column: 14,
          messageId: 'unexpected',
          endLine: 2,
          endColumn: 29
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
my-component(inline-template="foo")
  div
</template>`,
      errors: [{ messageId: 'unexpected' }]
    }
  ]
})
