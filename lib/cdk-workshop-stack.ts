import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// EC2に関するパッケージをimport
import * as ec2 from "aws-cdk-lib/aws-ec2";

export class CdkWorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // vpcを宣言
    const vpc = new ec2.Vpc(this, "BlogVpc", {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
    })

    // EC2インスタンスの宣言を準備
    const webServer1 = new ec2.Instance(this, "WordpressServer1", {
      // EC2インスタンスを起動するVPCを設定
      vpc,
      // t3.smallインスタンスタイプを設定
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.SMALL),
      // AmazonLinuxImageインスタンスを生成し、AMIを設定
      machineImage: new ec2.AmazonLinuxImage({
        generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2
      }),
    });
  }
}
