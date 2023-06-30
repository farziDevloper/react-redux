import axios from "axios";
import config from "./config";

let apiBasePath = "";

if (process.env.NODE_ENV === "production") {
  apiBasePath = config.API_BASEPATH_PROD;
} else if (process.env.NODE_ENV === "staging") {
  apiBasePath = config.API_BASEPATH_STAGING;
}

console.log("apiBasePath11", apiBasePath);
// const apiBasePath = config.API_BASEPATH;
class Request {
  constructor(dispatch, successFn, errorFn) {
    this.successFn = typeof successFn === "function" ? successFn : () => {};
    this.errorFn = typeof errorFn === "function" ? errorFn : () => {};
    this.dispatch = typeof dispatch === "function" ? dispatch : () => {};
  }

  /**
   * GET axios instance and do things that are common for every request
   */
  instance() {
    const headers = {};

    // if (process.env.NODE_ENV === "development") {
    //   headers.frontEnv = "local";
    // }

    const auth = localStorage.getItem("authToken");
    if (auth) {
      headers.Authorization = auth;
    }

    const instance = axios.create({
      baseURL: "",
      headers,
    });

    return instance;
  }

  /**
   * GET Requests
   * @param {string} url
   * @param {object} params
   */
  async get(url, params = {}) {
    const prod2Apis = [config.apis.admin.COMMISSION_SETTING_LIST, config.apis.admin.APPROVAL_USER_DETAIL];
    if (process.env.NODE_ENV === "production") {
      apiBasePath = config.API_BASEPATH_PROD;
    } else if (process.env.NODE_ENV === "staging") {
      apiBasePath = config.API_BASEPATH_STAGING;
    }
    if (process.env.NODE_ENV === "production" && prod2Apis.includes(url)) {
      apiBasePath = config.API_BASEPATH_PROD_2;
    } else if (process.env.NODE_ENV === "production" && prod2Apis.includes(url.split("?")[0])) {
      apiBasePath = config.API_BASEPATH_PROD_2;
    }

    console.log("prod2Apis", prod2Apis);

    try {
      const res = await this.instance().get(apiBasePath + url, params);
      const data = res.data ? res.data : null;
      const headers = res.headers ? res.headers : null;
      this.successFn(data, headers);
      return res;
    } catch (error) {
      // const data = error.hasOwnProperty('data') ? data : null;
      // const headers = error.hasOwnProperty('headers') ? headers : null;

      if (error && error.response && error.response.status === 401) {
        window.location.href = "/admin";
      }
      console.log("Error => ", error);
      this.errorFn(error);
    }
  }

  /**
   * POST Requests
   * @param {string} url
   * @param {object} params
   */
  async post(url, params = {}) {
    const prod2Apis = [
      "/user-service/admin/generate/vpa",
      "/user-service/admin/fetch/vpa/list",
      config.apis.admin.PAY_BACK,
      config.apis.admin.PAY_BACK_LISTING,
      config.apis.user.USER_BY_MOBILE,
      config.apis.admin.ADD_COMMISSION_SETTING,
      config.apis.admin.COMMISSION_SETTING_LIST,
      config.apis.distributer.GET_AGENTS,
      config.apis.distributer.DISTRIBUTOR_DASHBOARD_DETAILS,
      config.apis.distributer.AGENT_DETAILS,
      config.apis.distributer.TRANSACTION_DETAILS,
      config.apis.distributer.ALL_VPA_LIST,
      config.apis.user.LOGIN_HISTORY,
      config.apis.admin.REPORT_BY_TRANSACTION,
      config.apis.admin.DAILY_REPORT,
      config.apis.admin.ESCROW_TRANSACTION_LIST,
      config.apis.admin.PAY_BACK_CREATE_REQUEST,
      config.apis.admin.PAY_BACK_REQUEST_LIST,
      config.apis.admin.ADD_APPROVAL_USER,
      config.apis.admin.APPROVAL_USER_LIST,
      config.apis.admin.RECONCILE_COLLECT_ADD,
      config.apis.admin.RECONCILE_COLLECT_LIST,
      config.apis.admin.RECONCILE_COLLECT_APPROVED,
      config.apis.admin.HIERARCHY_REPORTS,
      config.apis.admin.BANNER_LIST,
      config.apis.admin.CREATE_BANNER,
      config.apis.admin.BANNER_DELETE,
      config.apis.distributer.CHANNEL_REPORT,
      config.apis.distributer.BUSINESS_REPORT,
      config.apis.admin.ADD_WEBHOOK,
    ]; 
   
    console.log("prod2Apis", prod2Apis);
    if (process.env.NODE_ENV === "production") {
      apiBasePath = config.API_BASEPATH_PROD;
    } else if (process.env.NODE_ENV === "staging") {
      apiBasePath = config.API_BASEPATH_STAGING;
    }

    try {
      if (process.env.NODE_ENV === "production" && prod2Apis.includes(url)) {
        apiBasePath = config.API_BASEPATH_PROD_2;
      } else if (process.env.NODE_ENV === "production" && prod2Apis.includes(url.split("?")[0])) {
        apiBasePath = config.API_BASEPATH_PROD_2;
      }
      const res = await this.instance().post(apiBasePath + url, params);
      const { data = {}, status } = res;
      this.successFn(data, status);
      return res;
    } catch (error) {
      // const {
      //   response: { data = {}, status },
      // } = error;
      //  console.log("Error => ", error.response);
      if (error && error.response && error.response.status == "401") {
        // need to check the status code for making user logout
      }

      //   this.errorFn(data, status);
    }
  }

  /**
   * PUT Requests
   * @param {string} url
   * @param {object} params
   */
  async put(url, params = {}) {
    const prod2Apis = [config.apis.admin.APPROVAL_USER_UPDATE,
      config.apis.admin.UPDATE_BANNER,
    ];
    if (process.env.NODE_ENV === "production" && prod2Apis.includes(url)) {
      apiBasePath = config.API_BASEPATH_PROD_2;
    }
    try {
      const res = await this.instance().put(apiBasePath + url, params);
      const { data = {}, status } = res;
      this.successFn(data, status);
      return res;
    } catch (error) {
      // const {
      //   response: { data = {}, status },
      // } = error;
      //  console.log("Error => ", error.response);
      if (error && error.response && error.response.status == "401") {
        // need to check the status code for making user logout
      }

      //   this.errorFn(data, status);
    }
  }

  /**
   * DELETE Requests
   * @param {string} url
   * @param {object} params
   */
  async delete(url, params = {}) {
    try {
      const res = await this.instance().delete(apiBasePath + url, params);
      const { data = {}, status } = res;
      this.successFn(data, status);
      return res;
    } catch (error) {
      //handle error
    }
  }
}

export default Request;
