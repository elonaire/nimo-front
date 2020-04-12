import Axios from "axios";

class Auth {
  constructor() {
    this.isAuthenticated = false;
  }

  login(cb) {
    this.isAuthenticated = true;

    cb();

    Axios.interceptors.request.use((config) => {
      const token = localStorage.getItem("JWTAUTH");
      config.headers["Authorization"] = token;

      return config;
    });
  }

  logout(cb) {
    this.isAuthenticated = false;
    cb();
  }

  confirmAuth() {
    let authStatus = localStorage.getItem("JWTAUTH");
    if (authStatus) {
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }
}

export default new Auth();
