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
format where the main data is contained in the `response` object.

## Services

### Cytoband Mapping

### Ontology Code Mapping

### Cancer Genomics Publications
