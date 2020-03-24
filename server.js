const Koa = require('koa');
const { google } = require('googleapis');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const cors = require('@koa/cors');
const cron = require("node-cron")
const koaRouter = require('koa-router')
require('dotenv').config()
const Events = require('./models/events');


const schema = require('./graphql/schema');
const router = new koaRouter()
const initDB = require('./database');

initDB();

const app = new Koa();

app.listen(process.env.PORT || 9000);

app.use(cors());

//This will run at the start of every minute //every day at 2:30 am
cron.schedule("* * * * *", () => {
 
  console.log('Daily Cronjob')
  
  const cal = google.calendar({
    version: 'v3',
    auth: 'AIzaSyDAmlXTlp-67fQf2_2-dXQUjbpUSkYoVkk'
  });

  var date = new Date();
  date.setDate(0); // 0 will result in the last day of the previous month
  date.setDate(1); // 1 will result in the first day of the month


  // Make the query
  cal.events.list({
    calendarId: 'b7hf35rcp8rf86rhleloi3c9cc@group.calendar.google.com',
    singleEvents: true,
    orderBy: 'startTime',

  }).then((res) => {
    const events = res.data.items;
    
    if (events.length) {
      console.log(events.length)
      events.map((event, i) => {
        
        Events.find({ name: event.summary }).then((matchEvent) => {
          
          if (matchEvent.length > 0) {
            console.log('This event is already saved.')
          } else {
            console.log('Guardo')
            console.log(event.summary)
            let ev = event.description.split(',')
            let speaker = ev[1].split(':')[1].trim();
            let description = ev[2].split(':')[1].trim();
            let image = ev[3].split(':')[1].trim();
            console.log(image)
            console.log(ev)
            const newEvent = new Events({
              name: event.summary,
              startDate: event.start.dateTime,
              endDate: event.end.dateTime,
              description: description,
              speaker: speaker,
              image: image
            })
            
            return newEvent.save();
          }
        })
       
      });
      
  };
  }).catch((e) => {
    console.error(e);
  });
})

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(1234, () => console.log('running on port 1234'))

app.on('error', err => {
  log.error('server error', err)
});


