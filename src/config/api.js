var domain = window.location.hostname;
var regexp = /(.*)\.crmav100.ru/g;
var match = regexp.exec(domain);
if (match[1] == 'undefined') {
  match[1] = 'test';
}

const BASE_URL = 'https://' + match[1] + '.api.crmav100.ru'

export default {
  token_login: BASE_URL+'/users/signup/get_token',
  set_profile: BASE_URL+'/users/signup/set_profile',
  users: BASE_URL+'/users/api',
  content:  BASE_URL+'/content/api',
  request: BASE_URL+'/request/request_api',
  request_get_offer: BASE_URL+'/request/request_api/get_offer',
  offers_all: BASE_URL+'/request/offers',
  offers: BASE_URL+'/request/offers_api'
}
