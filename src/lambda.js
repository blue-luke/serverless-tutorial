import AWS from "aws-sdk";
const dynamoDb = new AWS.DynamoDB.DocumentClient()

// Visit function
export async function handler(event) {
  // get visitor name
  const name = event.queryStringParameters.name;

  // get current count
  const results = await dynamoDb.get({
    TableName: process.env.tableName,
    Key: { visitor: name },
  }).promise();

  let count = results.Item ? results.Item.tally : 0;
  count++;

  // Set new count
  await dynamoDb.update({
    TableName: process.env.tableName,
    Key: { visitor: name },
    UpdateExpression: "SET tally = :count",
    ExpressionAttributeValues: {
      ":count": count
    }
  }).promise();

  return {
    statuscode: 200,
    body: `Hey, ${name}, you have visited ${count} times.`,
  }

}
