import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create the table in the DB
    const table = new sst.Table(this, "Counter", {
      fields: {
        visitor: sst.TableFieldType.STRING,
      },
      primaryIndex: { partitionKey: "visitor" }
    });

    // Create a HTTP API
    const api = new sst.Api(this, "Api", {
      routes: {
        "GET /": "src/lambda.handler",
        "GET /visit": "src/lambda.handler",
      },
      defaultFunctionProps: {
        environment: {
          tableName: table.dynamodbTable.tableName,
        }
      }
    });
    api.attachPermissions([table])

    // Show the endpoint in the output
    this.addOutputs({
      "ApiEndpoint": api.url,
    });
  }
}
