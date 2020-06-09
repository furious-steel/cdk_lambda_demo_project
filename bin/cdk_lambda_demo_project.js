#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { CdkLambdaDemoProjectStack } = require('../lib/cdk_lambda_demo_project-stack');

const app = new cdk.App();
new CdkLambdaDemoProjectStack(app, 'CdkLambdaDemoProjectStack', {region: "us-west-1"});
