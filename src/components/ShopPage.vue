<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card elevation="1">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5">
                Bitcoin Price Index
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-col cols="12">
              <v-img
                class="mx-auto"
                src="../assets/btc.png"
                alt="Sunny image"
                width="92"
              ></v-img>
            </v-col>
          </v-card-text>

          <v-list-item>
            <div v-for="currency in info" :key="currency" class="currency">
              {{ currency.description }}:
              <span class="lighten">
                <span v-html="currency.symbol"></span
                >{{ currency.rate_float | currencydecimal }}
              </span>
            </div>
          </v-list-item>

          <v-card-actions>
            <v-text-field
              hide-details
              single-line
              prefix="$"
              type="number"
              label="Enter Quantity (min 50$)"
            ></v-text-field>
            <v-btn text> BUY </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "ShopPage",
  data() {
    return {
      info: null,
      quantity: 1,
    };
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },

  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((reponse) => (this.info = reponse.data.bpi));
  },
};
</script>
