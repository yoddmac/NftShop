<template>
  <div>
    <h1>La home page :</h1>
    <LoginPage />
  </div>
</template>

<script>
import LoginPage from "../components/LoginPage.vue";
export default {
  name: "Home",
  components: { LoginPage },
};
</script>
