<template>
  <div class="csm_list">
      <div class="csm_list-title" v-if="title">{{title}}</div>
      <div class="csm_list-body">
          <slot></slot>
      </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'List',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="scss">
@import '../../assets/css/var.scss';
  .csm_list{
      width: 100%;
      position: relative;
      margin-top: 20px;
    &-title{
        color: $weakColor;
        padding: 10px;
        line-height: 1;
        font-size: $baseSize;
    }
  }
</style>
