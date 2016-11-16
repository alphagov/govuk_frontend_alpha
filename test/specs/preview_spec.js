/* eslint-env mocha */
const request = require('supertest')
const app = require('../../server.js')
const path = require('path')
const fs = require('fs')
const assert = require('assert')

// Check that assets are copied and the app runs
describe('Copy assets to public and run the app...', function () {
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
        fs.accessSync(path.resolve(__dirname, '../../public/stylesheets/govuk-frontend.css'))
      })
    })
  })

  describe('the index page', function () {
    it('should return a 200 on a get to "/"', function (done) {
      request(app)
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
