const dirName = './packages/'

module.exports = [
  'vue-blade',
  'vue-resource',
  'vue-router',
  'vuex'
].map((item) => dirName + item + '.md')