  //var credentials = new AWS.SharedIniFileCredentials({profile: 'adminprofile'});
  //AWS.config.credentials = credentials;
  var AWS = require('aws-sdk');
  // Set the region
  var credentials = new AWS.SharedIniFileCredentials({profile: 'adminprofile'});
  AWS.config.credentials = credentials;
  AWS.config.update({region: 'us-east-1'});

  // Create CloudWatch service object
  var cw = new AWS.CloudWatch({apiVersion: '2010-08-01'});

  cw.describeAlarms({StateValue: 'INSUFFICIENT_DATA'}, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      // List the names of all current alarms in the console
      data.MetricAlarms.forEach(function (item, index, array) {
         console.log(item.AlarmName);
      });
    }
  });
