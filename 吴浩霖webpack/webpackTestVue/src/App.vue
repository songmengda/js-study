<template>
  <div class="page">{{msg}}</div>
</template>
<script>
import songhahadiyigenpmpush from 'songhahadiyigenpmpush'
export default {
  data () {
    return {
      msg: '3333'
    }
  },
  created () {
    console.log(songhahadiyigenpmpush)
  },
}
</script>
<style>
.page{
  color: red;
}
</style>