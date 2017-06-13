/* Created by Aquariuslt on 6-13-17.*/
var spawn = require('child_process').spawn;
var execSync = require('child_process').execSync;

var run = function run(cmd, done) {

  var errorStream = [];

  //kick off process
  var child = spawn(cmd);

  //spit stdout to screen
  child.stdout.on('data', function (data) {
    process.stdout.write(data.toString());
  });

  //spit stderr to screen
  child.stderr.on('data', function (data) {
    errorStream.push(data.toString());
    process.stdout.write(data.toString());
  });

  child.on('close', function () {
    if(done){
      done(errorStream);
    }
  });
};


module.exports.run = run;
