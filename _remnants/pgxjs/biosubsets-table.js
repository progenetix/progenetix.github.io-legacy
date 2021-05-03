$(document).ready(function() {

	var server = window.location.origin; /* .replace("info.", ""); */
	var pub_list_url = server+"/cgi-bin/api.cgi?apiscope=publications&apimethod=publicationdata";

/* getting the id parameter from the URL the page is called with */

	$.urlParam = function (name) {
			var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.search);
			return (results !== null) ? results[1] || 0 : false;
	};

	var filter	=		$.urlParam('filters');
	if (filter.length > 2) {
		pub_list_url += "&filters="+filter;
	}

	var apidb	=		$.urlParam('apidb');
	if (filter.length > 2) {
		pub_list_url += "&apidb="+apidb;
	}

  $('#progenetix-publication-table').DataTable( {
		"ajax": pub_list_url,
		"sAjaxDataProp": "",
		"pageLength": 50,
		scrollY: 600,
		"columns": [
			{
				data: "id",
				className: "dt-center",
				width: "36px",
				render: function ( data, type, meta ) {
					return '<a href="/publication-details.html?id='+data+'"><img src="/assets/img/icn_publications.png" /></a>';
				}
			},
			{
				data: "citelabel",
				render: function ( data, type, full, meta ) {
					var prefixSplit = full.id.split(':');
					return data+'<br/>'+full.journal+' ('+prefixSplit[1]+') <a href="http://www.europepmc.org/abstract/MED/'+prefixSplit[1]+'" target="_BLANK">&nbsp;</a>';
				}
			},
			{ data: "counts.ccgh", "className": "dt-center", "width": "25px"  },
			{ data: "counts.acgh", "className": "dt-center", "width": "25px" },
			{ data: "counts.wes", "className": "dt-center", "width": "25px" },
			{ data: "counts.wgs", "className": "dt-center", "width": "25px" },
			{ "data": "authors", "visible": false, "searchable": true },
			{ "data": "title", "visible": false, "searchable": true },
			{ "data": "sortid", "visible": false, "searchable": true },
		],
		"order": [[ 8, "desc" ]]
	} );

	if (filter.length > 2) {
		$('#filter-note').html( 'The publications were prefiltered for "'+decodeURIComponent(filter)+'".' );
	}


} );
