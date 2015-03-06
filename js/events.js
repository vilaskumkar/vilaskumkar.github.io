function autocomplet() {
  var min_length = 0;
  var keyword = $('#Name').val();
  if (keyword.length >= min_length) {
    $.ajax({
      url: "search.php",
      type: "POST",
      data: {
        keyword: keyword
      },
      success: function(data) {
        $('#Name_list_id').show();
        $('#Name_list_id').html(data);
      }
    });
  } else {
    $('#Name_list_id').hide();
  }
}

function set_item(item) {
  $('#Name').val(item);
  $('#Name_list_id').hide();
}