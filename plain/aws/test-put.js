
var myconfig =   require("../config/config.js");

var AWS = require('aws-sdk');
var fs  = require('fs');
var path  = require('path');

// set up aws region:
AWS.config.region = myconfig.region;

var root_bucket = myconfig.root_bucket;

function put_file(file, cwd){
    var s3key = path.join(cwd, file.name);

    var s3 = new AWS.S3();

    var params = {
        Bucket: root_bucket,
        Key: s3key,
        Body: fs.createReadStream(file.path)
    };

    s3.putObject(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
}


function test_put_file(){
    var file = {name:'test-from-server-b.mp3', path:'/tmp/tofile.mp3'};
    var cwd  = 'tmpa/test-b/bb/tmp/q/abc/';

    put_file(file, cwd);
}


if (require.main === module){
    test_put_file();
}

