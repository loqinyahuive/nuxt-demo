import Vue from 'vue'
import {getRequest, postRequest, deleteRequest, putRequest} from '../api/http'
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.putRequest = putRequest;