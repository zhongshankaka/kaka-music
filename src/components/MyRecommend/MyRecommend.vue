<template>
  <div class="my-recommend" ref="recommendRef">
    <my-scroll ref="scroll" :data="lists" class="recommend-content">
      <div>
        <div v-if="recommends.length" class="slide-wrapper">
          <my-slider>
            <div v-for="recommend in recommends" :key="recommend.id">
              <a :href="recommend.linkUrl">
                <img @load="loadImg" :src="recommend.picUrl" class="needsclick">
              </a>
            </div>
          </my-slider>
        </div>

        <!-- 歌单列表 -->
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in lists" class="item">
              <div class="icon">
                <img v-lazy="item.imgurl" width="60" height="60">
              </div>
              <div class="text">
                <p v-html="item.creator.name" class="name"></p>
                <p v-html="item.dissname" class="desc"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div v-show="!lists.length" class="loading-container">
        <my-loading></my-loading>
      </div>

    </my-scroll>
    <router-view></router-view>
  </div>
</template>

<script >
import {getRecommend, getList} from '@/api/recommend.js'
import {ERR_OK} from '@/api/config'

import MySlider from '@/components/base/MySlider/MySlider'
import MyScroll from '@/components/base/MyScroll/MyScroll'
import MyLoading from '@/components/base/MyLoading/MyLoading'

export default {
  components: {
    MySlider,
    MyScroll,
    MyLoading
  },
  data () {
    return {
      recommends: [],
      lists: []
    }
  },

  created () {
    this._getRecommend()
    setTimeout(() => {
      this._getList()
    }, 1000)
  },

  methods: {
    // 轮播图
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
      // console.log(this.recommends)
    },
    // 歌单列表
    _getList () {
      getList().then((res) => {
        if (res.code === ERR_OK) {
          // console.log(res)
          this.lists = res.data.list
        }
      })
    },

    loadImg () {
      if (!this.flag) {
        this.$refs.scroll.refresh()
        this.flag = true
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~@/common/scss/const.scss';
@import '~@/common/scss/mixin.scss';

.my-recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  .recommend-content {
    height: 100%;
    overflow: hidden;
    .slide-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    }
    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }
      .item {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0 20px 20px 20px;
        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;
          .name {
            margin-bottom: 10px;
            color: $color-text;
          }
          .desc {
            color: $color-text-d;
          }
        }
      }
    }
    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

</style>