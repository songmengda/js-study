<template>
  <div class="page_index">
    <csm-list title="基础组件"></csm-list>
  </div>
</template>

<script lang="ts">
import List from '../components/List/list.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Index',
  components: {
    'csm-list': List
  }
})
</script>
<style scoped lang="scss">
  .page_index{

  }
</style>
