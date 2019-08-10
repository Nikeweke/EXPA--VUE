# Tabs with render function

```html
<template>
  <div id="app">
    <Tabs>
      <Tab title="tab 1">
        tab content 1 
      </Tab>
      <Tab title="tab 2">
        tab content 2
      </Tab>
      <Tab title="tab 3">
        tab content 3
      </Tab>
    </Tabs>
  </div>
</template>

<script>
export default {
  name: 'app',

  components: {
    Tabs: {
      data: () => ({
        selectedIndex: 0,
      }),

      methods: {
        switchTab(e, index) {
          console.log('Hi there')
          this.selectedIndex = index
        }
      },

      render(h) {
        let titles = []
        let tabs   = []

        // фильтруем проброшенные елементы - vue-компоненты ли они,
        // если да они выведуться
        for (let index in this.$slots.default) {
          let item = this.$slots.default[index]

          if (item.componentOptions) {
            titles.push(
              h(
                'div',
                {
                  on: {click: (e) => this.switchTab(e, index)},
                  class: index === this.selectedIndex ? 'active' : ''
                }, 
                item.componentOptions.propsData.title
              )
            )

            tabs.push(item)
          }
        }

        const tabsTitles = h(
          'div',
          {class: 'tabs__titles'},
          titles
        )

        const tabContent = h(
          'div',
          {class: 'tabs__content'},
          [tabs[this.selectedIndex]] // without wrapping in array it won't work
        )

        // наполняем главный div 
        return h('div', {class: 'tabs'}, [tabsTitles, tabContent, this.selectedIndex])
      }
    },

    Tab: {
      // title - нужен чтобы вынять его в Tabs компоненты через свойства
      props: ['title'],

      render(h) {
        return h('div', this.$slots.default)
      }
    }
  }
}
</script>

<style>
.tabs__titles {
  display: flex;
  font-weight: 600;
}

.tabs__titles div {
  padding: 15px;
  cursor: pointer;
  transition: .3s all;
  border-bottom: 1px solid transparent;
}

.tabs__titles div.active,
.tabs__titles div:hover {
  border-bottom: 1px solid royalblue;
}
</style>

```