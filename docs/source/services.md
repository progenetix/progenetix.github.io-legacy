# Progenetix Services

The _bycon_ environment provides a number of data services which make use of
resources in the _Progenetix_ environment.

## Formats

### `services.py` and URL Mapping

The service URL format `progenetix.org/services/__service-name__/?parameter=value`
is a shorthand for `progenetix.org/cgi-bin/bycon/services/__service-name__.py?parameter=value`.

### Response formats

Standard responses are provided as `Content-Type: application/json`. The wrapper
format for JSON encoded data follows the standard Beacon response
format where the main data is usually contained in the `response.results` list.

## Services

### Cancer Genomics Publications (`publications`)

The `publications` service serves as backend API for the display of genome
screening publications through the Progenetix [Publications DB](https://progenetix.org/publications/).

It provides articles describing whole genome screening (WGS, WES, aCGH, cCGH) experiments in cancer, including some information about e.g. the numbers of samples analysed with a given technology and if sample profiles are available in Progenetix.

Please contact us to alert us about additional articles you are aware of. The inclusion criteria are described in the [documentation](/publication-collection).

Since 2021 you can now directly submit suggestions for matching publications to the [oncopubs repository on Github](https://github.com/progenetix/oncopubs).

### Cytoband Mapping (`cytomapper`)

...

### Gene Coordinates (`genespans`)

* genomic mappings of gene coordinats
* initially limited to _GRCh38_ and overall CDS extension
* responds to (start-anchored) text input of HUGO gene symbols using the `geneSymbol`
parameter or path value
* returns a list of matching gene objects (see below under __Response Formats__)
* the `filterPrecision=exact` query parameter restricts the response to a single
exact gene symbol match

#### Examples

* <https://progenetix.org/services/genespans/?geneSymbol=TP53&filterPrecision=exact>
* <https://progenetix.org/services/genespans/CDKN2>


### Public and Local Identifiers

The `ids` service forwards compatible, prefixed ids (see [`config/ids.yaml`](https://github.com/progenetix/bycon/blob/master/services/config/ids.yaml)) to specific
website endpoints. There is no check if the id exists; this is left to the web
page handling itself.

* <https://progenetix.org/services/ids/pgxbs-kftva5zv>
* <https://progenetix.org/services/ids/PMID:28966033>
* <https://progenetix.org/services/ids/NCIT:C3262>
* <https://progenetix.org/services/ids/cellosaurus:CVCL_0022>

The `pgx` prefix has been registered with [identifiers.org](http://identifiers.org)
and the service can also be used to access identifiers at Progenetix.

* <https://identifiers.org/pgx:pgxbs-kftva5zv>



### Ontology Code Mapping

