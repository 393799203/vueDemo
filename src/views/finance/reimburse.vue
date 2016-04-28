<template>
	<div>
		<tab>
			<tab-item :selected="current === '待我处理'" @click="switchItem(current = '待我处理')">待我处理</tab-item>
			<tab-item :selected="current === '我已处理'" @click="switchItem(current = '我已处理')">我已处理</tab-item>
		</tab>
	</div>
</template>

<script>
import { Tab, TabItem } from 'vux'

export default {
  components: {
    Tab,
    TabItem
  },
  data () {
    return {
      current: '待我处理'
    }
  },
  methods: {
    switchItem: (current) => {
      console.log(current)
    }
  }
}
</script>

<style scoped>
</style>