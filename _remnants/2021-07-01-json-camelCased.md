---
title: "API: JSON Exports now camelCased"
layout: default
author: '@mbaudis'
excerpt_separator: <!--more-->
# www_links_formatted:
#  - '<a href=""></a>'
categories:
  - news
tags:
  - Progenetix
  - news
  - documentation
  - API
---

## {{ page.title }}

In "forward-looking" conformity with the [Beacon v2](https://beacon-project.io/categories/beaconv2.html)
API, the JSON attributes of the API responses has been changed from `snake_cased`
to `camelCased`. Please adjust your code, where necessary.

<!--more-->

#### Some examples:

* `call_count` &#8594; `callCount`
* `error_message` &#8594; `errorMessage`
* `child_terms` &#8594; `childTerms`
* `variant_type` &#8594; `variantType`
* `results_handovers` &#8594; `resultsHandovers`
