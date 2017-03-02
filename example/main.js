import Vue from 'vue'
import VueCheckList from '../dist/vue-checklist.min.js'
import './style.css'

new Vue({
  el: '#app',
  components: {
    VueCheckList
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
        },
        {
          value: '4',
          text: 'text4'
        },
        {
          value: '5',
          text: 'text5'
        }
      ],
      selected1: '',
      selected2: '',
      selected3: '',
      selected4: '',
      selected5: '',
      selected6: ''
    }
  },
  template: `
    <div id="example">
      <fieldset>
        <legend>普通</legend>
        <VueCheckList :list="list" @change="onChange1"></VueCheckList>
        <div>
          所选：{{selected1}}
        </div>
      </fieldset>
      <fieldset>
        <legend>默认值</legend>
        <VueCheckList :list="list" :selected="['2', '3', '5']" @change="onChange2"></VueCheckList>
        <div>
          所选：{{selected2}}
        </div>
      </fieldset>
      <fieldset>
        <legend>单选</legend>
        <VueCheckList :list="list" :multi="false" @change="onChange3"></VueCheckList>
        <div>
          所选：{{selected3}}
        </div>
      </fieldset>
      <fieldset>
        <legend>组件方法</legend>
        <p>注：全选／全不选／反选三个方法只支持多选框</p>
        <VueCheckList :list="list" :selected="['2']" ref="checkList4" @change="onChange4"></VueCheckList>
        <div>
          <button @click="selectAll">全选</button>
          <button @click="unselectAll">全不选</button>
          <button @click="selectReverse">反选</button>
          <button @click="getValues">获取所选</button>
        </div>
        <div>
          所选：{{selected4}}
        </div>
      </fieldset>
      <fieldset>
        <legend>自定义样式</legend>
        <VueCheckList class="custom" :list="list" @change="onChange5"></VueCheckList>
        <div>
          所选：{{selected5}}
        </div>
        <h4>自定义模版：</h4>
        <p>注：此功能需要Vue 2.1以上，<a href="https://cn.vuejs.org/v2/guide/components.html#作用域插槽" target="_blank">点击这里了解更多</a></p>
        <VueCheckList class="custom" :list="list" @change="onChange6">
          <template scope="props">
            <span class="text">{{props.item.text}}</span>
          </template>
        </VueCheckList>
        <div>
          所选：{{selected6}}
        </div>
      </fieldset>
    </div>
  `,
  methods: {
    onChange1: function (val) {
      this.selected1 = val
    },
    onChange2: function (val) {
      this.selected2 = val
    },
    onChange3: function (val) {
      this.selected3 = val
    },
    onChange4: function (val) {
      this.selected4 = val
    },
    selectAll: function () {
      this.$refs.checkList4.selectAll()
    },
    unselectAll: function () {
      this.$refs.checkList4.unselectAll()
    },
    selectReverse: function () {
      this.$refs.checkList4.selectReverse()
    },
    getValues: function () {
      alert(this.$refs.checkList4.getValues())
    },
    onChange5: function (val) {
      this.selected5 = val
    },
    onChange6: function (val) {
      this.selected6 = val
    }
  }
})
