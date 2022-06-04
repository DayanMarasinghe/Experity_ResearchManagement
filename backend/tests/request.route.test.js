const supertest = require('supertest')
const app = require('../server')
const mongoose = require('mongoose')
const evaluation = require('../routes/requests.route');

test('Get requests for a supervisor', async () => {
    const evaluation = await keyNote.create({
        groupid: "grp123",
        topic: "Test topic",
        description: "Test description",
        requestedSupervisor: "Saman",
        requestedCosupervisor: "Saman",
        stateSupervisor: "Accepted",
        stateCoSupervisor: "Rejected"
    });

    await supertest(app).get('/requests/${Saman}');
    expect(200).then((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toEqual(1);
        expect(res.body[0].groupid).toBe(post.groupid);
        expect(res.body[0].topic).toBe(post.topic);
        expect(res.body[0].description).toBe(post.description);
        expect(res.body[0].groupleadermark).toBe(post.groupleadermark);
        expect(res.body[0].requestedSupervisor).toBe(post.requestedSupervisor);
        expect(res.body[0].requestedCosupervisor).toBe(post.requestedCosupervisor);
        expect(res.body[0].stateSupervisor).toBe(post.stateSupervisor);
        expect(res.body[0].stateCoSupervisor).toBe(post.stateCoSupervisor);
    })
})