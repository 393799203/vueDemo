<template>
  <div>
    <group title="Form" title-color="#04be02">
      <cell title="DEMOS" is-link v-link="'demo'">
        <span class="demo-icon" slot="icon">&#xe61b;</span>
      </cell>
      <cell title="资财通" is-link v-link="'finance'">
        <span class="mogu-icon" slot="icon">&#xe655;</span>
      </cell>
    </group>
  </div>
</template>

<script>
import { Cell, Group } from 'vux'

if (/firefox/i.test(navigator.userAgent)) {
  document.querySelector('body').classList.add('firefox')
}

export default {
  components: {
    Cell,
    Group
  },
  data: function () {
    return {
    }
  }
}
</script>

<style>
.center {
  margin-top: 15px;
  text-align: center;
}

body {
  font-family: Helvetica, sans-serif;
  background-color: #fbf9fe;
  padding-bottom: 50px;
}

.firefox .weui_cells:after {
  transform-origin: 50% 50%;
}
</style>
