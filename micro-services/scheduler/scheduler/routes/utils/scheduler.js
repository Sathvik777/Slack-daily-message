var cron = require('cron');

var cronJob = cron.job("0 * * * * *", function(){
    // perform operation e.g. GET request http.get() etc.
    console.info('cron job completed');
}); 
cronJob.start();

module.exports = cronJob;