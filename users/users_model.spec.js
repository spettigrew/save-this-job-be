const db = require('../database/db-config');
const userModel = require('./users-model');

beforeEach(async () => {
    await db.seed.run()
})

describe('userModel', () => {
    test('find', async () => {
        const res = await userModel.find()
        expect(res.length).toBe(3)
        expect(res[0].email).toBe('don@email.com')
    })
})