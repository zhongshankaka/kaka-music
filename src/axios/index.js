var express = require('express')
var axios = require('axios')

var app = express()

var apiRoutes = express.Router()
apiRoutes.get('/getList', function(req, res) {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  })
  .then(function (response) {
    res.json(response.data)
  })
  .catch(function (error) {
    console.log(error)
  })
})

app.use('/api', apiRoutes)
