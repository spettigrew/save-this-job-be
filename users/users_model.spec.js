const db = require('../database/db-config');
const userModel = require('./users-model');

beforeEach(async () => {
    await db.seed.run()
})

describe('userModel', () => {
    test('find', async () => {
        const res = await userModel.list()
        expect(res.length).toBeGreaterThan(0)
        expect(res.firstName[0]).toBe('Rose')
        expect(res.email[0]).toBe('rose@gmail.com')
    })
})