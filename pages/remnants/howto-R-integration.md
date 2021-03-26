---
title: "R Integration"
date: 2018-05-10
permalink: /doc/R-integration.html
layout: default
author: Michael Baudis
excerpt_separator: <!--more-->
category:
  - howto
tags:
  - code
  - R
  - API
---

## {{ page.title }}

<!--   Please edit the title above.                                 -->
<!--   Please edit the author above.                                -->
<!--   Please edit the category above if not "news".                -->
<!--   You may replace the `{{ page.title }}` above with your text. -->

<!--  CONTENT  -->

### Progenetix API and R

With the ability to access the status matrix directly, one easily can import the data into an R data frame:

<!--more-->

```
pgframe <- read.table(url("http://progenetix.org/api/?icdm_m=814&db=progenetix&api_out=matrix"), header=T, sep="\t", na="NA")
```

For the segment file, the same applies with "output=segments":

```
segtable <- read.table(url("http://progenetix.org/api/?icdm_m=9701/3&db=progenetix&api_out=segments"), header=T, sep="\t", na="NA")
```

For the construction of the queries, please refer to the query parameters in additional API documentation.

#### R Example - survival

One can use this example to search for MYCN gain related survival bias in an ICD entity (here "9500/3" - change according to your interest, though survival data is comparatively sparse ...). 


```
rm(list = ls())
library(survival)
icdm <- "9500/3"
gene <- "MYCN"
db <- "arraymap"
link <-  paste("http://progenetix.org/api/?api_out=samples&icdm_m=", icdm, "&genes_m=", gene, "$", sep="")
survData <- read.table(url(link), header=T, sep="\t", na="NA")
nrow(survData)
geneColumn <- paste('GENE_', gene, sep="")
genePos	<- grep(geneColumn, colnames(survData), perl="T")
plot(survfit(Surv(survData$FOLLOWUP, survData$DEATH) ~ 1, se.fit=TRUE), main=paste("Overall survival"), xlab="months", ylab="survival", cex=1.2)  
gainNo <- nrow(subset(survData, survData[genePos] == 1))   
plot(survfit(Surv(survData$FOLLOWUP, survData$DEATH) ~ survData[genePos] == 1, se.fit=TRUE), col=c("black","blue"), main=paste("Survival and gene ", gene, " (ICD-O ", icdm, ")", sep=""), xlab="months", ylab="survival", cex=1.2)  
sdf <- survdiff(Surv(survData$FOLLOWUP, survData$DEATH) ~ survData[genePos] == 1) 
pcsq <- round(pchisq(sdf$chisq, df=1, lower=FALSE), digits=5)
legend("bottomright", c("no gain", paste(gene, ' gain (', gainNo, '/', nrow(survData), ')', sep="")), fill=c("black","blue"), inset=c(0.02,0.02), bg="azure1", cex=0.8)  
legend("bottomleft", c(paste("p:", pcsq)), inset=c(0.02,0.02), bty="n", cex=1)
```
