$(document).ready(function() {

/*podmd
The function uses the `DataTable` JS module to format a publication table, based
on a JSON return from the Progenetix API. 
end_podmd*/

	var pgmainserver	=		window.location.origin.replace("info.", "");
	var pub_list_url	=		pgmainserver+"/do/api/apidb=progenetix&apiscope=publications&apimethod=publicationdata&filters=";

/* getting the id parameter from the URL the page is called with */

	$.urlParam = function (name) {
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.search);
		return (results !== null) ? results[1] || 0 : false;
	};

	var url_filter	=		$.urlParam('filters');
	var filters		=		new Array();

	if (publication_filters.length > 2) {
		filters.push(publication_filters);
	}
	if (url_filter.length > 2) {
		filters.push(url_filter);
	}
	if (filters.length > 0) {
		pub_list_url += filters.join(",");
	}

    $('#progenetix-publication-table').DataTable( {
		ajax: pub_list_url,
		sAjaxDataProp: "",
		pageResize: true,
		pageLength: 50,
		scrollY: 600,
		columns: [
			{
				data: "id",
				className: "dt-center",
				width: "36px",
				render: function ( data, type, meta ) {
					return '<a href="/publication-details.html?scope=datacollections&id='+data+'"><img src="/assets/img/icn_publications.png" /></a>';
				}
			},
			{
				data: "citelabel",
				render: function ( data, type, full, meta ) {
					var prefixSplit = full.id.split(':');
					return data+'<br/>'+full.journal+' ('+prefixSplit.slice(-1)[0]+') <a href="http://www.europepmc.org/abstract/MED/'+prefixSplit.slice(-1)[0]+'" target="_BLANK">&nbsp;</a>';
				}
			},
			{ data: "counts.ccgh", className: "dt-center", width: "20px"  },
			{ data: "counts.acgh", className: "dt-center", width: "20px" },
			{ data: "counts.wes", className: "dt-center", width: "20px" },
			{ data: "counts.wgs", className: "dt-center", width: "20px" },
			{ data: "authors", visible: false, searchable: true },
			{ data: "title", visible: false, searchable: true },
			{ data: "sortid", visible: false, searchable: true },
		],
		order: [[ 8, "desc" ]]
	} );

	if (url_filter.length > 2) {
		$('#filter-note').html( 'The publications were prefiltered for "'+decodeURIComponent(url_filter)+'".' );
	}


} );
