# system-proxy: Set system proxy for mac & windows platform

# Installing:

     npm install system-proxy

## Usage:

```javascript
var proxy = require('system-proxy');

proxy.setProxyOn(p[0], p[1])
  .then(function() {
    console.log('Proxy on ok!');
  })
  .catch(function() {
    console.log('fail');
  });

proxy.setProxyOff()
  .then(function() {
    console.log('Proxy off ok!');
  })
  .catch(function() {
    console.log('fail');
  });
```

### terminal

```shell
# disable web-proxy
system-proxy -d

# set web-proxy
system-proxy -h localhost:8080
```
