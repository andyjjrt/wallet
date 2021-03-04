<script>
import { Doughnut } from 'vue-chartjs'

export default {
  mixins: [Doughnut],
  props: ['chartdata', 'options'],
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style>
</style>