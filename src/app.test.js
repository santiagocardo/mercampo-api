'use strict'

const supertest = require('supertest')

const app = require('./app')

describe('GET /', () => {
  it('should respond with a 404 message', async () => {
    const response = await supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(404)

    expect(response.body).toEqual({
      statusCode: 404,
      error: 'Not Found',
      message: 'Not Found'
    })
  })
})
