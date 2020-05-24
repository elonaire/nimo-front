import Axios from "axios";
import * as moment from "moment";

class BaseAPI {
  constructor(env) {
    if (env === "development") {
      this.baseUrl = process.env.REACT_APP_DEV_REMOTE;
    } else if (env === "production") {
      this.baseUrl = process.env.REACT_APP_PRODUCTION;
    }
  }

  resetForm(setFieldStateArray) {
    for (let i = 0; i < setFieldStateArray.length; i++) {
      setFieldStateArray[i]("");
    }
  }
}

class User extends BaseAPI {
  constructor(env) {
    super(env);
  }

  async fetchUsers(setResponse, setIsLoading) {
    try {
      let users = await Axios({
        method: "get",
        url: `${this.baseUrl + "/users"}`,
      });

      let rows = [];

      for (let i = 0; i < users.data.length; i++) {
        let {
          user_id,
          first_name,
          last_name,
          user_role,
          createdAt,
        } = users.data[i];

        let row = {
          userId: user_id,
          firstName: first_name,
          lastName: last_name,
          role: user_role,
          lastLogin: moment(createdAt).format("LLLL"),
          dateOfRegistration: moment(createdAt).format("LLLL"),
        };

        rows.push(row);
      }

      setResponse(rows);
      setIsLoading(false);
    } catch (error) {
      setResponse(error.response);
      setIsLoading(false);
    }
  }

  async addUser() {}

  async fetchUserDetails() {}

  async fetchUserPictures() {}

  async fetchUserTemps() {}

  async fetchUserOrders() {}

  async fetchUserCart() {}
}

class Product extends BaseAPI {
  constructor(env) {
    super(env);
  }

  async fetchAllProducts(setIsLoading, setResponse) {
    try {
      let res = await Axios({
        method: "get",
        url: `${this.baseUrl + "/products"}`,
      });

      setResponse(res.data);
      setIsLoading(false);
    } catch (error) {
      // setResponse(error.response);
      setResponse([]);
      setIsLoading(false);
    }
  }

  async fetchProducts(setIsLoading, setResponse) {
    try {
      let products = await Axios({
        method: "get",
        url: `${this.baseUrl + "/products"}`,
      });

      let rows = [];

      for (let i = 0; i < products.data.length; i++) {
        let { product_id, name, stock, price } = products.data[i];

        let row = {
          productId: product_id,
          name,
          stock,
          price,
          piecesSold: 0,
          pendingOrders: 0,
        };

        rows.push(row);
      }

      setResponse(rows);
      setIsLoading(false);
    } catch (error) {
      // setResponse(error.response);
      setResponse([]);
      setIsLoading(false);
    }
  }

  async fetchProductDetails(setResponse, setIsLoading, productId) {
    try {
      let res = await Axios({
        method: "get",
        url: `${this.baseUrl + "/products?product_id=" + productId}`,
      });

      setResponse(res.data[0]);
      setIsLoading(false);
    } catch (error) {
      // setResponse(error.response);
      setResponse([])
      setIsLoading(false);
    }
  }

  async addProduct(setResponse, setStateArray, OPTIONS) {
    try {
      let res = await Axios({
        method: "post",
        url: `${this.baseUrl + "/products/add"}`,
        data: OPTIONS.productDetails,
        headers: {
          Authorization: OPTIONS.token,
        },
      });

      setResponse(res.data);
      OPTIONS.setIsLoading(false);
      super.resetForm(setStateArray);
    } catch (error) {
      // console.log(error.response);
      setResponse(error.response);
      OPTIONS.setIsLoading(false);
    }
  }

  async fetchProductFiles(setResponse, setIsLoading, productId) {
    try {
      let res = await Axios({
        method: "get",
        url: `${this.baseUrl + "/files?product_id=" + productId}`,
      });

      setResponse(res.data);
      setIsLoading(false);
    } catch (error) {
      // setResponse(error.response);
      setResponse([]);
      setIsLoading(false);
    }
  }

  async fetchProductReviews(setResponse, setIsLoading, productId) {}

  async fetchProductOrders(setResponse, setIsLoading, productId) {}
}

class Blog extends BaseAPI {
  constructor(env) {
    super(env);
  }

  async createBlogPost(setResponse, setStateArray, OPTIONS) {
    try {
      let res = await Axios({
        method: "post",
        url: `${this.baseUrl + "/blog/create"}`,
        data: OPTIONS.reqBody,
      });

      setResponse(res.data);
      OPTIONS.setIsLoading(false);
      super.resetForm(setStateArray);
    } catch (error) {
      setResponse(error.response);
      OPTIONS.setIsLoading(false);
    }
  }

  async fetchBlogPosts(setResponse, setIsLoading) {
    try {
      let users = await Axios({
        method: "get",
        url: `${this.baseUrl + '/blog'}`,
      });
    
      let rows = [];
    
      for (let i = 0; i < users.data.length; i++) {
        let { post_id, title, author, createdAt } = users.data[i];
    
        let row = {
          postId: post_id,
          title,
          author,
          link: `${window.location.hostname + '/blog'}`,
          date: moment(createdAt).format('LLLL'),
          numberOfComments: 0,
        };
    
        rows.push(row);
      }
      setResponse(rows);
      setIsLoading(false);
    } catch (error) {
      setResponse(error.response);
      setIsLoading(false);
    }
  }

  async fetchBlogPost() {}
}

class Category extends BaseAPI {
  constructor(env) {
    super(env);
  }

  async fetchCategories(setResponse, setIsLoading) {
    try {
      let res = await Axios({
        method: "get",
        url: `${this.baseUrl + "/category?category="}`,
      });

      setResponse(res.data);
      setIsLoading(false);
    } catch (error) {
      // console.log(error.response);
      // setResponse(error.response);
      setResponse([]);
      setIsLoading(false);
    }
  }
}

class Orders extends BaseAPI {
  constructor(env) {
    super(env);
  }

  async fetchOrdersAdmin(setResponse, setIsLoading) {
    try {
      let orders = await Axios({
        method: "get",
        url: `${this.baseUrl + "/orders/admin"}`,
      });
    
      let rows = [];
    
      for (let i = 0; i < orders.data.length; i++) {
        let { order_id, createdAt, quantity, product_id, status } = orders.data[i];
    
        let row = {
          orderId: order_id,
          date: createdAt,
          quantity,
          product: product_id,
          status,
        };
    
        rows.push(row);
      }

      setResponse(rows);
      setIsLoading(false);
    } catch (error) {
      setResponse([]);
      setIsLoading(false);
    }
  }
}

export { User, Product, Blog, Category, Orders };
