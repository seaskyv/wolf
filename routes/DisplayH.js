var express = require('express');
var router = express.Router();
var request = require('request');
fs = require('fs');
var people = 12;
var R = ''
var games = [];

router.post("/", function(req, res, next) {
    console.log("Display recored called");
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
            <tr><th width=\'20%\'>Game</th><th width=\'80%\' colspan="' + people + '">Patterns</th></tr>';
            for (i=0;i<games.length - 1;i++){
              index=i+1;
              returnTable = returnTable + '\
              <tr>\
              <td>Game ' + index + '</td>';
              var num_array = games[i].split(",");
              for(k=0;k<num_array.length;k++){
                switch(num_array[k]) {
                  case 'W':
                    style="color:red;"
                    break;
                  case 'F':
                    style="color:yellow;"
                    break;
                  case 'G':
                    style="color:blue;"
                    break;
                  default:
                    style="color:black;"
                } 
                returnTable = returnTable + '\
                <td width=\'' + col_w + '%\'style="' + style + '">' + num_array[k] + '</td>';
              }
              returnTable = returnTable + '\
              </tr>'
            }
            res.send(returnTable);
    })    
    //res.send(returnTable);
  });

module.exports = router;
