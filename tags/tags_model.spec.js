const db = require('../database/db-config');
const tagsModel = require('./tags_model');

beforeEach(async () => {
    await db.seed.run()
})

describe('tags model', () => {
    test('findTags', async () => {
        const res = await tagsModel.findTags()
        expect(res.length).toBe(3)
        expect(res[0].tagName).toBe('remote')
    })
    test('addTag', async () => {
        const res = await tagsModel.addTag({
                tagName: 'great reviews'
            });
        expect(res.length).toBe(1);
        console.log(res)
    })
    test('removeTag', async () => {
        const res = await tagsModel.removeTag('great reviews');
        expect(res).toBe(0)
    })
    test('updateTag', async () => {
        const res = await tagsModel.updateTag(2, {tagName: 'part-time'});
        console.log(res)
        // expect(res[0].firstName).toBe('Don');
        // expect(res[0].email).toBe('don@email.com')
    })
})