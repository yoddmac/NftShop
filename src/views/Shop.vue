<template>
  <div>
    <ShopPage />
  </div>
</template>

<script>
import ShopPage from "../components/ShopPage.vue";
export default {
  name: "Shop",
  page: 1,
  components: {
    ShopPage,
  },
  methods: {
    handlePageChange(value) {
      this.currentPage = value;
    },
  },
};
</script>
