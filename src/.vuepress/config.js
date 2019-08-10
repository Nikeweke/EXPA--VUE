


module.exports = {
  title: 'Vue experience',
  description: 'Experience from vue world',
  base: '/EXPA--VUE/',
  dest: '../docs',
  port: '3000',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      '/intro.md',  
   
      {
        title: 'Basics',
        collapsable: false,
        children: require('../basics/__index') 
      },

      {
        title: 'Packages',
        collapsable: true,
        children: require('../packages/__index') 
      },

      {
        title: 'Advanced',
        collapsable: true,
        children: require('../advanced/__index') 
      },
    ]
  }
}