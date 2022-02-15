$(document).ready(function() {

/*podmd
The script will 

* extract an _id_ parameter from the URL the parent page is called with
* use this as a filter in queries against the _publications_ collection and
the subset histogram generation script 
* populate the publication details elements on the calling page and add the
histograms for the (if existing) representation of the publication in the
different databases 

end_podmd*/

	var pgmainserver		= window.location.origin.replace("info.", "");
	var pub_details_url		= "/do/api/apidb=progenetix&apiscope=publications&apimethod=publicationdetails";
	var subsethisto_url		= "/cgi-bin/pgx_subsethistogram.cgi?";
	var technologies		= [ 'ccgh', 'acgh', 'wes', 'wgs' ];
	var query = pub_details_url+urlParam('id')+urlParam('filters');
	var width	= $("section").width();

/*podmd
For accessing the Progenetix API, here a list construct is used in both server
and client although only one entry will be returned.

__TODO__: error catch & display

end_podmd*/

	$.getJSON( query, function( data ) {

		$.each(data, function(index, value) {

			var prefixSplit = value.id.split(':');

			$('#message').empty();
			$('#pubdetails-title').append( value.title );
			$('#pubdetails-authors').html( value.authors );
			$('#pubdetails-journal').html( "<i>" + value.journal + "</i> " + value.id + '&nbsp;<a href="http://www.europepmc.org/abstract/MED/'+prefixSplit[1]+'" target="_BLANK">&nbsp;</a>' );
			$('#pubdetails-abstract').text( value.abstract );
			$('#pubdetails-geo').html( "<h5>Origin</h5><p>" + value.provenance.geo.label + "</p>" );

			$('#pubdetails-counts').html( "<h5>Genome Screens</h5><ul>" );
			for (i = 0; i < technologies.length; ++i) {
  			$('#pubdetails-counts').append( listItem(technologies[i], value.counts) );
			}

			if (value.info.progenetix_biosamples_count > 0) {
				$('#pubdetails-counts').append( "<li>" + value.info.progenetix_biosamples_count + ' sample profiles are <a href="'+pgmainserver+'/cgi-bin/pgx_biosamples.cgi?datasetIds=progenetix&filters='+urlParamValue('id')+'">registered in Progenetix</a></li>' );
			}

			if (value.info.arraymap_biosamples_count > 0) {
				$('#pubdetails-counts').append( "<li>" + value.info.arraymap_biosamples_count + ' sample profiles are <a href="'+pgmainserver+'/cgi-bin/pgx_biosamples.cgi?datasetIds=arraymap&filters='+urlParamValue('id')+'">registered in arrayMap</a></li>' );
			}

			$('#pubdetails-counts').append( "</ul>" );
/*podmd
Depending on sample counts ("progenetix_biosamples_count" ...) greater than 0,
histogram plots are requested for the pre-calculated CNV frequencies and added
to the respective div element.  

end_podmd*/

			if (value.info.progenetix_biosamples_count > 0) {			
				var query = subsethisto_url+"datasetIds=progenetix"+urlParam('id')+urlParam('filters')+urlParam('scope')+"&-size_plotimage_w_px="+width;
				$("#progenetix_histosvg").load(query);
			}
			if (value.info.arraymap_biosamples_count > 0) {			
				var histoquery = subsethisto_url+"datasetIds=arraymap"+urlParam('id')+urlParam('filters')+urlParam('scope')+"&-size_plotimage_w_px="+width;
				$("#arraymap_histosvg").load(histoquery);
			}

		});
	}, 'json');
});

/* getting the id parameter from the URL the page is called with */

function urlParam(name) {
	var results   = new RegExp('[\?&]' + name + '=([^ &#]*)').exec(window.location.search);
	return (results !== null) ? "&" + name + "=" + results[1] || 0 : "";
};

function urlParamValue(name) {
	var results   = new RegExp('[\?&]' + name + '=([^ &#]*)').exec(window.location.search);
	return (results !== null) ? results[1] || 0 : "";
};

function listItem(tech, counts) {
	if (counts[tech] > 0) {
  	return "<li>" + tech + ": " + counts[tech] + "</li>";
  } else {
  	return "";
  }
}
