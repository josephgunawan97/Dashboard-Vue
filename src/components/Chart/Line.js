import { Line } from 'vue-chartjs'

export default ({
  extends: Line,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  },
  computed: {
    chartData () {
      return this.data
    }
  },
  watch: {
    data () {
      this.renderChart(this.data, this.options)
    }
  }
})
