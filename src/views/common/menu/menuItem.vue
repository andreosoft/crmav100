<template>
  <div v-if="element.auth.indexOf(parseInt($store.getters['auth/profile'].role)) >= 0">
    <router-link :to="element.route" :title="element.title"><i class="fas" :class="element.icon"></i></router-link>
  </div>
</template>

<script>
export default {
  props: {
    element: Object
  }
}
</script>
