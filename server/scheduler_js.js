var cron = require('cron');

var job = function () {
    var cronJob = new CronJob('* * * * * *', function() {
        console.log('You will see this message every second');
      }, null, true, 'America/Los_Angeles');

    this.getStatus = function () {
        console.log(cronJob.getStatus);
        
        return cronJob.running;
    };
}

module.exports = job;