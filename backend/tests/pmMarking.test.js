const request = require('supertest')
const app = require('../server')

test('Get marking scheme', async() => {

    const presentation = await keyNote.create({
        Attributes: "Attribute 01",
        marks: "100",
    });

    await supertest(app).get('/markingScheme');
    expect(200).then((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toEqual(1);
        expect(res.body[0].Attributes).toBe(post.Attributes);
        expect(res.body[0].Attributes).toBe(post.Attributes);
    })
})

test('Get topics', async() => {

    const topics = await keyNote.create({
        Attributes: "Attribute 01",
        marks: "100",
    });

    await supertest(app).get(`/requests/${"60db5a0b6df4d921f41bd946"}`);
    expect(200).then((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toEqual(1);
        expect(res.body[0].Attributes).toBe(post.Attributes);
        expect(res.body[0].Attributes).toBe(post.Attributes);
    })
})

test('Get groups', async() => {

    const presentation = await keyNote.create({
        Attributes: "Attribute 01",
        marks: "100",
    });

    await supertest(app).get(`/group/${"60db5a0b6df4d921f41bd946"}`);
    expect(200).then((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toEqual(1);
        expect(res.body[0].Attributes).toBe(post.Attributes);
        expect(res.body[0].Attributes).toBe(post.Attributes);
    })
})