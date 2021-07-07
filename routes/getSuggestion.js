var express = require('express');
var router = express.Router();
var request = require('request');
fs = require('fs');
var people = 12;
var R = ''
var games = [];
var match = 0;
var index = 0;

router.post("/", function(req, res, next) {
    console.log("Get Suggestion called");
    console.log(req.body.data);
    Input = req.body.data.split(",");
    fs.readFile('./data.txt', 'utf8' , (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      //console.log(data);
      R = data;
      games = R.toString().replace(/\r\n/g,'\n').split("\n");
      console.log("there are " + games.length + " records");
      console.log(R);
      var col_w = 80/people;
      col_w = col_w.toFixed(2);
      var returnTable='<table align="center" cellspacing=\'0\' border=\'1\'>\
      <colgroup>\
            <col span="1">\
            </colgroup>\
            <tr><th width=\'20%\'>Suggestion</th><th width=\'80%\' colspan="' + people + '">Patterns</th></tr>';
            for (i=0;i<games.length - 1;i++){
              var num_array = games[i].split(",");
              match = 1;
              for (j = 0;j < Input.length;j++){
                if ((Input[j] != 'N') && Input[j] != num_array[j]){
                  match = 0;
                }
              }
              if (match == 1){
                index = index+1;
                returnTable = returnTable + '\
              <tr>\
              <td>' + index + '</td>';
                for(k=0;k<num_array.length;k++){
                  returnTable = returnTable + '\
                  <td width=\'' + col_w + '%\'>' + num_array[k] + '</td>';
                }
                returnTable = returnTable + '\
                </tr>'
              }
              
            }
            res.send(returnTable);
    })    
    //res.send(returnTable);
  });

module.exports = router;
