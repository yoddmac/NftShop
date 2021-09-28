<template>
  <v-container class="fill-height" fluid>
    <v-layout row wrap>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="4" lg="4">
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              type="text"
              v-model="search"
              placeholder="Recherche"
              filled
              rounded
              dense
            ></v-text-field>
          </v-col>
          <v-card
            flat
            class="ma-3 text-xs-center"
            elevation="1"
            v-for="item in filteredList"
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

              <v-list-item>
                <div
                  v-for="currency in info"
                  :key="currency.id"
                  class="currency"
                >
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
            </div>
          </v-card>
          <template>
            <div class="text-center">
              <v-pagination
                  v-model="currentPage"
                  :length="3"
              ></v-pagination>
            </div>
          </template>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import Vue from 'vue';
import { 	BPagination } from 'bootstrap-vue';
Vue.component('b-pagination', 	BPagination)

export default {
  name: "ShopPage",
  props: ['title'],

  data() {
    return {
      search: '',
      info: null,
      quantity: 1,
      perPage: 5,
      currentPage: 1,
      items:
        [
          {
            id: 1,
            name: "Bitcoin",
            image: require("@/assets/btc.png"),
          },
          {
            id: 2,
            name: "Ethereum",
            image: require("@/assets/eth.png"),
          },
          {
            id: 3,
            name: "Dot",
            image: require("@/assets/dodge.png"),
          },
          {
            id: 4,
            name: "Ada",
            image: require("@/assets/ada.png"),
          },
          {
            id: 5,
            name: "Iota",
            image: require("@/assets/iota.png"),
          },
          {
            id: 6,
            name: "Bitcoin page 2",
            image: require("@/assets/btc.png"),
          },
          {
            id: 7,
            name: "Ethereum page 2",
            image: require("@/assets/eth.png"),
          },
          {
            id: 8,
            name: "Dot page 2",
            image: require("@/assets/dodge.png"),
          },
          {
            id: 9,
            name: "Ada page 2",
            image: require("@/assets/ada.png"),
          },
          {
            id: 10,
            name: "Iota page 2",
            image: require("@/assets/iota.png"),
          },
          {
            id: 11,
            name: "Bitcoin page 3",
            image: require("@/assets/btc.png"),
          },
          {
            id: 12,
            name: "Ethereum page 3",
            image: require("@/assets/eth.png"),
          },
          {
            id: 13,
            name: "Dot page 3",
            image: require("@/assets/dodge.png"),
          },
          {
            id: 14,
            name: "Ada page 3",
            image: require("@/assets/ada.png"),
          },
          {
            id: 15,
            name: "Iota page 3",
            image: require("@/assets/iota.png"),
          },
      ],
    };
  },

  computed: {
    filteredList() {
      let display = this.items.slice(this.perPage * (this.currentPage - 1), this.perPage * this.currentPage)
      return display.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
  methods: {

  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((reponse) => (this.info = reponse.data.bpi));
  },
};
</script>
