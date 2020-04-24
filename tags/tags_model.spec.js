const db = require('../database/db-config');
const tagsModel = require('./tags_model');

beforeAll(async () => {
    await db.seed.run()
})

describe('tags model', () => {
    test('findTags', async () => {
        const res = await tagsModel.findTags()
        expect(res.length).toBe(3)
        expect(res[0].tagName).toBe('remote')
    })
    test('findTagById', async () => {
        const res = await tagsModel.findTagById(2);
        expect(res.tagName).toBe('part time');
    })
    test('addTag', async () => {
        const res = await tagsModel.addTag({
                tagName: 'great reviews'
            });
        expect(res.length).toBe(1);
    })
    test('removeTag', async () => {
        const res = await tagsModel.removeTag('great reviews');
        expect(res).toBe(0)
    })
    test('updateTag', async () => {
        const res = await tagsModel.updateTag(2, {tagName: 'part-time'});
        expect(res.tagName).toBe('part-time');
    })
})