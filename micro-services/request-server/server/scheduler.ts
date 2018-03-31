import cron from 'cron';

class Scheduler {

    private CronJob: any;
  
    constructor() {
      this.CronJob = cron;
    }
     public start() {
        this.CronJob.job('* * * * * *', function() {
            console.log('You will see this message every second');
        }, null, true, 'America/Los_Angeles');
      } 
};

export = Scheduler;