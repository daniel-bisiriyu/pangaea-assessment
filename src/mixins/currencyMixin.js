import { gql } from "apollo-boost";
export const currencyMixin = {
  methods: {
    getCurrencies() {
      const GET_CURRENCIES = gql`
        query getCurrencies {
          currency
        }
      `;
      return this.$apollo.query({
        query: GET_CURRENCIES,
      });
    },
  },
};
