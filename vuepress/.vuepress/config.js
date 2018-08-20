module.exports = {
  title: 'Vue experience',
  description: 'Experience from vue world',
  base: '/EXPA--Vue/',
  dest: '../docs',
  port: '3000',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      '/introduction.md',
      '/tag-binding.md',
      '/vue-webpack.md',
      '/vue-router.md',
      '/vuex.md',
      '/vue-resource.md',
      '/custom-directives.md',
      '/vue-blade.md',
      '/tricks-tips.md',

      {
        title: 'Best practices',
        collapsable: true,
        children: [
          '/best-practices/script.md',
          '/best-practices/template.md',
          '/best-practices/async-error-handling.md',
        ]
      },

      {
        title: 'My mixins',
        collapsable: true,
        children: [
          '/my-mixins/api.md',
        ]
      },

      {
        title: 'Examples 1',
        collapsable: true,
        children: [
          '/examples1/ex1-slots.md',
          '/examples1/ex2-global-and-local-components.md',
          '/examples1/ex3-prevent-some-action.md',
          '/examples1/ex4-v-model-modifiers.md',
          '/examples1/ex5-making-tabs.md',
          '/examples1/ex6-dynamic-form-builder.md'
        ]
      },
      {
        title: 'Examples 2',
        collapsable: true,
        children: [
          '/examples2/ex1.md',
          '/examples2/ex2.md',
          '/examples2/ex3.md',
        ]
      },
    ]
  }
}