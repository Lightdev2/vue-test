<template>
  <div class="app-wrapper">
    <div class="header">
      <div class="header__name">Имя</div>
      <div class="header__lenght">Размер</div>
      <div class="header__type">Тип</div>
    </div>
    <FolderView name="root" :folders="folders" :files="files" :isOpen="true" />
  </div>
</template>

<script>
import FolderView from "./components/FolderView.vue";
import data from "./data/list";

export default {
  name: "App",
  components: {
    FolderView,
  },
  data: () => data,
};
</script>

<style lang="scss">
@import '@/styles/style.scss';
</style>
