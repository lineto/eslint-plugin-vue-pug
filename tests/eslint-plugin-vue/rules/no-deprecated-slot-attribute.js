// AUTOGENERATED FROM https://github.com/vuejs/eslint-plugin-vue/blob/1ce68fa9def2c7d6da7aa5020c731860d7027459/tests/lib/rules/no-deprecated-slot-attribute.js
'use strict'

const RuleTester = require('eslint').RuleTester
const rule = require('../../../eslint-plugin-vue/lib/rules/no-deprecated-slot-attribute.js')

const tester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2015,
    templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug' }
  }
})

tester.run('no-deprecated-slot-attribute', rule, {
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
  template
    a
</template>`,
    `<template lang="pug">
LinkList
  a
</template>`
  ],
  invalid: [
    {
      code: `
      <template lang="pug">
LinkList
  template(slot)
    a
</template>`,
      output: `
      <template lang="pug">
LinkList
  template(v-slot)
    a
</template>`,
      errors: [
        {
          message: '`slot` attributes are deprecated.',
          line: 4
        }
      ]
    },
    {
      code: `
      <template lang="pug">
LinkList
  template(slot="name")
    a
</template>`,
      output: `
      <template lang="pug">
LinkList
  template(v-slot:name)
    a
</template>`,
      errors: [
        {
          message: '`slot` attributes are deprecated.',
          line: 4
        }
      ]
    },
    {
      code: `
      <template lang="pug">
LinkList
  template(slot="name", unknown, slot-scope="{a}")
    a
</template>`,
      output: `
      <template lang="pug">
LinkList
  template(v-slot:name="{a}", unknown, )
    a
</template>`,
      errors: [
        {
          message: '`slot` attributes are deprecated.',
          line: 4
        }
      ]
    },
    {
      code: `
      <template lang="pug">
LinkList
  template(slot="name", scope="{a}")
    a
</template>`,
      output: `
      <template lang="pug">
LinkList
  template(v-slot:name="{a}", )
    a
</template>`,
      errors: [
        {
          message: '`slot` attributes are deprecated.',
          line: 4
        }
      ]
    },
    {
      code: `
      <template lang="pug">
LinkList
  template(slot="nameFoo")
    a
</template>`,
      output: `
      <template lang="pug">
LinkList
  template(v-slot:nameFoo)
    a
</template>`,
      errors: [
        {
          message: '`slot` attributes are deprecated.',
          line: 4
        }
      ]
    },
    {
      code: `
      <template lang="pug">
LinkList
  template(slot="f o o"): a
  template(slot="obj.prop"): a
  template(slot="a/b"): a
  template(slot="a=b"): a
  template(slot="a>b"): a
</template>`,
      output: null,
      errors: [
        {
          message: '`slot` attributes are deprecated.',
          line: 4
        },
        {
          message: '`slot` attributes are deprecated.',
          line: 5
        },
        {
          message: '`slot` attributes are deprecated.',
          line: 6
        },
        {
          message: '`slot` attributes are deprecated.',
          line: 7
        },
        {
          message: '`slot` attributes are deprecated.',
          line: 8
        }
      ]
    },
    {
      code: `
      <template lang="pug">
LinkList
  template(v-bind:slot="name")
    a
</template>`,
      output: `
      <template lang="pug">
LinkList
  template(v-slot:[name])
    a
</template>`,
      errors: [
        {
          message: '`slot` attributes are deprecated.',
          line: 4
        }
      ]
    },
    {
      code: `
      <template lang="pug">
LinkList
  template(:slot="slot.name")
    a
</template>`,
      output: null,
      errors: [
        {
          message: '`slot` attributes are deprecated.',
          line: 4
        }
      ]
    },
    {
      code: `
      <template lang="pug">
LinkList
  template(:slot="  slotName  ")
    a
</template>`,
      output: `
      <template lang="pug">
LinkList
  template(v-slot:[slotName])
    a
</template>`,
      errors: [
        {
          message: '`slot` attributes are deprecated.',
          line: 4
        }
      ]
    },
    {
      code: `
      <template lang="pug">
LinkList
  template(:slot="slot. name")
    a
</template>`,
      output: null,
      errors: [
        {
          message: '`slot` attributes are deprecated.',
          line: 4
        }
      ]
    },
    {
      code: `
      <template lang="pug">
LinkList
  template(:slot="a>b?c:d")
    a
</template>`,
      output: null,
      errors: [
        {
          message: '`slot` attributes are deprecated.',
          line: 4
        }
      ]
    },
    {
      code: `
      <template lang="pug">
LinkList
  template(:slot="  ")
    a
</template>`,
      output: null,
      errors: [
        {
          message: '`slot` attributes are deprecated.',
          line: 4
        }
      ]
    },
    {
      code: `
      <template lang="pug">
LinkList
  template(:slot="  .error  ")
    a
</template>`,
      output: null,
      errors: [
        {
          message: '`slot` attributes are deprecated.',
          line: 4
        }
      ]
    },
    {
      code: `
      <template lang="pug">
LinkList
  template(:slot)
    a
</template>`,
      output: `
      <template lang="pug">
LinkList
  template(v-slot)
    a
</template>`,
      errors: [
        {
          message: '`slot` attributes are deprecated.',
          line: 4
        }
      ]
    },
    {
      code: `
      <template lang="pug">
LinkList
  a(slot="name")
</template>`,
      output: null,
      errors: [
        {
          message: '`slot` attributes are deprecated.',
          line: 4
        }
      ]
    },
    {
      code: `
      <template lang="pug">
LinkList
  a(:slot="name")
</template>`,
      output: null,
      errors: [
        {
          message: '`slot` attributes are deprecated.',
          line: 4
        }
      ]
    },
    {
      code: `
      <template lang="pug">
MyComponent
  template(slot="foo-bar")
    a
</template>`,
      output: `
      <template lang="pug">
MyComponent
  template(v-slot:foo-bar)
    a
</template>`,
      errors: ['`slot` attributes are deprecated.']
    },
    {
      code: `
      <template lang="pug">
MyComponent
  template(slot="foo_bar")
    a
</template>`,
      output: `
      <template lang="pug">
MyComponent
  template(v-slot:foo_bar)
    a
</template>`,
      errors: ['`slot` attributes are deprecated.']
    },
    {
      code: `
      <template lang="pug">
MyComponent
  template(slot="123")
    a
</template>`,
      output: `
      <template lang="pug">
MyComponent
  template(v-slot:123)
    a
</template>`,
      errors: ['`slot` attributes are deprecated.']
    },
    {
      // https://github.com/vuejs/eslint-plugin-vue/issues/1499
      code: `
      <template lang="pug">
some-component
  template(slot="some-slot") This works 1
  template(v-if="true")
    // some arbitrary conditional
    template(slot="some-slot") This works 2
</template>`,
      output: `
      <template lang="pug">
some-component
  template(v-slot:some-slot) This works 1
  template(v-if="true")
    // some arbitrary conditional
    template(slot="some-slot") This works 2
</template>`,
      errors: [
        {
          message: '`slot` attributes are deprecated.',
          line: 4
        },
        {
          message: '`slot` attributes are deprecated.',
          line: 7
        }
      ]
    },
    {
      code: `
      <template lang="pug">
my-component
  template(v-for="x in xs", slot="one") A
  template(v-for="x in xs", :slot="x") B
</template>`,
      output: `
      <template lang="pug">
my-component
  template(v-for="x in xs", slot="one") A
  template(v-for="x in xs", v-slot:[x]) B
</template>`,
      errors: [
        '`slot` attributes are deprecated.',
        '`slot` attributes are deprecated.'
      ]
    },
    {
      code: `
      <template lang="pug">
my-component
  template(slot="one") A
  template(slot="one") B
</template>`,
      output: `
      <template lang="pug">
my-component
  template(slot="one") A
  template(slot="one") B
</template>`,
      errors: [
        '`slot` attributes are deprecated.',
        '`slot` attributes are deprecated.'
      ]
    },
    {
      code: `
      <template lang="pug">
my-component
  template(v-if="c", slot="one") A
  template(v-else, slot="one") B
</template>`,
      output: `
      <template lang="pug">
my-component
  template(v-if="c", v-slot:one) A
  template(v-else, v-slot:one) B
</template>`,
      errors: [
        '`slot` attributes are deprecated.',
        '`slot` attributes are deprecated.'
      ]
    },
    {
      code: `
      <template lang="pug">
my-component
  template(v-for="x in xs", :slot="x") A
  template(v-for="x in xs", :slot="x") B
</template>`,
      output: null,
      errors: [
        '`slot` attributes are deprecated.',
        '`slot` attributes are deprecated.'
      ]
    },
    {
      code: `
      <template lang="pug">
my-component
  template(v-for="x in ys", :slot="x") A
  template(v-for="x in xs", :slot="x") B
</template>`,
      output: `
      <template lang="pug">
my-component
  template(v-for="x in ys", v-slot:[x]) A
  template(v-for="x in xs", v-slot:[x]) B
</template>`,
      errors: [
        '`slot` attributes are deprecated.',
        '`slot` attributes are deprecated.'
      ]
    },
    {
      code: `
      <template lang="pug">
my-component
  template(v-for="(x,y) in xs", :slot="x+y") A
  template(v-for="x in xs", :slot="x") B
</template>`,
      output: `
      <template lang="pug">
my-component
  template(v-for="(x,y) in xs", :slot="x+y") A
  template(v-for="x in xs", v-slot:[x]) B
</template>`,
      errors: [
        '`slot` attributes are deprecated.',
        '`slot` attributes are deprecated.'
      ]
    }
  ]
})
