const supertest = require('supertest')
const app = require('../server')
const mongoose = require('mongoose')
const evaluation = require('../routes/evaluation.route');

test('Add evaluation', async () => {
    const result = await(
        await supertest(app).post('/evaluations/')
    ).setEncoding({
        groupid: "grp123",
        evaluationtype: "evaluationtype",
        groupmark: "groupmark",
        groupleaderid: "groupleaderid",
        groupleadermark: "groupleadermark",
        membertwoid: "membertwoid",
        membertwomark: "membertwomark",
        memberthreeid: "memberthreeid",
        memberthreemark: "memberthreemark",
        memberfourid: "memberfourid",
        memberfourmark: "memberfourmark",
        comments: "comments",
    }).expect(result.statusCode).toBe(201)
});

test('Get evaluationa submitted by supervisor', async () => {
    const evaluation = await keyNote.create({
        groupid: "grp123",
        evaluationtype: "viva",
        groupmark: "100",
        groupleaderid: "IT19981856",
        groupleadermark: "889",
        membertwoid: "IT19981856",
        membertwomark: "67",
        memberthreeid: "IT19981856",
        memberthreemark: "90",
        memberfourid: "IT19981856",
        memberfourmark: "45",
        comments: "Good",
    });

    await supertest(app).get('/evaluations/');
    expect(200).then((res) => {
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.length).toEqual(1);
        expect(res.body[0].groupid).toBe(post.groupid);
        expect(res.body[0].evaluationtype).toBe(post.evaluationtype);
        expect(res.body[0].groupleaderid).toBe(post.groupleaderid);
        expect(res.body[0].groupleadermark).toBe(post.groupleadermark);
        expect(res.body[0].membertwoid).toBe(post.membertwoid);
        expect(res.body[0].membertwomark).toBe(post.membertwomark);
        expect(res.body[0].memberthreeid).toBe(post.memberthreeid);
        expect(res.body[0].memberthreemark).toBe(post.memberthreemark);
        expect(res.body[0].memberfourid).toBe(post.memberfourid);
        expect(res.body[0].memberfourmark).toBe(post.memberfourmark);
        expect(res.body[0].comments).toBe(post.comments);
    })
})