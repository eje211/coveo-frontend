<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <span class="md-title">API demo</span>
    </md-app-toolbar>
    <md-app-content>
      <SearchMenu />
    </md-app-content>
  </md-app>
</template>

<script>
import Vue from 'vue';
import { MdApp, MdButton, MdContent, MdTabs, MdToolbar
} from 'vue-material/dist/components';
import SearchMenu from './SearchMenu.vue';

Vue.use(MdApp);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdToolbar);

export default {
  name: 'SearchPage',
  components: {
    SearchMenu
  }
}
</script>

<style lang="css" scoped>
</style>