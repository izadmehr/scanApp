/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiAiAPIGraphQLAPIIdOutput = process.env.API_AIAPI_GRAPHQLAPIIDOUTPUT
var apiAiAPIGraphQLAPIEndpointOutput = process.env.API_AIAPI_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
