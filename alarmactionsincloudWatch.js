// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region with appropriate region name
AWS.config.update({region: 'us-east-1'});
var apiVersion = {apiVersion: '2010-08-01'};
var cw = new AWS.CloudWatch(apiVersion);

function putResource(){
var params = {
  AlarmName: 'Web_Server_CPU_Utilization',
  ComparisonOperator: 'GreaterThanThreshold',
  EvaluationPeriods: 1,
  MetricName: 'CPUUtilization',
  Namespace: 'AWS/EC2',
  Period: 60,
  Statistic: 'Average',
  Threshold: 70.0,
  ActionsEnabled:true,
  //replace with appropriate ARN
  AlarmActions: ['ACTION_ARN'],
  AlarmDescription: 'Alarm when server CPU exceeds 70%',
  Dimensions: [
    {
      Name: 'InstanceId',
      Value: 'INSTANCE_ID'
    },
  ],
  Unit: 'Seconds'
};

cw.putMetricAlarm(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
    var paramsEnableAlarmAction = {
      AlarmNames: [paramsUpdateAlarm.AlarmName]
    };
    cw.enableAlarmActions(paramsEnableAlarmAction, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Alarm action enabled", data);
      }
    });
    describeAlarmDetails();
  }
});
}

function describeAlarmDetails(){
  cw.describeAlarms({StateValue: 'INSUFFICIENT_DATA'}, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      // List the names of all current alarms in the console
      data.MetricAlarms.forEach(function (item, index, array) {
         console.log('AlarmName as passed in putResource fn',item.AlarmName);
      });
    }
  });
}

putResource();
