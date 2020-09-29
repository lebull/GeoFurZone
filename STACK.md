Frontend: React


DB: DynamoDB


Environment

Dev:
    DynamoDB: localhost:8000
        `docker run -p 8000:8000 amazon/dynamodb-local`
        `docker run --name geofurzone-dynamodb-loc -p 8000:8000 -v dynamodb-local:./dynamodblocal/db amazon/dynamodb-local`
        Add `-d` to detach the process

        https://pradeeploganathan.com/cloud/aws/dynamodb-running-locally-using-docker/
        https://baptiste.bouchereau.pro/tutorial/mock-aws-services-with-localstack/


        Setup:

        `
        aws dynamodb create-table --cli-input-json file://C:\Users\bulld\Projects\GeoFurZone\schema.json --endpoint-url http://localhost:8000
        `
        *Remember ^ is ^ in windows land*