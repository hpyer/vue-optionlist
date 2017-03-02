# vue-optionlist

> Optionlist component for Vue2

### 示例

https://hpyer.github.io/vue-optionlist/

### 安装

#### For Node

```js
npm install -S vue-optionlist
```

#### For 浏览器

```html
<script src="vue.js"></script>
<script src="vue-optionlist.js"></script>
```

### 使用

```js
// For Node
var VueOptionList = require('vue-optionlist');

// For Node (ES6)
import VueOptionList from 'vue-optionlist';

// 如果是浏览器中引入的js，已经定义了一个全局变量VueOptionList，可以直接使用

new Vue({
  el: '#app',
  components: {
    'vue-option-list': VueOptionList
  },
  data () {
    return {
      list: [
        {
          value: '1',
          text: 'text1'
        },
        {
          value: '2',
          text: 'text2'
        },
        {
          value: '3',
          text: 'text3'
        }
      ],
      selected: ''
    }
  },
  template: `
    <div id="example">
      <vue-option-list :list="list" :selected="['2', '3']" ref="optionList" @change="onChange"></vue-option-list>
      <div>
        <button @click="selectAll">全选</button>
        <button @click="unselectAll">全不选</button>
        <button @click="selectReverse">反选</button>
        <button @click="getValues">获取所选</button>
      </div>
      <div>
        所选：{{selected}}
      </div>
    </div>
  `,
  methods: {
    onChange: function (val) {
      this.selected = val
    },
    selectAll: function () {
      this.$refs.optionList.selectAll()
    },
    unselectAll: function () {
      this.$refs.optionList.unselectAll()
    },
    selectReverse: function () {
      this.$refs.optionList.selectReverse()
    },
    getValues: function () {
      alert(this.$refs.optionList.getValues())
    }
  }
})
```

### Props

* `list` Array 数据列表，每个元素均为对象，其属性有：value(选项的值，必须)、text（选项的描述文字，自定义选项模版时可选，否则必填）。如：`[{value: '1', text: 'text1'}, {value: '2', text: 'text2'}]`
* `multi` Boolean 是否多选，true表示多选（默认）， false表示单选
* `selected` Array/String 默认选中的选项值，`multi`为true时传数组，为false时直接传某个选项的值

### slot

您可以自定义选项的模版，此功能用到的作用域插槽，因此需要 Vue >= 2.1.0 [详见这里](https://cn.vuejs.org/v2/guide/components.html#作用域插槽)

```html
<vue-option-list :list="list" @change="onChange">
  <template scope="props">
    <span class="text">{{props.item.text}}</span>
  </template>
</vue-option-list>
```
