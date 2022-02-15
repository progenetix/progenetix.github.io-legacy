---
title:  "User File Uploads"
layout: default
excerpt_link: https://progenetix.org/data-visualization-upload
permalink: /uploader.html
category:
  - pages
tags:
  - .stale
---

## {{ page.title }}

**The new version of this page is in the new 2020 website, online at
at <https://progenetix.org/data-visualization-upload>!**

<div id="newpage"></div>

<script type="text/javascript">
  var pgmainserver  =   window.location.origin.replace("info.", "");
  var plotlink = pgmainserver + "/data-visualization/?accessid=";
  var newpage = pgmainserver + "/data-visualization-upload";

  $(document).ready(function(ev) {
      $("#upload-form").on('submit', (function(ev) {
          ev.preventDefault();
          $.ajax({
              url: '/cgi-bin/pgx_uploader.cgi',
              type: 'POST',
              data: new FormData(this),
              contentType: false,
              dataType: 'json',
              cache: false,
              processData: false,
              success: function (data) {
                var filename = data.file.split('/').pop();
                $('#upload-response').toggle( true );
                $('#upload-response').append('<tr><td><a href="' + data.file + '" target="_BLANK">' + filename + '</a> [<a href="' + plotlink + data.accessid + '" target="_BLANK">plot segments</a>]</td><td>' + data.sample_count + '</td><td>' + data.seg_count + '</td></tr>');
              },
              error: function(xhr, status, error) {
                  // ...
              }
         });
      }));
      $('#newpage').append('<p>NEW: This page has been replaced in the <a href="'+newpage+'" target="_BLANK">new Progenetix website</a>.</p>');
  });
</script>


<form enctype="multipart/form-data" id="upload-form">
<div class="formrow">
	<div class="four pull-left">
		<div class="label">
			Segment File
		</div>
	</div>
	<div class="eight pull-right">
		<div class="formfield">
		<input type="file" class="twelve" name="upload_file_name" id="upload_file_name" />
		</div>
	</div>
</div>
<div class="rowspacer"> </div>
<div class="formrow">
	<div class="four pull-left">
		&nbsp;
	</div>
	<div class="eight pull-right">
		<div class="formfield button primary" id="upload-button">
      <input type="submit" value="Upload" />
	  </div>
	</div>
  <input type="hidden" name="upload_file_type" value="segments" />
</div>  
</form>


<div class="rowspacer"> </div>

#### Uploaded Files

<table id="upload-response">
	<thead>
	<tr><th>File</th><th>Samples</th><th>Variants</th> </tr>
	</thead>
	<tbody>
	</tbody>
</table>


#### Example File

* [multi-sample segment file](/assets/examples/multi-sample-segments-unfiltered.tsv)
    - unfiltered

#### File format

Data has to be submitted as tab-delimited segment files. The table below is an excerpt of such a file which. While the header values are not being interpreted, the column order has to be followed:

1. `sample`
    - please use only word characters, underscores, dashes
    - the `sample` value is used for splitting multi-sample files into their individual profiles
2. `chro`
    - the reference chromosome
    - 1-22, X, Y (23 => X; 24 => Y)
3. `start`
    - base positions according to the used reference genome
4. `end`
    - as above
5. `mean`
    - the value of the segment
    - 0-centered
    - segments not passing the calling thresholds (fallback `0.15`, `-0.15` are being filtered out)
    - one can use dummy values (e.g. `1` for gains, `-1` for losses)
6. `probes`
    - the number of array probes, call bins in the segment
    - fallback filter removes
    - optional (no filter on empty values)

<div class="formrow">&nbsp;</div>

| sample | chro | start | end | mean | probes |
| ----- | :-----: | :-----: | :-----: | :-----: | :-----: |
| GSM276857 | 1 | 911484 | 70249410 | 0.0649 | 1031 |
| GSM276857 | 1 | 70342585 | 70482327 | 1.0774 | 5 |
| GSM276857 | 1 | 70483105 | 227040336 | -0.0163 | 3231 |
| GSM276857 | 1 | 227056783 | 227155097 | -0.6500 | 9 |
| GSM276857 | 1 | 227212352 | 248655165 | 0.0438 | 386 |
| GSM276857 | 10 | 223755 | 2351737 | 0.0901 | 33 |
| GSM276857 | 10 | 2400053 | 2403369 | -0.7802 | 5 |
| GSM276857 | 12 | 114256 | 71562233 | 0.0036 | 1468 |
| GSM276857 | 12 | 71641830 | 132924025 | -0.0040 | 1211 |
| GSM276857 | 17 | 601219 | 82630699 | 0.0690 | 968 |
| GSM276857 | 18 | 159885 | 80087573 | -0.0175 | 1835 |
| GSM276857 | 19 | 390341 | 58234565 | 0.1674 | 363 |
| GSM276857 | 20 | 167044 | 64240906 | 0.0340 | 1100 |
| GSM276857 | 21 | 18842097 | 46680243 | -0.0098 | 822 |
| GSM276857 | 22 | 15438402 | 50242600 | 0.1506 | 326 |
| GSM276857 | 23 | 1698590 | 155616443 | -0.1495 | 1203 |
| GSM276856 | 1 | 911484 | 70342585 | -0.0820 | 1032 |
| GSM276856 | 1 | 70648419 | 248015727 | -0.1102 | 3619 |
| GSM276856 | 2 | 110819 | 240942225 | -0.1204 | 5271 |
| GSM276856 | 3 | 119131 | 73981757 | -0.1176 | 1675 |
