var express = require('express');
var mysql = require('mysql');

var router = express.Router();

var connection = mysql.createConnection({
    
    'host' : 'aws-kau-test.cjfjhr6oeu3e.ap-northeast-1.rds.amazonaws.com',
    'user' : 'bang',
    'password' : 'wjswkrlfur13@',
    'database' : 'sopt'
});

router.get('/', function(req, res, next) {
    connection.query('select id, title, timestamp from board ' +
                     'order by timestamp desc;', function (error, cursor) {
        
        console.log(JSON.stringify(error));
        console.log(JSON.stringify(cursor));
        res.json(cursor); 
    });
});

module.exports = router;