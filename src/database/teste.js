const database = require('./db');
const createProffy = require('./createProffy');

database.then(async (db) => {

    proffyValue = { 
        name:"Anderson ferreira ",
        avatar:"https://avatars2.githubusercontent.com/u/59872272?s=460&u=5fdbb3ba02da05492516574de62afaa2e33cd162&v=4",
        whatsapp: 123456789,
        bio: "Teste",   
    };

    classValue = {
        subject: 1,
        cost: "1000",
    }

    classScheduleValue = [
        {
            weekday: 1,
            time_from:720,
            time_to:1220
        },
        {
            weekday: 0,
            time_from:520,
            time_to:1220
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValue})
/* 
    const selectProffys = await db.all("SELECT * FROM proffys");
    //console.log(selectProffys);

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `);
    //console.log(selectClassesAndProffys);


    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300";
    `);

    //console.log(selectClassesSchedules); */
});