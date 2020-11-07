import { gql } from "apollo-boost";
export const productsMixin = {
  data() {
    return {
      currency: "USD",
    };
  },
  methods: {
    getProducts() {
      const GET_PRODUCTS = gql`
        query getProducts {
          products {
            id
            title
            image_url
            price(currency: ${this.currency})
          }
        }
      `;
      return this.$apollo.query({
        query: GET_PRODUCTS,
      });
    },
  },
};
