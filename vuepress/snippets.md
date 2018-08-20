## Snippets

#### Component Form Builder
Компоненту достаточно передать массив с обьектами и он выстроит форму автоматически

```html
 <div v-for="(item, i) of fields" :key="i"  class="form-group has-label">
                      <label>{{item.label}}</label>

<input v-if="isInput(item.type)" v-model="form[item.model]" :placeholder="item.placeholder" :type="item.type" class="form-control" />

<select v-if="isSelect(item.type)" v-model="form[item.model]" class="form-control" id="exampleFormControlSelect1">
  <option v-for="(opt, i) of item.options"
          :key="i"
          :value="opt.val" 
          >
                   
                 {{ opt.name }}  
  </option>
</select>

<textarea v-if="isTextarea(item.type)" v-model="form[item.model]" class="form-control" style="height:100px"></textarea>

</div>
```

```js
data: () => ({
  form: {},
  fields: [
        {
          label: 'Номер',
          model: 'number',
          type: 'text',
          placeholder: ''
        },
    
        {
          label: 'Дата создания',
          model: 'created_at',
          type: 'date',
          placeholder: ''
        },

        {
          label: 'Тип',
          model: 'type',
          type: 'select',
          placeholder: '',
          options: [
            {name: 'first', val: '1'},
            {name: 'second', val: '2'}
          ]
        },
    
        {
          label: 'Описание',
          model: 'description',
          type: 'textarea',
          placeholder: ''
        },

        {
          label: 'Пол',
          model: 'gender',
          type: 'radio',
          options: [

          ]
        },

        {
          label: 'Выберите настроение',
          model: 'gender',
          type: 'checkbox',
          options: [
                
          ]
        },
      ]  
 })     
```