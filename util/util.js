const path = require('path');
const supertest = require('supertest');
let request = '';

exports.request = request;
exports.get = async function(path, url, token) {
    // token = token || global.token;
    request = () => supertest(path)
    return await request()
      .get(url)
    //   .set('Authorization', `Bearer ${token}`)
      .send()
  }
  
  exports.getWithParams = async function(path, url, query, token) {
    // token = token || global.token;
    request = () => supertest(path)
     const req = await request()
      .get(url)
      // .set('Authorization', `Bearer ${token}`)
      .query(query)
      .send()
      return req;
  }
  exports.post = async function(path, url, payload, token) {
    // token = token || global.token;
    request = () => supertest(path)
    return await request()
      .post(url)
      // .set('Authorization', `Bearer ${token}`)
      .send(payload)
  }
  
  exports.patch = async function(path, url, payload, token) {
    // token = token || global.token;
    request = () => supertest(path)
    return await request()
      .patch(url)
      .set('Authorization', `Bearer ${token}`)
      .send(payload)
  }
  
  exports.put = async function(path, url, payload, token) {
    // token = token || global.token;
    request = () => supertest(path)
    return await request()
      .put(url)
      // .set('Authorization', `Bearer ${token}`)
      .send(payload)
  }

  exports.delete = async function(path, url, token) {
    // token = token || global.token;
    request = () => supertest(path)
    return await request()
      .delete(url)
      // .set('Authorization', `Bearer ${token}`)
      .send()
  }