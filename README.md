GOV.UK Frontend Alpha [![Build Status](https://travis-ci.org/alphagov/govuk_frontend_alpha.svg?branch=master)](https://travis-ci.org/alphagov/govuk_frontend_alpha) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
=====================

---
This is an alpha and not for production use.
---

## What is this?

A single package containing everything needed to start building a GOV.UK service. Once included in your project you’ll get standardised layout, styling and scripts.

## Why do I want to use this?

You’re building a service that will live on GOV.UK. This will give your service consistency with the rest of GOV.UK and give you access to our latest patterns and guidance. It will also make it easy to update your service to match changes to the core site.

## Installation

*This section is lies until we publish the live version*

There are many ways to install GOV.UK Frontend.

If you’re using NPM to manage packages then you can include the latest version directly in your project with the command `npm install govuk_frontend`.

If you are building your project with Ruby then we publish this as a gem. Adding `govuk_frontend` to your Gemfile and running `bundle install` will install the latest version. In the mean time you can [follow these instructions](docs/using-with-rails.md).

We publish a bundle of the code as a zip. This can be downloaded from [the latest release page](https://github.com/alphagov/govuk_elements/releases/latest), and manually copied into the right place for your system.

If you just want some CSS and JavaScript to include then you can link directly to the files from our CDN. You’ll need to manually build your HTML to match our template, then include `<link rel="stylesheet" href="xxx" />` in the head of your page (before any script tags), and `<script src="xxx"></script>` at the bottom of your body. For more information read [using GOV.UK Frontend from the CDN](#).

## Usage

To follow.

## Contributing back

More information about contributing to this project is in our [contribution guidelines](https://github.com/alphagov/govuk_frontend_alpha/blob/master/CONTRIBUTING.md).
