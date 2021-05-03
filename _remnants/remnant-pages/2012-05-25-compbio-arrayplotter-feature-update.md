---
title: 'arrayPlotter feature update'
date: 2012-05-25
layout: default
category:
  - news
tags: 
  - recovered
  - news
  - guide
  - arraymap
---

## arrayPlotter feature update

The arrayPlotter module underwent some enhancements:

* BUG FIX: array segments without probe number (e.g. from GP annotated data) are not removed anymore when re-plotting 
* NEW: Baseline correction; This is useful for re-plotting arrays which have a shift of the "normal" probe value away from 0;. This correction is automatically applied to the thresholds, too (i.e. a BLC of 0.5 with GTH 0.15 and LTH -0.15 will call original values of -0.4 as gain and -0.6 as loss).  
* NEW: More parameters are now shifted towards the "PLOT FACTORS" field, for free text editing. Be careful, though ...

Enjoy!

