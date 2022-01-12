# Beacon - Discovery Services for Genomic Data

<p><img align="right" style="float: right; max-width: 25px; margin-bottom: -40px;" src="http://info.progenetix.org/assets/img/logo_beacon.png" />The Beacon protocol defines an open standard for genomics data discovery,
developed by members of the Global Alliance for Genomics & Health. Since 2016,
the Beacon protocols is being developed through the
<a href="https://beacon-project.io">ELIXIR Beacon project</a> as a GA4GH driver project.</p>

As part of the project, since early 2016 the [Computational Cytogenetics and Oncogenomics Group](http://info.baudisgroup.org) at the University of Zurich develops the
[Beacon<sup><span style="color: #d00;">+</span></sup> demonstrator](https://beacon.progenetix.org/ui/),
to demonstrate current functionality and future Beacon protocol extensions.

The Beacon<sup><span style="color: #d00;">+</span></sup> implementation is a
custom front end on top of the [Progenetix](https://progenetix.org)
dataset, with emphasis on structural genome variations from cancer samples.

On 2020-01-20,  Beacon<sup><span style="color: #d00;">+</span></sup> became part
of the [ELIXIR Beacon Network](https://beacon-network.elixir-europe.org).

## BeaconPlus Data / Query Model

The Progenetix / Beaconplus query model utilises the [GA4GH core data model](https://schemablocks.org/standards/ga4gh-data-model.html) for genomic and (biomedical, procedural) queries and data delivery.

The GA4GH data model for genomics recommends the use of a principle object hierarchy, consisting of

* `variant` (a.k.a. _genomicVariation_)
    - a single molecular observation, e.g. a genomic variant observed in the analysis of the DNA from a biosample
    - mostly corresponding to the "allele" concept, but with alternate use similar to that in VCF (e.g. CNV are no typical "allelic variants")
    - in Progenetix identical variants from different sampleas are identified through
    a compact digest (`variantInternalId`) and can be used to retrieve those distinct
    variants (c.f. "line in VCF")
* `callset`
    - the entirety of all variants, observed in a single experiment on a single sample
    - a _callset_ can be compared to a data column in a __VCF__ variant annotation file
    - _callset_ has an optional position in the object hierarchy, since _variants_ describe biological observations in a biosample
* `biosample`
    - a reference to a physical biological specimen on which analyses are performed
* `individual`
    - in a typical use a human subject from which the biosample(s) was/were extracted

In the Progenetix backend we mirror the GA4GH data model in the storage system, consisting of the corresponding

* variants
* callsets (analyses)
* biosamples
* individuals

