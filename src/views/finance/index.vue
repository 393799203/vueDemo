<template>
  <div style="">
    <blur :blur-amount=40 :url="url" :height="180">
      <p class="center"><img :src="url"></p>
      <div class="text-center">青萌</div>
    </blur>
    <group title="资财通" title-color="#04be02">
      <cell title="报销" is-link v-link="'finance/reimburse'" :value="'您有'+ personalStatus.bxCnt + '条报销待审核'">
        <span class="demo-icon" slot="icon">&#xe656;</span>
      </cell>
      <cell title="借还款" is-link v-link="'finance'" value="Protected">
        <span class="mogu-icon" slot="icon">&#xe65d;</span>
      </cell>
      <cell title="付款" is-link v-link="'finance'" value="Protected">
        <span class="mogu-icon" slot="icon">&#xe659;</span>
      </cell>
      <cell title="采购" is-link v-link="'finance'" value="Protected">
        <span class="mogu-icon" slot="icon">&#xe65a;</span>
      </cell>
      <cell title="合同" is-link v-link="'finance'" value="Protected">
        <span class="mogu-icon" slot="icon">&#xe65b;</span>
      </cell>
      <cell title="资产" is-link v-link="'finance'" value="Protected">
        <span class="mogu-icon" slot="icon">&#xe657;</span>
      </cell>
      <cell title="预算" is-link v-link="'finance'" value="Protected">
        <span class="mogu-icon" slot="icon">&#xe65c;</span>
      </cell>
      <cell title="制度" is-link v-link="'finance'" value="Protected">
        <span class="mogu-icon" slot="icon">&#xe658;</span>
      </cell>
    </group>
  </div>
</template>

<script>
import { Cell, Group, Blur } from 'vux'

export default {
  components: {
    Blur,
    Group,
    Cell
  },
  data () {
    return {
      url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
      personalStatus: {
        bxCnt: '4'
      }
    }
  },
  created () {
  },
  beforeCompile () {
  },
  compiled () {
  },
  ready () {
  },
  methods: {
  }
}

</script>

<style scoped>
.pt20{
  padding-top: 20px;
}
.center {
  text-align: center;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
.text-center{
  text-align: center;
  color: #fff;
  margin-top: 10px;
}
</style>