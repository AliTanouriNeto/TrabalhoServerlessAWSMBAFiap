const AWS = require('aws-sdk')
const { Client } = require('pg');
const lambda = new AWS.Lambda()

const inserlambdaDetails = async (retorno,retorno2) => {
    try {

client = new Client({
    host: 'database-5.ccxsj7wlu5bg.us-east-2.rds.amazonaws.com',
    user: 'postgres',
    database: 'postgres',
    password: 'alipop500',
    port: 5432,
    ssl: false
})
        console.log('Iniciando save');
        console.log(retorno);
        await client.connect();
        await client.query(
            `INSERT INTO "lambda" ("totalcodesize","functioncount")  
             VALUES ($1, $2)`, [retorno,retorno2]);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();               
    }
};

// Handler
exports.handler = async function (event, context) {
    try {
        let accountSettings = await getAccountSettings()
	  let serializeSettings = JSON.parse(serialize(accountSettings.AccountUsage));
        console.log(serializeSettings)
	  inserlambdaDetails(serializeSettings.TotalCodeSize,serializeSettings.FunctionCount).then(result => {
    	  if (result) {
        	console.log('User inserted');
    	  }
    	  });
        return formatResponse(serialize(accountSettings.AccountUsage))
    } catch (error) {
        return formatError(error)
    }
}

const formatResponse = function (body) {
    const response = {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "isBase64Encoded": false,
        "body": body
    }
    return response
}

const formatError = function(error){
    const response = {
        "statusCode": error.statusCode,
        "headers": {
            "Content-Type": "text/plain",
            "x-amzn-ErrorType": error.code
        },
        "isBase64Encoded": false,
        "body": error.code + ": " + error.message
    }
    return response
}

const getAccountSettings = function () {
    return lambda.getAccountSettings().promise()
}

const serialize = function (object) {
    return JSON.stringify(object, null, 2)
}
