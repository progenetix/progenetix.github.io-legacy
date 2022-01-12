# Classifications and Ontologies

The Progenetix resource utilizes standardized diagnostic coding systems, with a
move towards hierarchical ontologies. As part of the coding process we have
developed and provide several code mapping resources through repositories, the
Progenetix website and APIs.

## Diagnoses, Phenotypes and Histologies

### NCIt coding of tumor samples

* based on [NCIt neoplasm core](https://evs.nci.nih.gov/ftp1/NCI_Thesaurus/Neoplasm/About_Core.html)
but now extended based on the whole "neoplasia" subtree of the NCI Thesaurus (`NCIT:C3262` and child terms)
* first implementation of NCIt concepts mapping in January 2017, then for a subset of arrayMap samples
* now providing ICD-O 3 <=> NCIt mappings through the [ICDOntoologies](https://github.com/progenetix/ICDOntologies) mapping project with a [front-end an API](https://progenetix.org/service-collection/ontologymaps/) on the website

#### Current NCIt sample codes

* [progenetix.org/services/collations?filters=NCIT&output=text](https://progenetix.org/services/collations?filters=NCIT&output=text)

### ICD coding of tumor samples

The Progenetix resource primarily used the coding schemas of the _International Classification of Diseases in Oncology__ (3rd edition; "ICD-O 3"), to classify all biosamples for which experimental data is available. Users can get a list of ICD-O 3 codes in the Progenetix format [through Progenetix collations](http://info.progenetix.org/doc/services/collations.html).

The mappings used here for the ICD morphology codings (mapped to ICDMORPHOLOGY and ICDMORPHOLOGYCODE) are derived from the original source file last accessed on 2016-08-18 from [the WHO](https://www.who.int/standards/classifications/other-classifications/international-classification-of-diseases-for-oncology). The primary codes have been updated from the 2011 update document [ICDO3Updates2011.pdf](http://www.who.int/classifications/icd/updates/ICDO3Updates2011.pdf).

#### Current ICD-O sample codes

* ICD-O Morphologies
  - [progenetix.org/services/collations?filters=icdom&output=text](https://progenetix.org/services/collations/?filters=icdom&output=text)
* ICD-O Topographies
  - [progenetix.org/services/collations/?filters=icdot&method=ids&output=text](https://progenetix.org/services/collations/?filters=icdot&method=ids&output=text)

### UBERON codes

The organ sites of the original coding have been mapped to UBERON. The mappings
are detailed in the related [icdot2uberon](https://github.com/progenetix/icdot2uberon) project.

#### Current UBERON sample codes

* <https://progenetix.org/services/collations?filters=UBERON&method=counts&output=text>
