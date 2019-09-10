<template>
  <div class="container"
       ref="container">

  </div>
</template>

<script>
import * as d3 from 'd3'
import { CanvasWrap } from '@/utils'

export default {
  data() {
    return {
      canvas: null,
      context: null,
      dataContainer: null
    }
  },
  mounted() {
    let width = 500
    let height = 500
    let paddingX = 20
    let paddingY = 10
    let canvas = this.canvas = d3.select(this.$refs.container)
      .append('canvas')
      .attr('width', width)
      .attr('height', height)

    let context = this.context = canvas.node().getContext('2d')
    this.dataContainer = canvas.append('data-customer')

    let x = 200
    let y = 200
    let w = 100
    let h = 40
    let x2 = 200
    let y2 = 50
    let w2 = 100
    let h2 = 100
    let fontSize = 14
    let color = '#fff'

    CanvasWrap.roundRect(context, x, y, w, h, 6, true, false)
    CanvasWrap.roundRect(context, x2, y2, w2, h2, 6, true, false)

    CanvasWrap.text(context, '标题', x + paddingX, y + h / 2, `${fontSize}px`, color)
    CanvasWrap.wrapText(context, '这是一个特别长的标题，可能会换行', x2 + paddingX, y2 + paddingY + fontSize / 2, w2 - 2 * paddingX, 20, `${fontSize}px`, color)
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 500px;
  height: 500px;
  background: #efefef;
}
</style>
