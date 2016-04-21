<template>
  <div>
  	<group title="default">
  	  <switch title="default setting"></switch>
  	  <switch title="default true" :value.sync=true></switch>
  	</group>
    <group title="disabled">
      <switch title="default setting" disabled></switch>
      <switch title="default true" :value.sync=true disabled></switch>
    </group>
  </div>
</template>

<script>
import { Switch, Group } from '@mogu/vux'

export default {
  components: {
    Switch,
    Group
  }
}
</script>