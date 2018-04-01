var cron = require('cron');

var cronJob = cron.job("0 * * * * *", function(){
    // TODO : Add DB Query
    console.info('cron job completed');
}); 
cronJob.start();

module.exports = cronJob;