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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  background-color: rgb(13, 17, 23);
}
.app-wrapper {
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid;
  border-color: grey;
  margin-top: 50px;
  @media screen and (min-width: 320px) {
    width: 95%;
  }
  @media screen and (min-width: 1024px) {
    width: 75%;
  }
}
.header {
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  border-bottom: 2px solid grey;
  margin-bottom: 5px;
  font-size: 18px;
  color: rgb(186, 193, 194);
  @media screen and (max-width: 767px) {
    justify-content: space-between;
  }
  &__name {
    white-space: nowrap;
    overflow: hidden;
    @media screen and (min-width: 767px) {
      width: 50%;
    }
  }
  &__lenght {
    width: 15%;
    white-space: nowrap;
    overflow: hidden;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  &__type {
    white-space: nowrap;
    overflow: hidden;
    padding-right: 15px;
    @media screen and (min-width: 767px) {
      width: 35%;
      padding-right: 0;
    }
  }
}
</style>
