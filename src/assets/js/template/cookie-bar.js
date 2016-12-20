;(function () {
  'use strict'
  var root = this
  if (typeof root.GOVUK === 'undefined') { root.GOVUK = {} }

  root.GOVUK.addCookieMessage = function () {
    var message = document.getElementById('global-cookie-message')
    var hasCookieMessage = (message && root.GOVUK.cookie('seen_cookie_message') === null)

    if (hasCookieMessage) {
      message.style.display = 'block'
      root.GOVUK.cookie('seen_cookie_message', 'yes', { days: 28 })
    }
  }
}).call(this)
