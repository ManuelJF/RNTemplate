#!/usr/bin/env node

var fs = require('fs');
 
console.log('CREATING ENV STAGING FILE:')
fs.writeFile('.env.staging', 'ENV=staging\n', function (err) {
  if (err) throw err
  console.log('Env Staging is created successfully.')
})

console.log('CREATING ENV PROD FILE:')
fs.writeFile('.env', 'ENV=production\n', function (err) {
  if (err) throw err
  console.log('Env Production is created successfully.')
})
