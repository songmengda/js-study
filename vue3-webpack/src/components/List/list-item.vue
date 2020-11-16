<template>
  <div class="csm_list_item">
      <div class="csm_list_item-name" v-if="name">{{name}}</div>
      <div class="csm_list_icon">
          <slot></slot>
      </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ListItem',
  props: {
    name: {
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
    &-name{
        color: $weakColor;
        padding: 10px;
        line-height: 1;
        font-size: $baseSize;
    }
  }
</style>
