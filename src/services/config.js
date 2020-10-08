const devBaseURL = "http://120.53.125.40:3000/";
const proBaseURL = "https://production.org";
export const BASEURL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;
