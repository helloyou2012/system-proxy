#!/usr/bin/env node

var argv = require('optimist').argv;
var proxy = require('./index');

if (argv.h) {
  var p = h.split(':');
  proxy.setProxyOn(p[0], p[1])
    .then(function() {
      console.log('Proxy on ok!');
    })
    .catch(function() {
      console.log('fail');
    });
} else if (argv.d) {
  proxy.setProxyOff()
    .then(function() {
      console.log('Proxy off ok!');
    })
    .catch(function() {
      console.log('fail');
    });
};