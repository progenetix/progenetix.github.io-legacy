$(document).ready(function() {
	var server		=		window.location.origin.replace("info.", "");
	$('#nav_r').html('<a href="'+server+'/publications/list"><a href="'+server+'/subsets/list/filters=icdom&amp;datasetIds=progenetix"><img class="icn" style="float: right; margin-bottom: 5px;" src="/assets/img/icnICDM.png" title="genomic copy number data in cancer - ICD-O 3 morphologies" /></a><a href="'+server+'/publications/list"><a href="'+server+'/subsets/list/?filters=NCIT&amp;datasetIds=progenetix"><img class="icn" style="float: right; margin-bottom: 5px;" src="/assets/img/icnNCIt.png" title="NCIt metathesaurus cancer codes" /></a>');

});
