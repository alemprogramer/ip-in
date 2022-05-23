const ipURL = "https://ipapi.co/ip/";
const axios = require("axios");

const getIpAddress = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let ip = await axios.get(ipURL);
      resolve(ip.data);
    } catch (error) {
      reject(error.message);
    }
  });
};


const getCountryDetails = async () => {
  const ip = await getIpAddress();
  return new Promise(async (resolve, reject)=> {
    try {
      let country = await axios.get(`https://ip-get-geolocation.com/api/json/${ip}`);
      const ipData = country.data
          const finalData = {
            status: ipData.status,
            ip: ipData.query,
            country: ipData.country,
            countryCode: ipData.countryCode,
            region: ipData.region,
            regionName: ipData.regionName,
            city: ipData.city,
            zip: ipData.zip,
            lat: ipData.lat,
            lon: ipData.lon,
            timezone: ipData.timezone,
            isp: ipData.isp,
            org: ipData.org,
            as: ipData.as,
            mobile: ipData.mobile,
            proxy: ipData.proxy,
          };
          resolve(finalData);
    } catch
    (error) {
      reject(error.message);
    }
  });
};

const getUserLocation = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      // let ipData = await axios.get(`https://ip-api.io/json`);
      let ipData = await axios.get(`https://api.ipregistry.co/?key=tryout`);
      // &fields=location.country&pretty=true
        resolve(ipData.data);
      
    } catch (error) {
      reject(error.message);
    }
  });
}


module.exports = {
  getCountryDetails,
  getIpAddress,
  getUserLocation
};
