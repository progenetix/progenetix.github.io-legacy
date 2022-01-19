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

--------------------------------------------------------------------------------

## Genomic Variations (CNV Ontology)

```{image} img/form-structural-variant-type-selector.png
:alt: Variant type selector
:width: 201px
:float: right
:margin-top: -15px
```
The Progenetix repository contains predominantly copy number variants. While we
had limited CNV type annotations to the "minimum information content" - i.e. using
`DUP` and `DEL` categories for indicating relative genomic copy number gains or losses,
respectively, from 2022 Progenetix will move to a richer CNV classification in line
with "common use practices". As part of the [ELIXIR h-CNV community](http://cnvar.org) and contributors
to the GA4GH [Beacon project](http://genomebeacons.org) and [Variant Representation Specification (VRS)](http://vrs.org)
we have co-developed a "CNV assessment ontology" which in January 2022 has been
accepted into the [Experimental Factor Ontology (EFO)](https://www.ebi.ac.uk/ols/ontologies/efo)
and is under discussion at [Sequence Ontology (SO)](https://github.com/The-Sequence-Ontology/SO-Ontologies/issues/568)
and for use in VRS.

In January 2022 we switched the internal representation of CNV states to EFO codes
and implemented the respective search functionality in the `bycon` package. Future
data updates will gradually add the more granular classes such as `EFO:0030073`
where they apply.

```
id: EFO:0030063
label: copy number assessment
  |
  |-id: EFO:0030064
  | label: regional base ploidy
  |   |
  |   |-id: EFO:0030065
  |     label: copy-neutral loss of heterozygosity
  |
  |-id: EFO:0030066
    label: relative copy number variation
      |
      |-id: EFO:0030067
      | label: copy number loss
      |   |
      |   |-id: EFO:0030068
      |   | label: low-level copy number loss
      |   |
      |   |-id: EFO:0030069
      |     label: complete genomic deletion
      |
      |-id: EFO:0030070
        label: copy number gain
          |
          |-id: EFO:0030071
          | label: low-level copy number gain
          |
          |-id: EFO:0030072
             label: high-level copy number gain
             note: commonly but not consistently used for >=5 copies on a bi-allelic genome region
              |
              |-id: EFO:0030073
                 label: focal genome amplification
                 note: >-
                   commonly used for localized multi-copy genome amplification events where the
                   region does not extend >3Mb (varying 1-5Mb) and may exist in a large number of
                   copies
```