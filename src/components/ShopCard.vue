<template>
  <div>
    <v-container class="fill-height" fluid>
      <v-layout row wrap>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <div align="center">
              <h1>
                Total: {{total}} $
              </h1>
            </div>
            <v-card
                flat
                class="ma-3 text-xs-center"
                elevation="1"
                v-for="item in items"
                :key="item.id"
                id="my-card"
            >
              <div>
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title class="text-h5">
                      {{ item.name }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-card-text>
                  <v-img
                      :src="`${item.image}`"
                      width="92px"
                      :style="{ left: '50%', transform: 'translateX(-50%)' }"
                  ></v-img>
                </v-card-text>

                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title class="text-h5" align="center">
                    Price: {{item.price}}$ ---> Token: {{item.quantity}}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ShopCard",

  data() {
    return {
      items:
          [
            {
              id: 1,
              name: "Bitcoin",
              image: require("@/assets/btc.png"),
              price: 49000,
              quantity: "1 BTC"
            },
            {
              id: 2,
              name: "Ethereum",
              image: require("@/assets/eth.png"),
              price: 2400,
              quantity: "1 ETH"

            },
            {
              id: 3,
              name: "Dot",
              image: require("@/assets/dodge.png"),
              price: 200,
              quantity: "10 DOT"

            },
            {
              id: 4,
              name: "iota",
              image: require("@/assets/iota.png"),
              price: 50,
              quantity: "25 IOTA"

            },
            {
              id: 5,
              name: "ada",
              image: require("@/assets/ada.png"),
              price: 100,
              quantity: "100 ADA"

            },
          ]
    }
  },
  computed: {
   total: function () {
     let test = 0;
      for (let i = 0; i < this.items.length; i++) {
        test += this.items[i].price;
      }
      return test;
      }
    }

};
</script>
