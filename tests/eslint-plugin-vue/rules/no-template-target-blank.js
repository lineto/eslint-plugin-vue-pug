// AUTOGENERATED FROM https://github.com/vuejs/eslint-plugin-vue/blob/8f094200664a2b10bc597016f5486066a174e098/tests/lib/rules/no-template-target-blank.js
/**
 * @fileoverview disallow target="_blank" attribute without rel="noopener noreferrer"
 * @author Sosukesuzuki
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const path = require('path')
const rule = require('../../../eslint-plugin-vue/lib/rules/no-template-target-blank')

const RuleTester = require('eslint').RuleTester

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {  ecmaVersion: 2015 , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}}
})

ruleTester.run('no-template-target-blank', rule, {
  valid: [
    { code: `<template lang="pug">a link</template>` },
    { code: `<template lang="pug">a(attr) link</template>` },
    { code: `<template lang="pug">a(target) link</template>` },
    {
      code: `<template lang="pug">a(href="https://eslint.vuejs.org") link</template>`
    },
    { code: `<template lang="pug">a(:href="link") link</template>` },
    {
      code: `<template lang="pug">a(:href="link", target="_blank", rel="noopener noreferrer") link</template>`
    },
    {
      code: `<template lang="pug">a(href="https://eslint.vuejs.org", target="_blank", rel="noopener noreferrer") link</template>`
    },
    {
      code: `<template lang="pug">a(href="https://eslint.vuejs.org", target="_blank", rel="noopener") link</template>`,
      options: [{ allowReferrer: true }]
    },
    { code: `<template lang="pug">a(href="/foo", target="_blank") link</template>` },
    {
      code: `<template lang="pug">a(href="/foo", target="_blank", rel="noopener noreferrer") link</template>`
    },
    { code: `<template lang="pug">a(href="foo/bar", target="_blank") link</template>` },
    {
      code: `<template lang="pug">a(href="foo/bar", target="_blank", rel="noopener noreferrer") link</template>`
    },
    {
      code: `<template lang="pug">a(:href="link", target="_blank") link</template>`,
      options: [{ enforceDynamicLinks: 'never' }]
    }
  ],
  invalid: [
    {
      code: `<template lang="pug">a(href="https://eslint.vuejs.org", target="_blank") link</template>`,
      errors: [
        'Using target="_blank" without rel="noopener noreferrer" is a security risk.'
      ]
    },
    {
      code: `<template lang="pug">a(href="https://eslint.vuejs.org", target="_blank", rel="noopenernoreferrer") link</template>`,
      errors: [
        'Using target="_blank" without rel="noopener noreferrer" is a security risk.'
      ]
    },
    {
      code: `<template lang="pug">a(:href="link", target="_blank", rel="3") link</template>`,
      errors: [
        'Using target="_blank" without rel="noopener noreferrer" is a security risk.'
      ]
    },
    {
      code: `<template lang="pug">a(:href="link", target="_blank") link</template>`,
      errors: [
        'Using target="_blank" without rel="noopener noreferrer" is a security risk.'
      ]
    },
    {
      code: `<template lang="pug">a(href="https://eslint.vuejs.org", target="_blank", rel="noopener") link</template>`,
      errors: [
        'Using target="_blank" without rel="noopener noreferrer" is a security risk.'
      ]
    }
  ]
})
