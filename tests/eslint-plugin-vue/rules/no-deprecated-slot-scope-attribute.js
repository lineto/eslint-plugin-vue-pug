// SKIP AUTOGENERATION
// AUTOGENERATED FROM https://github.com/vuejs/eslint-plugin-vue/blob/8f094200664a2b10bc597016f5486066a174e098/tests/lib/rules/no-deprecated-slot-scope-attribute.js
'use strict'

const RuleTester = require('eslint').RuleTester
const rule = require('../../../eslint-plugin-vue/lib/rules/no-deprecated-slot-scope-attribute')

const tester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: { 
    ecmaVersion: 2015
  , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}}
})

tester.run('no-deprecated-slot-scope-attribute', rule, {
  valid: [
    `<template lang="pug">
LinkList
  template(v-slot:name)
    a
</template>`,
    `<template lang="pug">
LinkList
  template(#name)
    a
</template>`,
    `<template lang="pug">
LinkList
  template(v-slot="{a}")
    a
</template>`,
    `<template lang="pug">
LinkList(v-slot="{a}")
  a
</template>`,
    `<template lang="pug">
LinkList
  template(#default="{a}")
    a
</template>`,
    `<template lang="pug">
LinkList
  a(slot="name")
</template>`,
    `<template lang="pug">
LinkList
  template
    a
</template>`
  ],
  invalid: [
    {
      code: `<template lang="pug">
LinkList
  template(slot-scope="{a}")
    a
</template>`,
      output: `<template lang="pug">
LinkList
  template(v-slot="{a}")
    a
</template>`,
      errors: [
        {
          message: '`slot-scope` are deprecated.',
          line: 3
        }
      ]
    },
    {
      code: `<template lang="pug">
LinkList
  template(slot-scope)
    a
</template>`,
      output: `<template lang="pug">
LinkList
  template(v-slot)
    a
</template>`,
      errors: [
        {
          message: '`slot-scope` are deprecated.',
          line: 3
        }
      ]
    },
    // cannot fix
    {
      code: `<template lang="pug">
LinkList
  a(slot-scope="{a}")
</template>`,
      output: null,
      errors: [
        {
          message: '`slot-scope` are deprecated.',
          line: 3
        }
      ]
    },
    {
      code: `<template lang="pug">
LinkList
  template(slot-scope="{a}", slot="foo")
    a
</template>`,
      output: null,
      errors: [
        {
          message: '`slot-scope` are deprecated.',
          line: 3
        }
      ]
    },
    {
      code: `<template lang="pug">
LinkList
  template(slot-scope="{a}", :slot="arg")
    a
</template>`,
      output: null,
      errors: [
        {
          message: '`slot-scope` are deprecated.',
          line: 3
        }
      ]
    },
    {
      code: `<template lang="pug">
my-component
  template(v-for="x in xs", slot-scope="{a}") {{a}}
</template>`,
      output: null,
      errors: ['`slot-scope` are deprecated.']
    },
//     {
//       code: `<template lang="pug">
// my-component
//   template(slot-scope="{a}") {{a}}
//   div
// </template>`,
//       output: null,
//       errors: ['`slot-scope` are deprecated.']
//     }
  ]
})
