const  userRoutes = require('../routes/userRoutes')
const request = require('supertest')
const {jest} = require('@jest/globals')
const app = require('../server')


        test("Add staff", async () => {
            const response = await request(app)
            .post("/staff")
            .send({
              name: "Dayan",
              email: "dayanmarasinghe@gmail.com",
              password:"qwerty",
              role:"Supervisor",
              specialisation:"Machine Learning"
            })
            response = res;
             expect(res.statusCode).toBe(201)
          },30000)


          test("Add student", async () => {
            const response = await request(app)
            .post("/student")
            .send({
              name: "Kavindu",
              email: "kavindu@gmail.com",
              password:"qwerty",
              role:"Student",
              itnumber:"IT19980164"
            })
            response = res;
             expect(res.statusCode).toBe(201)
          },30000)

          test("Login", async () => {
            const response = await request(app)
            .post("/login")
            .send({
              email: "dayanmarasinghe@gmail.com",
              password:"qwerty",
            })
            response = res;
             expect(res.statusCode).toBe(201)
          },30000)