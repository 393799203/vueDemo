<template>
  <div>
    <checklist title="default checklist" :options="commonList" :value.sync="checklist001" @on-change="change"></checklist>

    <checklist title="preselect China and Japan" :options="commonList" :value.sync="checklist002" @on-change="change"></checklist>

    <checklist title="set max=2" :options="commonList" :value.sync="checklist003" :max=2 @on-change="change"></checklist>

    <checklist title="set required=false and no min-error will show" :options="commonList" :value.sync="checklist004" :max=2 :required=false @on-change="change"></checklist>

    <checklist title="set random order" random-order :options="checklist005" :value.sync="checklist005Value" @on-change="change"></checklist>

    <checklist title="Option Array with key and value(key must be string)" :options="objectList" :value.sync="objectListValue" @on-change="change"></checklist>
  </div>
</template>

<script>
import { Group, Checklist } from 'vux'

export default {
  components: {
    Group,
    Checklist
  },
  methods: {
    change: function (val) {
      console.log('change', val)
    }
  },
  data: function () {
    return {
      commonList: [ 'China', 'Japan', 'America' ],
      checklist001: [],
      checklist002: [ 'China', 'Japan' ],
      checklist003: [ 'China', 'Japan' ],
      checklist004: [],
      checklist005: [ '01', '02', '03' ],
      checklist005Value: [],
      objectList: [{key: '1', value: '001 value'}, {key: '2', value: '002 value'}, {key: '3', value: '003 value'}],
      objectListValue: ['1', '2']
    }
  }
}
</script>
