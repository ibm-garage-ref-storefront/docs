<h1 align="center">
Storefront - Cloud native reference implementation
</h1>

<p align="left">
    <a href="https://github.com/ibm-garage-ref-storefront/docs/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" alt="Released under the Apache-2.0 license" />
    <a href="https://travis-ci.org/github/ibm-garage-ref-storefront/docs"><img src="https://travis-ci.org/ibm-garage-ref-storefront/docs.svg?branch=master" alt="Travis"></a>
  </a>
</p>

## Storefront

### Install dependencies

```
npm install
```

### Local Development

After forking the repository, you can run your changes locally using the following:

```
npm run dev
```

You can access your local changes via [localhost:8000](http://localhost:8000).

### Publish Content

Currently, the content is published to the GitHub pages site through the `gh-pages` branch
using the `gh-pages` npm module. All of the details for handling the publishing are covered within
the deploy script. The deploy can be run using the following:

```
npm run deploy
```

**Note:** There is a time delay between when the deploy process completes and when the
content is available on the published site.
