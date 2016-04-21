<template>
  <div>
    <group title="Form" title-color="#04be02">
      <cell title="Radio" v-link="'/demo'">
        <span class="demo-icon" slot="icon">&#xe60f;</span>
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
.weui_cell_box.weui_cell {
  padding: 0
}
.weui_cell_ft.with_arrow:after {
  content: " ";
  display: inline-block;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  height: 6px;
  width: 6px;
  border-width: 2px 2px 0 0;
  border-color: #C8C8CD;
  border-style: solid;
  position: relative;
  top: -2px;
  top: -1px;
  margin-left: .3em;
}
.weui_cells > a {
    color: #000;
}
.firefox .weui_cells:after {
  transform-origin: 50% 50%;
}
</style>
