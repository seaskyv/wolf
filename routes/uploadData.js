var express = require('express');
var router = express.Router();
var request = require('request');
fs = require('fs');
var people = 12;
var os = require('os');;
var OSType = '';
var lockFile = '';

router.post("/", function(req, res, next) {
    //console.log("Up load called");
    console.log(req.body.data);

    /**
 * Check OS
 */

try {
  OSType = os.type();
}catch(err) {
  console.error(err)
}

switch(OSType) {
  case 'Linux':
    lockFile = '/tmp/wolf_data.lock';
    break;
  case 'Darwin':
    lockFile = '/tmp/wolf_data.lock';
    break;
  case 'Windows_NT':
    lockFile = 'C:\\tmep\\wolf_data.lock';
    break;
  default:
    lockFile = '../wolf_data.lock';
} 
    /**
    * Check if data file is locked.
    */
 try {
  if (fs.existsSync(lockFile)) {
    console.log(lockFile + ' exists!');
    res.send("Data file is uploading by other users, please try later.");
  }else{
    fs.writeFile(lockFile, '', function (err) {
      if (err) throw err;
      console.log('Data file locked');
    });

    fs.appendFile('./data.txt',req.body.data + "\n", function (err) {
    if (err) return console.log(err);
    });
    res.send(req.body.data);
    if (fs.existsSync(lockFile)) {
      fs.unlinkSync(lockFile);
    }
  }

} catch(err) {
  console.error(err)
}
});

module.exports = router;
