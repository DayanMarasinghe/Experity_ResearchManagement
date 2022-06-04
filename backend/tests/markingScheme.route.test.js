const supertest = require('supertest')
const app = require('../server')
const mongoose = require('mongoose')
const markingScheme = require('../routes/markingscheme.router');

test('Get viva marking', async() => {

    const viva = await keyNote.create({
        Attributes: "Attribute 01",
        marks: "100",
    });

    await supertest(app).get('/markings/viva');
    expect(200).then((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toEqual(1);
        expect(res.body[0].Attributes).toBe(post.Attributes);
        expect(res.body[0].Attributes).toBe(post.Attributes);
    })
})

test('Get document marking', async () => {

    const document = await keyNote.create({
        Attributes: "Attribute 01",
        marks: "100",
    });

    await supertest(app).get('/markings/document');
    expect(200).then((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toEqual(1);
        expect(res.body[0].Attributes).toBe(post.Attributes);
        expect(res.body[0].Attributes).toBe(post.Attributes);
    })
})