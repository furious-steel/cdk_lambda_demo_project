const cdk = require('@aws-cdk/core');
const lambda = require('@aws-cdk/aws-lambda');
const sns = require('@aws-cdk/aws-sns');
const SnsEventSource = require('@aws-cdk/aws-lambda-event-sources').SnsEventSource;

class CdkLambdaDemoProjectStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const fn = new lambda.Function(this, "DemoLambdaFunction", {
      functionName: "DemoLambdaFunction",
      memorySize:256,
      runtime: lambda.Runtime.NODEJS_10_X, 
      code: lambda.Code.asset("demo_lambda_function"),
      handler: "index.handler",
      environment: {
        TC_API: "https://app.qa.connect.trimble.com"
      }
    });

    const topic = sns.Topic.fromTopicArn(this, "topic", "arn:aws:sns:us-west-1:805451413154:INT_NA_DEMO_TOPIC");
    fn.addEventSource(new SnsEventSource(topic));
  }
}

module.exports = { CdkLambdaDemoProjectStack }
