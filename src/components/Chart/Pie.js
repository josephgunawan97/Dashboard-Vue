import { Pie } from 'vue-chartjs'

export default ({
  extends: Pie,
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
