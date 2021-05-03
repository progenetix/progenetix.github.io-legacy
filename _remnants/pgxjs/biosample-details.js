$(document).ready(function() {

/*podmd
The script will 

* extract an _id_ parameter from the URL the parent page is called with
* use this as a filter in queries against the _biosamples_ collection and
the subset histogram generation script 
* populate the biosample details elements on the calling page and add the (if 
existing) "arrayplot" callset representation(s) 

end_podmd*/

	var server = window.location.origin;
	if ( server.match(/\.test/g) ) {
		server.replace(".org", ".test")
	}
	ds_id = (urlParam('datasetIds').split(","))[0]
	var api_url = server + "/cgi-bin/bycon/bin/byconplus.py?scope=biosamples&id="+urlParam('id')+"&datasetIds="+ds_id	
	var width = $("section").width();

/*podmd
For accessing the Progenetix API, here a list construct is used in both server
and client although only one entry will be returned.

__TODO__: error catch & display

end_podmd*/

	$.getJSON( api_url, function( data ) {
	
		if (data.biosamples[ds_id].length > 1) {
			$('#message').html("More than one sample has been found.");
			return;
		}

		if (data.biosamples[ds_id].length < 1) {
			$('#message').html("No sample has been found.");
			return;
		}

		$.each(data.biosamples[ds_id], function(index, value) {

			var prefixSplit = value.id.split(':');

			$('#message').empty();
			
			$('#sampledetails-id').html( "<h2>"+value.id+' ('+ds_id+') <a href="'+api_url+'"> {&nearr;}</a></h2>' );
			$('#sampledetails-description').html( "<h4>Description</h4><p>"+value.description+"</p>" );
			$('#sampledetails-biocharacteristics').html( "<h4>Biocharacteristics</h4><ul>" );
			for (i = 0; i < value.biocharacteristics.length; ++i) {
  			$('#sampledetails-biocharacteristics').append( "<li>"+value.biocharacteristics[i].type.id+": "+value.biocharacteristics[i].type.label+"</li>");
			}

			$('#sampledetails-biocharacteristics').append( "</ul>" );

			$('#sampledetails-clinical').html( "<h4>Clinical Data</h4><ul>" );
			if (/\d/.test(value.age_at_collection.age)) {
  			$('#sampledetails-clinical').append( "<li>Age at Collection: "+value.age_at_collection.age+"</li>") }
			$('#sampledetails-clinical').append( "</ul>" );

			$('#sampledetails-provenance').html( "<h4>Provenance</h4>" );
			if (/\w/.test(value.provenance.material.type.label)) {
  			$('#sampledetails-provenance').append( "<li>Material: "+value.provenance.material.type.id+" ("+value.provenance.material.type.label+")</li>") }
			if (/\w/.test(value.provenance.geo.city)) {
  			$('#sampledetails-provenance').append( "<li>City: "+value.provenance.geo.city+", "+value.provenance.geo.country+"</li>") }
			
/*podmd

end_podmd*/

		});
	}, 'json');

});


/* getting the id parameter from the URL the page is called with */

function urlParam(name) {
	var results   = new RegExp('[\?&]' + name + '=([^ &#]*)').exec(window.location.search);
	return (results !== null) ? results[1] || 0 : "";
};

