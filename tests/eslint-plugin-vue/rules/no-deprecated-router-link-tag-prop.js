// SKIP AUTOGENERATION
// AUTOGENERATED FROM https://github.com/vuejs/eslint-plugin-vue/blob/8f094200664a2b10bc597016f5486066a174e098/tests/lib/rules/no-deprecated-router-link-tag-prop.js
/**
 * @author Marton Csordas
 * See LICENSE file in root directory for full license.
 */
'use strict'

const RuleTester = require('eslint').RuleTester
const rule = require('../../../eslint-plugin-vue/lib/rules/no-deprecated-router-link-tag-prop')

const tester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: { 
    ecmaVersion: 2020,
    sourceType: 'module'
  , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}}
})

tester.run('no-deprecated-router-link-tag-prop', rule, {
  valid: [
    {
      filename: 'test.vue',
      code: `<template lang="pug">RouterLink(to="/") Home</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">router-link(to="/") Home</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
RouterLink(to="/")
  div Home
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
router-link(to="/")
  div Home
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">NuxtLink(to="/") Home</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">nuxt-link(to="/") Home</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
NuxtLink(to="/")
  div Home
</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">
nuxt-link(to="/")
  div Home
</template>`
    }
  ],
  invalid: [
    {
      filename: 'test.vue',
      code: `<template lang="pug">RouterLink(tag="div", to="/") Home</template>`,
      errors: [
        {
          message:
            "'tag' property on 'RouterLink' component is deprecated. Use scoped slots instead.",
          line: 1,
          column: 33
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">router-link(tag="div", to="/") Home</template>`,
      errors: [
        {
          message:
            "'tag' property on 'router-link' component is deprecated. Use scoped slots instead.",
          line: 1,
          column: 34
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">RouterLink(tag="div", to="/") Home</template>`,
      options: [{ components: ['RouterLink'] }],
      errors: [
        {
          message:
            "'tag' property on 'RouterLink' component is deprecated. Use scoped slots instead.",
          line: 1,
          column: 33
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">RouterLink(tag="div", to="/") Home</template>`,
      options: [{ components: ['router-link'] }],
      errors: [
        {
          message:
            "'tag' property on 'RouterLink' component is deprecated. Use scoped slots instead.",
          line: 1,
          column: 33
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">router-link(tag="div", to="/") Home</template>`,
      options: [{ components: ['RouterLink'] }],
      errors: [
        {
          message:
            "'tag' property on 'router-link' component is deprecated. Use scoped slots instead.",
          line: 1,
          column: 34
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">RouterLink(:tag="someVariable", to="/") Home</template>`,
      errors: [
        {
          message:
            "'tag' property on 'RouterLink' component is deprecated. Use scoped slots instead.",
          line: 1,
          column: 34
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">router-link(:tag="someVariable", to="/") Home</template>`,
      errors: [
        {
          message:
            "'tag' property on 'router-link' component is deprecated. Use scoped slots instead.",
          line: 1,
          column: 35
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">RouterLink(:tag="someVariable", to="/") Home</template>`,
      options: [{ components: ['RouterLink'] }],
      errors: [
        {
          message:
            "'tag' property on 'RouterLink' component is deprecated. Use scoped slots instead.",
          line: 1,
          column: 34
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">router-link(:tag="someVariable", to="/") Home</template>`,
      options: [{ components: ['RouterLink'] }],
      errors: [
        {
          message:
            "'tag' property on 'router-link' component is deprecated. Use scoped slots instead.",
          line: 1,
          column: 35
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">NuxtLink(tag="div", to="/") Home</template>`,
      options: [{ components: ['NuxtLink'] }],
      errors: [
        {
          message:
            "'tag' property on 'NuxtLink' component is deprecated. Use scoped slots instead.",
          line: 1,
          column: 31
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">nuxt-link(tag="div", to="/") Home</template>`,
      options: [{ components: ['NuxtLink'] }],
      errors: [
        {
          message:
            "'tag' property on 'nuxt-link' component is deprecated. Use scoped slots instead.",
          line: 1,
          column: 32
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">NuxtLink(:tag="someVariable", to="/") Home</template>`,
      options: [{ components: ['NuxtLink'] }],
      errors: [
        {
          message:
            "'tag' property on 'NuxtLink' component is deprecated. Use scoped slots instead.",
          line: 1,
          column: 32
        }
      ]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">nuxt-link(:tag="someVariable", to="/") Home</template>`,
      options: [{ components: ['NuxtLink'] }],
      errors: [
        {
          message:
            "'tag' property on 'nuxt-link' component is deprecated. Use scoped slots instead.",
          line: 1,
          column: 33
        }
      ]
    }
  ]
})
