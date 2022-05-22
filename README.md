# ip-in
IP address and Country information data get  utilities for javaScript .



## Installation

Install my-project with npm

```bash
  npm install ip-in
```



## Usage/Examples for node 



```js
const ip = require('ip-in')

ip.getIpAddress()
.then(data => {
    console.log(data)
})

ip.getCountryDetails()
.then(data => {
    console.log(data)
})
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


