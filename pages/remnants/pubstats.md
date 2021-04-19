---
title:  "Progenetix publication statistics in R"
layout: default
category:
  - documentation
tags:
  - code
  - R
  - API
  - .stale
---

## Generating a publication statistics plot using the Progenetix API

This example R script will pull the annotated cancer genome publication data from the [Progenetix](http://progenetix.org) repository and produce an overview plot (sample numbers, techniques, time).

Please modify according to your needs.

```R
library(ggplot2)
library(reshape2)
library(scales)
library(RCurl)
plotpath <- "./figures"
dir.create(plotpath, showWarnings = TRUE)

data <- getURL("http://progenetix.org/qmongo/?db=progenetix&collection=publications_web&all=multvalues&afqfield=PMID&querytext=.&exportk_m=PMID,YEAR,NO_CCGH,NO_ACGH,NO_WES,NO_WGS", followlocation=1L)

pubs <- read.csv(text=data, header=T, sep="\t",na="NA")
pubs <- subset(pubs, pubs$YEAR != "NA")
pubs <- subset(pubs, pubs$YEAR != "NA")

allpubs <- melt(pubs, id.vars=c("YEAR","PMID"), measure.vars=c("NO_CCGH", "NO_ACGH", "NO_WES", "NO_WGS"))
allpubs <- subset(allpubs, allpubs$value > 0)
allpubs <- allpubs[order(allpubs$YEAR,xtfrm(allpubs$PMID)),]
colnames(allpubs) <- c("Year", "PMID","Technique", "Samplenumber")
allpubs$Year <- factor(allpubs$Year,levels = unique(allpubs$Year))
allpubs$PMID <- as.numeric(as.character(allpubs$PMID))

a <- sapply(levels(allpubs$Year),function(x) length(which(allpubs$Year==x)))
newYear <- do.call(c, lapply(1:length(a),function(x) (as.numeric(names(a)[x]) + seq(0,1,length.out=a[x]+1))[-1]))
allpubs$Year <- newYear
allpubs <- allpubs[,-which(colnames(allpubs) %in% "PMID")]
allpubs$Technique <- gsub("NO_", "", allpubs$Technique)
title <- paste("", sep="")
set.seed(1)
allpubs$Samplenumber <- runif(nrow(allpubs),0,1) + allpubs$Samplenumber

allpubsdummy <- allpubs
allpubsdummy$Samplenumber <- NaN

pdf(file=paste(plotpath, "samplenumbersPubs.pdf", sep="/"), width=8, height=5)
ggplot() + scale_y_continuous(trans=log2_trans()) + geom_point(data=allpubs, aes(x=Year, y=Samplenumber, colour=Technique, size=Samplenumber), position=position_jitter(w=0, h=0), alpha=I(0.4), show.legend=FALSE) + geom_point(data=allpubsdummy, aes(x=Year, y=Samplenumber, colour=Technique), alpha=1, na.rm=TRUE) + theme(legend.position = c(0.08, 0.82)) + labs(title="")  + scale_x_continuous(breaks=c(1995,2000,2005,2010,2015)) + labs(x="\nYear of Publication", y="Cancer Samples in Publication (log scale)\n")
dev.off()
```
