<template>
  <div class='progressBar' >
    <progress :percent=percent active />
    <p>{{year}}年已经过去了{{days}}天</p>

  </div>
</template>


<script>
export default {
  methods: {
    isLeapYear () {
      const year = new Date().getFullYear()
      if (year % 400 === 0) {
        return true
      } else if (year % 4 === 0 && year % 100 !== 0) {
        return true
      } else {
        return false
      }
    },

    getDaysOfYear () {
      return this.isLeapYear() ? 366 : 365
    }

  },

  computed: {
    year () {
      return new Date().getFullYear()
    },
    days () {
      let start = new Date()
      start.setMonth(0)
      start.setDate(0)

      let offset = new Date().getTime() - start.getTime()
      return parseInt(offset / 1000 / 60 / 60 / 24) + 1
    },
    percent () {
      return (100 * this.days / this.getDaysOfYear()).toFixed(1)
    }

  }

}
</script>


<style lang='scss'>
.progressBar{
    width: 80%;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 40px;

    progress{
        margin-bottom: 10px;
    }
    
}

</style>
