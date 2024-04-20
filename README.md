# Welcome to your CDK TypeScript project

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`CdkWorkshopStack`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## プロジェクトの構造

```
cdk-workshop/
├── bin/
│   └── cdk-workshop.ts
├── lib/
│   └── cdk-workshop-stack.ts
├── node_modules/
├── test/
│   └── cdk-workshop.test.ts
├── .git/
├── cdk.json
├── jest.config.js
├── package.json
├── README.md
├── tsconfig.json
├── .gitignore
└── .npmignore
```
https://catalog.workshops.aws/typescript-and-cdk-for-beginner/ja-JP/40-cdk-introduction/10-create-project/20-structure
