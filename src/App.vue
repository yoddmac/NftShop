<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div @click="goToHome" class="d-flex align-center">
        <v-img
          alt="Nft Logo"
          class="shrink mr-2"
          contain
          src="@/assets/NFT_Icon.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Nft Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="@/assets/test.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
       goToHome(){
   this.$router.push('/'); 
      }
  }
};
</script>
