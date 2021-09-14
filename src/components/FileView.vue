<template>
  <div class="file-row">
    <div class="file-row__name">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-file-text-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"
        />
      </svg>
      {{ name }}
    </div>
    <div class="file-row__lenght">{{ length }}</div>
    <div class="file-row__type">{{ type }}</div>
  </div>
</template>

<script>
export default {
  name: "FileView",
  props: {
    name: String,
    type: String,
    length: String,
  },
};
</script>

<style scoped lang="scss">
.file-row {
  width: 100%;
  color: rgb(186, 193, 194);
  display: flex;
  margin-top: 5px;
  cursor: pointer;
  @media screen and (max-width:767px) {
    justify-content: space-between;
  }
  &:hover {
    background-color: rgb(22, 27, 34);
  }
  &__name {
    overflow: hidden;
    white-space: nowrap;
    @media screen and (min-width:767px) {
      width: 50%;
    }
  }
  &__type {
    @media screen and (min-width: 767px) {
      width: 35%;
      padding-right: 0;
    }
    padding-right: 15px;
    overflow: hidden;
    white-space: nowrap;
  }
  &__lenght {
    width: 15%;
    overflow: hidden;
    white-space: nowrap;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  margin-bottom: 5px;
}
</style>
