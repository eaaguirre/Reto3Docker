const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return Hello Edinson Aguirre message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Hello Edinson Aguirre');
  });
});
