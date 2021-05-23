const AWS = require("aws-sdk");
// AWs Credentials
// AWS.config.loadFromPath('../../config.json');

const awsController = ((req, res) => {
    // let cloudwatch = new AWS.CloudWatch();
    // let params = {
    //     DashboardName: 'STRING_VALUE' /* required */
    // };
    // cloudwatch.getDashboard(params, function(err, data) {
    //     if (err) console.log(err, err.stack); // an error occurred
    //     else     console.log(data);           // successful response
    // });
    res.status(200).send('AWS resource details');
});

module.exports = awsController;