<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card elevation="1">
          <v-img
            src="@/assets/NFT_Icon.png"
            alt="NftShop"
            contain
            height="200"
          ></v-img>
          <v-card-text>
            <v-form>
              <v-text-field
                  v-model="email"
                label="Enter your email"
                name="email"
                prepend-inner-icon="mdi-email"
                type="email"
                class="rounded-0"
                outlined
              ></v-text-field>
              <v-text-field
                  v-model="password"
                label="Enter your password"
                name="password"
                prepend-inner-icon="mdi-lock"
                type="password"
                suffix=" Forgot?"
                class="rounded-0"
                outlined
              ></v-text-field>
              <v-btn
                  v-if="checkFrom()"
                to="/shop"
                class="rounded-0"
                color="#000000"
                x-large
                block
                dark
                >Login</v-btn
              >
              <v-card-actions class="text--secondary">
                <v-checkbox color="#000000" label="Remember me"></v-checkbox>
                <v-spacer></v-spacer>
                No account?
                <a
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  class="pl-2"
                  style="color: #000000"
                  >Sign Up</a
                >
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

  name: "LoginPage",

  data: () => ({
    errors: [],
    email: null,
    password: null,
    reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
  }),
  methods: {
    isEmailValid() {
      return (this.email === "")? "" : (this.reg.test(this.email));
    },
    checkFrom() {
      if (this.email && this.password && this.isEmailValid()) {
        return true
      }
    this.errors = [];

    if (!this.email) {
      this.errors.push('Email required.');
}
    if (!this.password) {
      this.errors.push('Password required.');
    }
    return false;
}
  }
};
</script>
