<script>
import { Bar } from 'vue-chartjs'

export default {
  mixins: [Bar],
  props: ['chartdata', 'options'],
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style>
</style>