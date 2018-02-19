$(document).ready(function() {
	//inline function (makeGrid) runs on form#sizePicker submit button click
	$('#sizePicker').submit(function makeGrid(evt) {
		//prevent page refresh(form submit causes refresh)
		evt.preventDefault();
		//remove old table, if any
		$('#pixelCanvas').children().remove();
		
		// Select color input
		var colorInput = $('#colorPicker');

		// Select size input
		var tableHeight = $('#inputHeight').val();
		var tableWidth = $('#inputWidth').val();
		
		for (var i = 0; i < tableHeight; i++) {
			//create row object
			var row = document.createElement('tr');
			for ( var j = 0; j < tableWidth; j++) {
				
				//create cell and set attributes
				var cell = document.createElement('td');
				cell.setAttribute("id", i + '-' + j);
				
				//attach columns/cells to row object
				row.append(cell);
			}
			//attach completed row object to table
			$('#pixelCanvas').append(row);
		}
	});
});
