// 

var upload_url	=	'/cgi-bin/pgx_uploader.cgi';

function submitForm() {
		console.log("submit event");
		var fd = new FormData(document.getElementById("upload-form"));
		$.ajax({
			url: upload_url,
			type: "GET",
			data: fd,
			dataType: 'json',
			processData: false,   // tell jQuery not to process the data
			contentType: false,   // tell jQuery not to set contentType
			success: function (data) {
        var filename = data.file.split('/').pop();
        $('#upload-response').toggle( true );
        $('#upload-response').append('<tr><td><a href="' + data.actions.plot_segment_file + '" target="_BLANK">' + filename + '</a></td><td></td><td></td></tr>');
    	}
		});
		return false;
}
	
