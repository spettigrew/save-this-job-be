const db = require('../database/db-config');
const jobModel = require('./job_posts_model');

beforeEach(async () => {
    await db.seed.run()
})

describe('jobModel', () => {
    test('find', async () => {
        
    })
})