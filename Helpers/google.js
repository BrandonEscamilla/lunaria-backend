const { google } = require('googleapis');

const cal = google.calendar({
    version: 'v3',
    auth: 'AIzaSyDAmlXTlp-67fQf2_2-dXQUjbpUSkYoVkk'
});

// Set the calendar to query
const calendar = 'Lunaria Planetario';

// Set beginning of query to 3 pm tomorrow
const tomorrow3pm = new Date();
tomorrow.setDate(day.getDate() + 1);
tomorrow.setHours(15, 0, 0);

// Set end of query to 4 pm tomorrow
const tomorrow4pm = new Date();
tomorrow.setDate(day.getDate() + 1);
tomorrow.setHours(16, 0, 0);

// Make the query
cal.freebusy.query({
    resource: {
        // Set times to ISO strings as such
        timeMin: new Date(tomorrow3pm).toISOString(), 
        timeMax: new Date(tomorrow4pm).toISOString(),
        timeZone: 'NZ',
        items: [{ id: calendar }]
    }
}).then((result) => {
    const busy = result.data.calendars[calendar].busy;
    const errors = result.data.calendars[calendar].errors;
    if (undefined !== errors) {
        console.error('Check this this calendar has public free busy visibility');
    } else if (busy.length !== 0) {
        console.log('Busy');
    } else {
        console.log('Free');
    }
}).catch((e) => {
    console.error(e);
});