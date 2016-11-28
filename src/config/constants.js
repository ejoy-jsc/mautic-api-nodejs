import config from "./config";

const MAUTIC_BASE_URL = config.MAUTIC_BASE_URL;
const MAUTIC_API_URL = MAUTIC_BASE_URL + 'api/';
const BASE_URL = 'http://localhost:3000/' ;

exports.ENV = (function ENV () {
	const MAUTIC_TOKEN_PATH = 'oauth/v2/token';
	const MAUTIC_AUTH_PATH = 'oauth/v2/authorize';
  const MAUTIC_PUBLIC_KEY = config.MAUTIC_PUBLIC_KEY;
	const MAUTIC_SECRET_KEY = config.MAUTIC_SECRET_KEY;
	const ACCESS_TOKEN = config.ACCESS_TOKEN;
	const REFRESH_TOKEN = config.REFRESH_TOKEN;

  return {
    BASE_URL,
    MAUTIC_BASE_URL,
    MAUTIC_API_URL,
    MAUTIC_TOKEN_PATH,
    MAUTIC_AUTH_PATH,
  	MAUTIC_PUBLIC_KEY,
  	MAUTIC_SECRET_KEY,
  	ACCESS_TOKEN,
  	REFRESH_TOKEN,
  }
})();

exports.URLS = (function URLS () {
  return {
    GET_CONTACTS: MAUTIC_API_URL + 'contacts',
		CREATE_CONTACT: MAUTIC_API_URL + 'contacts/new',
		UPDATE_CONTACT: MAUTIC_API_URL + 'contacts/:id/edit',
  }
})()