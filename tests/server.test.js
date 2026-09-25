const request = require('supertest');
const app = require('../src/server.js');

describe('GET /', () => {
  it('returns 200 and html content', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/html/);
    expect(res.text).toContain('<!DOCTYPE html>');
  });
});
