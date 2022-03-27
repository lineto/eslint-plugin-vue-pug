// AUTOGENERATED FROM https://github.com/vuejs/eslint-plugin-vue/blob/8f094200664a2b10bc597016f5486066a174e098/tests/lib/rules/no-multiple-objects-in-class.js
/**
 * @author tyankatsu <https://github.com/tyankatsu0105>
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const rule = require('../../../eslint-plugin-vue/lib/rules/no-multiple-objects-in-class')
const RuleTester = require('eslint').RuleTester

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {  ecmaVersion: 2015, sourceType: 'module' , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}}
})

ruleTester.run('no-multiple-objects-in-class', rule, {
  valid: [
    `<template lang="pug">div(:class="[{'foo': isFoo}]")</template>`,
    `<template lang="pug">div(:class="[{'foo': isFoo, 'bar': isBar}]")</template>`,
    `<template lang="pug">div(v-foo:class="[{'foo': isFoo}, {'bar': isBar}]")</template>`
  ],
  invalid: [
    {
      code: `<template lang="pug">div(v-bind:class="[{'foo': isFoo}, {'bar': isBar}]")</template>`,
      errors: [
        {
          message: 'Unexpected multiple objects. Merge objects.',
          type: 'VAttribute'
        }
      ]
    },
    {
      code: `<template lang="pug">div(:class="[{'foo': isFoo}, {'bar': isBar}]")</template>`,
      errors: [
        {
          message: 'Unexpected multiple objects. Merge objects.',
          type: 'VAttribute'
        }
      ]
    },

    // sparse array
    {
      code: `<template lang="pug">div(v-bind:class="[,{'foo': isFoo}, {'bar': isBar}]")</template>`,
      errors: [
        {
          message: 'Unexpected multiple objects. Merge objects.',
          type: 'VAttribute'
        }
      ]
    }
  ]
})
