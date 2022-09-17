const aws = require('aws-sdk');
const ddb = new aws.DynamoDB({ apiVersion: '2012-10-08' });

/**
 * @author Vladimir Budilov
 * 
 * Upon Cognito SignUp, a user is added to the DDB table
 *
 * Cognito event:
 * https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-lambda-trigger-examples.html#aws-lambda-triggers-post-confirmation-example
 *
 * Writing to DDB:
 * https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write.html
 *
 * Sample input:
 *
 {
    version:'1',
    region:'eu-west-2',
    userPoolId:'eu-west-2_9xasdfasdf3A',
    userName:'budilov@domain.com',
    callerContext:{
       awsSdkVersion:'aws-sdk-unknown-unknown',
       clientId:'1asdfasdfasdfasdf3hjjgp'
    },
    triggerSource:'PostConfirmation_ConfirmSignUp',
    request:{
       userAttributes:{
          sub:'4asdfasfa-944f-4444-9444-e644444444b',
          'cognito:user_status':'CONFIRMED',
          email_verified:'true',
          email:'budilov@domain.com'
       }
    },
    response:{
    }
 }
 * @param event
 * @param context
 */
exports.handler = async (event, context) => {
    console.log(event);

    const date = new Date();

    const tableName = process.env.TABLE_NAME;
    const region = process.env.REGION;

    console.log(`table=${tableName} -- region=${region}`)

    aws.config.update({ region });

    if (!event.request.userAttributes.sub) {
        // Nothing to do, the user's email ID is unknown
        console.log("Error: Nothing was written to DDB or SQS");
        return context.done(null, event);
    }

    // -- Write data to DDB
    // If the required parameters are present, proceed
    const ddbParams = {
        TableName: tableName,
        Item: {
            'userId': { S: event.request.userAttributes.sub },
            'sortKey': { S: "user" },
            'email': { S: event.request.userAttributes.email },
            'createdDate': { S: date.toISOString() },
            'firstLogin': { BOOL: true }
        }
    };

    // Call DynamoDB
    try {
        ddbResult = await ddb.putItem(ddbParams).promise();
        console.log("Success");
    } catch (err) {
        console.log("Error", err);
    }

    console.log("Success: Everything executed correctly")
    context.done(null, event);
};
