/* eslint-env mocha */
const app = require('../../server.js')
const server = app.listen()
const request = require('supertest').agent(server)
const path = require('path')
const fs = require('fs')
const assert = require('assert')

// Check that assets are copied and the app runs
describe('Copy assets to public and run the app...', function () {
  after(function (done) {
    server.close()
    done()
    console.log('Stopping server...')
  })

  describe('the preview task', function () {
    it('should copy assets into the /public folder', function () {
      assert.doesNotThrow(function () {
        fs.accessSync(path.resolve(__dirname, '../../public/javascripts/elements.js'))
        fs.accessSync(path.resolve(__dirname, '../../public/javascripts/govuk-template.js'))
        fs.accessSync(path.resolve(__dirname, '../../public/javascripts/toolkit.js'))
        fs.accessSync(path.resolve(__dirname, '../../public/images/crests/bis_crest_13px.png'))
        fs.accessSync(path.resolve(__dirname, '../../public/images/template/apple-touch-icon-120x120.png'))
        fs.accessSync(path.resolve(__dirname, '../../public/images/toolkit/accordion-arrow-2x.png'))
        fs.accessSync(path.resolve(__dirname, '../../public/stylesheets/govuk-template-print.css'))
        fs.accessSync(path.resolve(__dirname, '../../public/stylesheets/main.css'))
      })
    })
  })

  describe('the index page', function () {
    it('should return a 200 on a get to "/"', function (done) {
      request
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            done(err)
          } else {
            done()
          }
        })
    })
  })
})
