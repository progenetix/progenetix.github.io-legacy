$(document).ready(function() {

	var server		=		window.location.origin; /* .replace("info.", ""); */
	var subsethisto_url		=		server+"/cgi-bin/pgx_subsethistogram.cgi?datasetIds=progenetix";
//	var dataset_ids			=		[ 'progenetix', 'arraymap' ];

/* getting parameters from the URL the page is called with */

	$.urlParam = function (name) {
			var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.search);
			return (results !== null) ? results[1] || 0 : false;
	};

	var width	=	$("section").width();
	var query = subsethisto_url+"&id="+$.urlParam('id')+"&scope="+$.urlParam('scope')+"&-size_plotimage_w_px="+width;

	$("#histosvg").load(query);

});
