<template>
  <div class="app-wrapper">
    <div class="header">
      <div class="header__row">
        <div class="header__name">Имя</div>
        <div class="header__lenght">Размер</div>
        <div class="header__type">Тип</div>
      </div>
      <div class="header__row">
        <input
          class="search-form header__search-form"
          type="text"
          placeholder="Введите имя файла/папки для поиска"
          v-model="searchText"
        />
      </div>
    </div>

    <FolderView
      :name="mainName"
      :folders="folders"
      :files="files"
      :isOpen="true"
    />
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
  data: function() {
    return {
      folders: data.folders,
      files: data.files,
      searchText: "",
      mainName: "root",
    };
  },
  created() {
    //вытаскиваем информацию из адрессной строки
    const windowData = Object.fromEntries(
      new URL(window.location).searchParams.entries()
    );
    //заготовочка на будущее
    const VALID_KEYS = ["searchText"];
    //устанавливаем стэйт
    VALID_KEYS.forEach((key) => {
      if (windowData[key]) {
        this[key] = windowData[key];
        //если в строке нет параметра он берется из localStorage
      } else {
        let item = JSON.parse(localStorage.getItem(key));
        if (item) {
          this[key] = item;
        }
      }
    });
  },
  watch: {
    searchText: function() {
      //сохраняем информацию о поиске
      history.pushState(null, " ", `?searchText=${this.searchText}`);
      localStorage.setItem("searchText", JSON.stringify(this.searchText));

      if (this.searchText === "") {
        this.folders = data.folders;
        this.files = data.files;
        this.mainName = "root";
        return;
      }
      this.mainName = "Найденные файлы и папки:";
      let result = {
        files: new Set(),
        folders: new Set(),
      };
      /**
       * Рекурсивный поиск файлов и папок в глубину типа pre-order
       * Все таки курс по алгоритмам из универа был полезен
       */
      let findItems = function findItems(folders, files, pattern) {
        if (files == null) return;
        if (folders == null) return;
        files.forEach((file) => {
          if (file.name.includes(pattern)) {
            result.files.add(file);
          }
        });
        folders.forEach((folder) => {
          if (folder.name.includes(pattern)) {
            result.folders.add(folder);
          }
          findItems(folder.folders, folder.files, pattern);
        });
        return result;
      };

      findItems(data.folders, data.files, this.searchText);
      this.folders = result.folders;
      this.files = result.files;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/style.scss";
</style>
