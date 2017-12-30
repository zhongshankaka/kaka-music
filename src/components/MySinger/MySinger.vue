<<template>
  <div class="my-singer" ref="singerRef">
    <my-singer-list ref="listRef" :data="singers"></my-singer-list>
  </div>
</template>

<script >
import { getSingerList } from '@/api/singer.js'
import { ERR_OK } from '@/api/config'
import { createSinger } from '@/common/js/SingerClass.js'
import MySingerList from '@/components/base/MySingerList/MySingerList'

const HOT_TITLE = '热门'
const HOT_NUM = 10
export default {
  components: {
    MySingerList
  },
  data () {
    return {
      singers: []
    }
  },

  props: {},
  watch: {},
  methods: {
    _getSingerList () {
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          // this.singers = res.data.list
          this.singers = this._formatSingers(res.data.list)
          // console.log(this._formatSingers(this.singers))
        }
      })
    },

    _formatSingers (list) {
      let map = {
        hot: {
          title: HOT_TITLE,
          items: []
        }
      }

      // 填充歌手数据
      list.forEach((item, index) => {
        // 填充热门歌手数据
        if (index < HOT_NUM) {
          map.hot.items.push(createSinger(item))
        }

        // 填充 a-z 字母
        let key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }

        map[key].items.push(createSinger(item))
      })

      let hot = []
      let others = []

      for (let key in map) {
        let value = map[key]
        if (value.title.match(/[a-zA-Z]/)) {
          others.push(value)
        } else if (value.title === HOT_TITLE) {
          hot.push(value)
        }
      }

      others.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })

      // console.log(hot.concat(others))
      return hot.concat(others)
    }
  },

  created () {
    this._getSingerList()
  },
  mounted () {},
  destroyed () {}
}
</script>

<style lang='scss' scoped>
.my-singer {
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;
}
</style>