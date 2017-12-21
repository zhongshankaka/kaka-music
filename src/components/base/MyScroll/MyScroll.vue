<template>
  <div ref="wrapper" class="my-scroll">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  components: {

  },

  data () {
    return {}
  },

  props: {
    data: {
      type: Array,
      default: null
    },
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    // listenScroll: {
    //   type: Boolean,
    //   default: false
    // },
    // 延迟刷新
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  },

  created () {},

  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },

  methods: {
    _initScroll () {
      if (!this.$refs.wrapper) {
        return
      }

      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
    },
    enable () {
      this.scroll && this.scroll.enable()
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>