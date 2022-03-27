// AUTOGENERATED FROM https://github.com/vuejs/eslint-plugin-vue/blob/8f094200664a2b10bc597016f5486066a174e098/tests/lib/rules/no-reserved-keys.js
/**
 * @fileoverview Prevent overwrite reserved keys
 * @author Armano
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const semver = require('semver')
const path = require('path')
const rule = require('../../../eslint-plugin-vue/lib/rules/no-reserved-keys')
const RuleTester = require('eslint').RuleTester

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module'
}

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester()
ruleTester.run('no-reserved-keys', rule, {
  valid: [
    {
      filename: 'test.vue',
      code: `
        export default {
          props: ['foo'],
          computed: {
            bar () {
            }
          },
          data () {
            return {
              dat: null
            }
          },
          methods: {
            _foo () {},
            test () {
            }
          }
        }
      `,
      parserOptions
    },
    {
      filename: 'test.vue',
      code: `
        export default {
          props: ['foo'],
          computed: {
            bar () {
            }
          },
          data: () => {
            return {
              dat: null
            }
          },
          methods: {
            _foo () {},
            test () {
            }
          }
        }
      `,
      parserOptions
    },
    {
      filename: 'test.vue',
      code: `
        export default {
          props: ['foo'],
          computed: {
            bar () {
            }
          },
          data: () => ({
            dat: null
          }),
          methods: {
            _foo () {},
            test () {
            }
          }
        }
      `,
      parserOptions
    },
    {
      filename: 'test.vue',
      code: `
        export default {
          props: ['foo'],
          computed: {
            bar () {
            }
          },
          data: () => ({
            dat: null
          }),
          methods: {
            _foo () {},
            test () {
            }
          },
          setup () {
            return {
              _bar: () => {}
            }
          }
        }
      `,
      parserOptions
    }
  ],

  invalid: [
    {
      filename: 'test.js',
      code: `
        new Vue({
          props: {
            $el: String
          }
        })
      `,
      parserOptions: {  ecmaVersion: 6 , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}},
      errors: [
        {
          message: "Key '$el' is reserved.",
          line: 4
        }
      ]
    },
    {
      filename: 'test.js',
      code: `
        new Vue({
          setup () {
            return {
              $el: ''
            }
          }
        })
      `,
      parserOptions: {  ecmaVersion: 6 , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}},
      errors: [
        {
          message: "Key '$el' is reserved.",
          line: 5
        }
      ]
    },
    {
      filename: 'test.js',
      code: `
        new Vue({
          asyncData () {
            return {
              $el: ''
            }
          }
        })
      `,
      parserOptions: {  ecmaVersion: 6 , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}},
      errors: [
        {
          message: "Key '$el' is reserved.",
          line: 5
        }
      ]
    },
    {
      filename: 'test.js',
      code: `
        new Vue({
          data: {
            _foo: String
          }
        })
      `,
      parserOptions: {  ecmaVersion: 6 , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}},
      errors: [
        {
          message: "Keys starting with '_' are reserved in '_foo' group.",
          line: 4
        }
      ]
    },
    {
      filename: 'test.js',
      code: `
        new Vue({
          data: () => {
            return {
              _foo: String
            }
          }
        })
      `,
      parserOptions: {  ecmaVersion: 6 , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}},
      errors: [
        {
          message: "Keys starting with '_' are reserved in '_foo' group.",
          line: 5
        }
      ]
    },
    {
      filename: 'test.js',
      code: `
        new Vue({
          data: () => ({
            _foo: String
          })
        })
      `,
      parserOptions: {  ecmaVersion: 6 , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}},
      errors: [
        {
          message: "Keys starting with '_' are reserved in '_foo' group.",
          line: 4
        }
      ]
    },
    {
      filename: 'test.js',
      code: `
        new Vue({
          asyncData: () => ({
            _foo: String
          })
        })
      `,
      parserOptions: {  ecmaVersion: 6 , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}},
      errors: [
        {
          message: "Keys starting with '_' are reserved in '_foo' group.",
          line: 4
        }
      ]
    },
    {
      filename: 'test.js',
      code: `
        new Vue({
          foo: {
            bar: String
          }
        })
      `,
      options: [{ reserved: ['bar'], groups: ['foo'] }],
      parserOptions: {  ecmaVersion: 6 , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}},
      errors: [
        {
          message: "Key 'bar' is reserved.",
          line: 4
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `
      <script setup>
        defineProps({
          $el: String
        })
      </script>
      `,
      parser: require.resolve('vue-eslint-parser'),
      parserOptions: {  ecmaVersion: 6 , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}},
      errors: [
        {
          message: "Key '$el' is reserved.",
          line: 4
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `
      <script setup lang="ts">
        defineProps<{$el: string}>()
      </script>
      `,
      parser: require.resolve('vue-eslint-parser'),
      parserOptions: { 
        ecmaVersion: 6,
        parser: require.resolve('@typescript-eslint/parser')
      , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}},
      errors: [
        {
          message: "Key '$el' is reserved.",
          line: 3
        }
      ]
    },
    ...(semver.lt(
      require('@typescript-eslint/parser/package.json').version,
      '4.0.0'
    )
      ? []
      : [
          {
            filename: 'test.vue',
            code: `
      <script setup lang="ts">
        interface Props {
          $el: string
        }
        defineProps<Props>()
      </script>
      `,
            parser: require.resolve('vue-eslint-parser'),
            parserOptions: { 
              ecmaVersion: 6,
              parser: require.resolve('@typescript-eslint/parser')
            , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}},
            errors: [
              {
                message: "Key '$el' is reserved.",
                line: 4
              }
            ]
          },
          {
            filename: 'test.vue',
            code: `
      <script setup lang="ts">
        type A = {
          $el: string
        }
        defineProps<A>()
      </script>
      `,
            parser: require.resolve('vue-eslint-parser'),
            parserOptions: { 
              ecmaVersion: 6,
              parser: require.resolve('@typescript-eslint/parser')
            , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}},
            errors: [
              {
                message: "Key '$el' is reserved.",
                line: 4
              }
            ]
          }
        ])
  ]
})
