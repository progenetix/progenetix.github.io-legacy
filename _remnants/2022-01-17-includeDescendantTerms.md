---
title: "Term-specific Queries"
layout: default
author: '@mbaudis'
excerpt_separator: <!--more-->
www_links_formatted:
www_link: https://progenetix.org/biosamples/
categories:
  - news
tags:
  - Progenetix
  - news
  - Beacon
  - website
---

## {{ page.title }}

![includeDescendantTerms selector](/assets/img/2022-01-17-includeDescendantTerms-ui.png){: style="float: right; width: 222px; margin-top: -15px;"}]So far (and still as standard), any
selected filter will also include matches on its child terms; i.e. "NCIT:C3052 -
Digestive System Neoplasm" will include results from gastric, esophagus, colon
... cancer. Here we introduce a selector for the search panel to make use of the Beacon v2
filters `includeDescendantTerms` pragma, which can be set to _false_ if one only
wants to query for the term itself and exclude any child terms from the matching.

<!--more-->

Please be aware that this can only be applied globally and will affect all filtering
terms used in a query.