var express = require('express');
var router = express.Router();
var path = require('path');

var dt = {
    code: 0, 
    msg: '',
    total: 0,
    data: null
};

// 收益清单  全部收益
router.get('/pcdn/getBCinCome', function(req, res){
  res.send({
    "code":"0",
    "msg":"请求异常，请稍后重试",
    "total":0,
    "data":{
      "result":[
          {
              "date":"2016-11-01",
              "credits":90
          },{
              "date":"2016-11-02",
              "credits":110
          },{
              "date":"2016-11-03",
              "credits":40
          },{
              "date":"2016-11-04",
              "credits":70
          },{
              "date":"2016-11-05",
              "credits":210
          },{
              "date":"2016-11-06",
              "credits":130
          },{
              "date":"2016-11-07",
              "credits":90
          },{
              "date":"2016-11-08",
              "credits":190
          },{
              "date":"2016-11-09",
              "credits":30
          },{
              "date":"2016-11-10",
              "credits":80
          },{
              "date":"2016-11-11",
              "credits":10
          },{
              "date":"2016-11-12",
              "credits":210
          },{
              "date":"2016-11-13",
              "credits":260
          },{
              "date":"2016-11-14",
              "credits":166
          }],
      "sum":9999
    }
  })
})

module.exports = router;