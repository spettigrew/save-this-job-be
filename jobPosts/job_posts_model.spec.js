const db = require('../database/db-config');
const jobModel = require('./job_posts_model');

beforeEach(async () => {
    await db.seed.run()
})

describe('jobModel', () => {
    test('findJob', async () => {
        const res = await jobModel.findJob();
        expect(res.length).toBe(3);
        expect(res[0].companyTitle).toBe('Amazon');
        expect(res[2].description).toBe('Stalk people');
    })
    test('addJob', async () => {
        const res = await jobModel.addJob({
            jobTitle: 'Junior Dev',
            urlText: 'www.google.com',
            companyUrl: 'www.google.com',
            companyTitle: 'Google'
        }, 1);
        expect(res.length).toBe(1);
    })
    test('findJobById', async () => {
        const res = await jobModel.findJobById(2);
        expect(res.jobTitle).toBe('Node Master');
        expect(res.companyTitle).toBe('Google');
        expect(res.location).toBe('Ann Arbor');
    })
    test('findJobByUser', async () => {
        const res = await jobModel.findJobByUser(1);
        expect(res[0].jobTitle).toBe('Junior Dev');
        expect(res[0].companyTitle).toBe('Amazon');
        expect(res[0].location).toBe('Seattle');
    })
    test('updateJob', async () => {
        const res = await jobModel.updateJob(4, {
            rating: 1
        })
        console.log(res)
        // const updatedJob = await jobModel.findJobById(4);
        // expect(updatedJob.rating).toBe(1);
    })
    test('removeJob', async () => {
        const res = await jobModel.removeJob(4);
        expect(res).toBe(0);
    })
})