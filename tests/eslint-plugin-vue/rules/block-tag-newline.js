// SKIP AUTOGENERATION
// TODO this might actually need fixing
// AUTOGENERATED FROM https://github.com/vuejs/eslint-plugin-vue/blob/8f094200664a2b10bc597016f5486066a174e098/tests/lib/rules/block-tag-newline.js @2022-03-19T13:08:36.585Z
/**
 * @author Yosuke Ota
 */
'use strict'

const RuleTester = require('eslint').RuleTester
const rule = require('../../../eslint-plugin-vue/lib/rules/block-tag-newline')

const tester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {  ecmaVersion: 2015 , templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug'}}
})

tester.run('block-tag-newline', rule, {
  valid: [
    `<template lang="pug">input</template>\n<script>let a</script>`,
    `<template lang="pug">\ninput\n</template>\n<script>\nlet a\n</script>`,
    `<template lang="pug">\ndiv \n\n</template>\n<script>\nlet a\nlet b\n</script>`,
    `<template></template>\n<script></script>`,
    `<template lang="pug">\n\n</template>\n<script>\n\n</script>`,
    '<template />\n<script />',
    {
      code: `<template lang="pug">div</template>\n<script>let a</script>`,
      options: [{ singleline: 'never', multiline: 'never' }]
    },
    {
      code: `<template lang="pug">\ninput\n</template>\n<script>\nlet a\nlet b\n</script>`,
      options: [{ singleline: 'always', multiline: 'always' }]
    },
    {
      code: `<template lang="pug">\n\ninput\n\n</template>\n<script>\n\nlet a\nlet b\n\n</script>`,
      options: [{ singleline: 'always', multiline: 'always', maxEmptyLines: 1 }]
    },
    {
      code: `<template lang="pug">\ninput</template>\n<script>let a\nlet b\n</script>`,
      options: [{ singleline: 'ignore', multiline: 'ignore' }]
    },
    {
      code: `<template lang="pug">input</template>\n<script>\nlet a\n</script>`,
      options: [{ multiline: 'never' }]
    },
    {
      code: `<template lang="pug">div</template>\n<script>\nlet a\nlet b\n</script>`,
      options: [{ singleline: 'never' }]
    },
    // invalid
    // `<!-- CONVERT ERROR -->Unexpected EOF in tag.<template><div a="></div>\n</template>\n<script>\nlet a</script>`
  ],
  invalid: [
    {
      code: `<template lang="pug">input\n</template>\n<script>let a\n</script>`,
      output: `<template lang="pug">\ninput\n</template>\n<script>\nlet a\n</script>`,
      errors: [
        {
          message: "A line break is required after '<template>'.",
          line: 1,
          column: 22
        },
        {
          message: "A line break is required after '<script>'.",
          line: 3,
          column: 9
        }
      ]
    },
    {
      code: `<template lang="pug">\ninput</template>\n<script>\nlet a</script>`,
      output: `<template lang="pug">\ninput\n</template>\n<script>\nlet a\n</script>`,
      errors: [
        {
          message: "A line break is required before '</template>'.",
          line: 2,
          column: 6
        },
        {
          message: "A line break is required before '</script>'.",
          line: 4,
          column: 6
        }
      ]
    },
    {
      code: `<template lang="pug">div\n</template>\n<script>let a\nlet b</script>`,
      output:
        `<template lang="pug">\ndiv\n</template>\n<script>\nlet a\nlet b\n</script>`,
      errors: [
        {
          message: "A line break is required after '<template>'.",
          line: 1,
          column: 22
        },
        // {
        //   message: "A line break is required before '</template>'.",
        //   line: 2,
        //   column: 7
        // },
        {
          message: "A line break is required after '<script>'.",
          line: 3,
          column: 9
        },
        {
          message: "A line break is required before '</script>'.",
          line: 4,
          column: 6
        }
      ]
    },
    {
      code: `<template lang="pug">\ndiv \n\n</template>\n<script>\nlet a\n</script>`,
      output: `<template lang="pug">div</template>\n<script>let a</script>`,
      options: [{ singleline: 'never', multiline: 'never' }],
      errors: [
        {
          message: "There should be no line break after '<template>'.",
          line: 1,
          column: 22
        },
        {
          message: "There should be no line break after '<template>'.",
          line: 2,
          column: 4
        },
        {
          message: "There should be no line break after '<script>'.",
          line: 5,
          column: 9
        },
        {
          message: "There should be no line break after '<script>'.",
          line: 6,
          column: 6
        }
      ]
    },
    {
      code: `<template lang="pug">div \n</template>\n<script>let a</script>`,
      output:
        `<template lang="pug">\ndiv \n</template>\n<script>\nlet a\n</script>`,
      options: [{ singleline: 'always', multiline: 'always' }],
      errors: [
        {
          message: "A line break is required after '<template>'.",
          line: 1,
          column: 22
        },
        // {
        //   message: "A line break is required before '</template>'.",
        //   line: 2,
        //   column: 7
        // },
        {
          message: "A line break is required after '<script>'.",
          line: 3,
          column: 9
        },
        {
          message: "A line break is required before '</script>'.",
          line: 3,
          column: 14
        }
      ]
    },
    {
      code: `<template lang="pug">\n\ninput\n\n</template>\n<script>\n\nlet a\nlet b\n\n</script>`,
      output:
        `<template lang="pug">\ninput\n</template>\n<script>\nlet a\nlet b\n</script>`,
      options: [{ singleline: 'always', multiline: 'always' }],
      errors: [
        {
          message:
            "Expected 1 line break after '<template>', but 2 line breaks found.",
          line: 1,
          column: 22
        },
        {
          message:
            "Expected 1 line break  before '</template>', but 2 line breaks found.",
          line: 3,
          column: 6
        },
        {
          message:
            "Expected 1 line break after '<script>', but 2 line breaks found.",
          line: 6,
          column: 9
        },
        {
          message:
            "Expected 1 line break  before '</script>', but 2 line breaks found.",
          line: 9,
          column: 6
        }
      ]
    },
    {
      code: `<template lang="pug">\n\n\ninput\n\n</template>\n<script>\n\nlet a\nlet b\n\n\n</script>`,
      output:
        `<template lang="pug">\n\ninput\n\n</template>\n<script>\n\nlet a\nlet b\n\n</script>`,
      options: [
        { singleline: 'always', multiline: 'always', maxEmptyLines: 1 }
      ],
      errors: [
        {
          message:
            "Expected 2 line breaks after '<template>', but 3 line breaks found.",
          line: 1,
          column: 22
        },
        {
          message:
            "Expected 2 line breaks  before '</script>', but 3 line breaks found.",
          line: 10,
          column: 6
        }
      ]
    },
    {
      code: `<template lang="pug">input\n\n</template>\n<script>let a\nlet b\n\n\n</script><docs>\n#</docs>`,
      output:
        `<template lang="pug">input\n\n</template>\n<script>let a\nlet b</script><docs>\n#\n</docs>`,
      options: [
        {
          blocks: {
            template: {
              singleline: 'ignore'
            },
            script: {
              multiline: 'never'
            }
          }
        }
      ],
      errors: [
        "There should be no line break after '<script>'.",
        "A line break is required before '</docs>'."
      ]
    }
  ]
})
