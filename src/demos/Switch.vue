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
    <group title="html title">
      <switch title="<span style='color:red'>I'm Red.</span>">I'm red</span>" disabled></switch>
    </group>
  </div>
</template>

<script>
import { Switch, Group } from 'vux'

export default {
  components: {
    Switch,
    Group
  }
}
</script>
