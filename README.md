# Getting Started with Serverless Stack (SST)

This project was bootstrapped with [Create Serverless Stack].

It is a simple project designed to expose API endpoints using serversless stack (SST - (https://docs.serverless-stack.com/packages/create-serverless-stack)) technology.

Start by installing the dependencies.

```bash
$ npm install
```

## Blockers

When returning to the codebase a day later, despite having made no changes, the site cannot be reached. Renaming the table then rebuilding everything worked once, but stoppped working when I ran npx sst start ie the Live lambda Dev environment.

## How to use

To see the server in action, visit https://u1681lwyw2.execute-api.us-east-1.amazonaws.com/visit?name=[yourname] , having replaced [yourname] with your name. Try and use as unique a name as possible. Upon refreshing/revisiting, the tally for your name will increase by one.

To run the code yourself, you'll need to connect SST to your AWS account, run npx sst start, then visit your own API endpoint with a query string.

## SST comments

### `npm run start`

Starts the local Lambda development environment.

### `npm run build`

Build your app and synthesize your stacks.

Generates a `.build/` directory with the compiled files and a `.build/cdk.out/` directory with the synthesized CloudFormation stacks.

### `npm run deploy [stack]`

Deploy all your stacks to AWS. Or optionally deploy, a specific stack.

### `npm run remove [stack]`

Remove all your stacks and all of their resources from AWS. Or optionally removes, a specific stack.

### `npm run test`

Runs your tests using Jest. Takes all the [Jest CLI options](https://jestjs.io/docs/en/cli).

## Documentation

Learn more about the Serverless Stack.
- [Docs](https://docs.serverless-stack.com)
- [@serverless-stack/cli](https://docs.serverless-stack.com/packages/cli)
- [@serverless-stack/resources](https://docs.serverless-stack.com/packages/resources)

## Community

[Follow us on Twitter](https://twitter.com/ServerlessStack) or [post on our forums](https://discourse.serverless-stack.com).
