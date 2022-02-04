<template>
  <div id="app">
      <Header/>
      <div id="content" class="content">
          <router-view></router-view>
      </div>

  </div>
</template>


<script>
import Header from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  //    components를 불러와서 사용할 수 있음.
  }
}
</script>

<style>

</style>
