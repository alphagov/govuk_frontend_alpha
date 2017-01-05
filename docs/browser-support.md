# Browser Support

Unless stated otherwise the approach to browser support still follows the GDS principles for [designing for different browsers and devices](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices).

We want to continue providing a functional experience for user of legacy browsers, but in a way that reduces complexity in this codebase.

We're focusing on two areas:

1. Reviewing browser stats from GOV.UK, not just now but also forecasting where they may be when GOV.UK Frontend goes into public beta.

   Over the last year we've seen a pretty dramatic drop in usage of legacy Internet Explorer, by at least half in most cases. Usage for IE 7, 8, 9 and 10 are all at ~.8% of traffic as of November, and IE 6 is less than 0.01%.

   This makes a strong case for moving some, if not all, legacy versions of IE in to the _functional_ category of support.

2. Reevaluating how we apply _functional_ for legacy browsers:

  > If a browser is assigned a ‘functional’ level of support, it means your service might not look perfect in that browser but must still be usable.

  Historically it's meant that a page looks the same, but might not be pixel-perfect.

  As usage stats change, our approach to high-profile but low usage browsers can be more relaxed, eg, potentially serving grid content in a linear/mobile view.


### Dropping JS behaviour for IE6 and IE7

We've chosen to not provide any _behavioural_ JS to the oldest versions if Internet Explorer - though we're still providing the [HTML5 Shim](https://github.com/aFarkas/html5shiv), to ensure HTML 5 tags are style-able.

As GOV.UK practices [progressive enhancement](https://gdstechnology.blog.gov.uk/2016/09/19/why-we-use-progressive-enhancement-to-build-gov-uk/) all content should be usable regardless of JS, which fits the definition of _functional_.

By denying it to legacy IE we can reduce the number of shims/polyfills we need and write more modern JS - reducing complexity in this repo.

At the moment IE6 and 7 make up less than 0.2% of traffic, and dropping. We're watching usage on other versions of IE and consider extending this to them soon.
