import AWS from "aws-sdk";
const dynamoDb = new AWS.DynamoDB.DocumentClient()

export async function handler(event) {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `My serverless app is now running in dev mode. CHANGE MADE! Request received at ${event.requestContext.time}.`,
  };
}
