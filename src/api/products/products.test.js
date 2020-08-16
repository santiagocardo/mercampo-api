'use strict'

const supertest = require('supertest')

const app = require('../../app')

describe('GET /api/v1/products', () => {
  it('should respond with an array of products', async () => {
    const response = await supertest(app)
      .get('/api/v1/products')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(response.body).toBeInstanceOf(Array)
  })

  it('should respond with an individual product', async () => {
    const response = await supertest(app)
      .get('/api/v1/products/5f380967ad6a083a3b23c7ee')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(response.body._id).toBe('5f380967ad6a083a3b23c7ee')
  })

  it('should respond with an array of products that matches with the word: avocado', async () => {
    const response = await supertest(app)
      .get('/api/v1/products/search?name=avocado')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(response.body).toBeInstanceOf(Array)
  })

  it('should respond with a 400 for a not valid product id', async () => {
    await supertest(app)
      .get('/api/v1/products/sdfghfh')
      .expect('Content-Type', /json/)
      .expect(400)
  })
})