$(document).ready(function(){
  

var config = {
  ".chosen-select": {},
  ".chosen-select-deselect": {
    allow_single_deselect: true
  },
  ".chosen-select-no-single": {
    disable_search_threshold: 10
  },
  ".chosen-select-no-results": {
    no_results_text: "Oops, nothing found!"
  },
  ".chosen-select-width": {
    width: "95%"
  }
};
for (var selector in config) {
  $(selector).chosen(config[selector]);
}
// Capture the form inputs
$("#submit").on("click", function (event) {
  event.preventDefault();
  // Form validation
  function validateForm() {
    var isValid = true;
    $(".form-control").each(function () {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    $(".chosen-select").each(function () {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }
  
})

});