const fs = require('fs/promises')
const axios = require('axios')

axios.get('https://fakestoreapi.com/products')
.then(res => res.data)
.then(data => fs.writeFile('store.json',JSON.stringify(data,null,2)))
.then(()=> console.log('done'))