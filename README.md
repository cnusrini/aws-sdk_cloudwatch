
##### aws-sdk:
###### A simple sample in which I have created a node js component to interact with AWS cloud watch classes and api.
###### ref : https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/cloudwatch-examples-creating-alarms.html

###### I found that the documentation had a gap in acomplishing this simple task. I will highlight them here.
1. describe alaram section execution will not result any thing. Neither sucess/failre.
2. Creating an Alarm for a CloudWatch Metric section is that section where the magic happens. After your create the cloudwatch resource, then desribe alaram section will respond with the name of the application.

##### how to test:
* git clone https://github.com/cnusrini/aws-sdk_cloudwatch.git
* cd aws-sdk_cloudwatch
* npm install
* configure your aws profile in AWS.config global object(this sample automatically takes the credentials from the local path. If you dont do it, this app will not work as expected )
awscloucreate

| javaScript | Description |
| ------ | ------ |
| awscloucreate | puts the resource in aws and get the details|
| alarmactionsincloudWatch | enables the Alarm |

| function | Description |
| ------ | ------ |
| putResource | puts the resource in aws |
| describeAlarmDetails | get the details from the above function |

* index.html is underconstruction.
* to test the above functions, execute it via node command
