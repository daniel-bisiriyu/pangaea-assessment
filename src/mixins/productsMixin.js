import { gql } from "apollo-boost";
export const productsMixin = {
  data() {
    return {
      currency: "NGN",
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
            product_options {
              title
              prefix
              suffix
            }
          }
        }
      `;
      return this.$apollo.query({
        query: GET_PRODUCTS,
      });
    },
  },
};
