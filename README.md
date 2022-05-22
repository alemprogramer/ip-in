# ip-in
IP address and  User Country information data get  utilities for javaScript . 





## Installation

Install my-project with npm

```bash
  npm i ip-in
```




## Usage/Examples for node 

### IP Address:
```js
const ip = require('ip-in')

ip.getIpAddress()
.then(data => {
    console.log('ipAddress :',data)
})
```
Result:

```js
ipAddress : 163.172.90.118
```

### user location details

```js
ip.getCountryDetails()
.then(data => {
  console.log('countryDetails:',data)
})
```
Result:
```js
countryDetails : {
  status: 'success',
  ip: '163.172.90.118',
  country: 'France',
  countryCode: 'FR',
  region: 'IDF',
  regionName: 'Île-de-France',
  city: 'Paris',
  zip: '75001',
  lat: 48.8534,
  lon: 2.3488,
  timezone: 'Europe/Paris',
  isp: 'Online S.A.S.',
  org: 'ONLINE',
  as: 'AS12876 ONLINE S.A.S.',
  mobile: false,
  proxy: true
}

```

Or using ES modules and async/await:

```js
import ip from 'ip-in';

(async () => {
   let ipAddress = await ip.getIpAddress()
  console.log('ipAddress',ipAddress)

  let countryDetails = await ip.getCountryDetails()
  console.log('countryDetails',countryDetails)
})();
```