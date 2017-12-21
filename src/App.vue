<template>
  <div id="app">
    <my-header></my-header>
    <my-tab></my-tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader/MyHeader'
import MyTab from '@/components/MyTab/MyTab'

export default {
  name: 'app',
  components: {
    MyHeader,
    MyTab
  }
}
</script>

<style lang='scss' scoped>

</style>
