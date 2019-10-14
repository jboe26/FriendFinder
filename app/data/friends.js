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
  // If all required fields are filled
  if (validateForm()) {
    // Create an object for the user"s data
    var userData = {
      name:   "Josh",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ],
      name:   "Denise",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [
        4,
        2,
        5,
        4,
        4,
        2,
        3,
        4,
        3,
        1
      ],
      name:   "Mirko",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [
        5,
        4,
        5,
        4,
        5,
        4,
        5,
        4,
        5,
        4
      ],
      name:   "Emily",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [
        3,
        5,
        3,
        5,
        3,
        4,
        3,
        1,
        3,
        2
      ],
      name:   "Jarkko",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [
        4,
        2,
        5,
        4,
        5,
        5,
        5,
        4,
        3,
        1
      ]
    };


    // AJAX post the data to the friends API.
    $.post("/api/friends", userData, function (data) {
      // Grab the result from the AJAX post so that the best match's name and photo are displayed.
      $("#match-name").text(data.name);
      $("#match-img").attr("src", data.photo);
      // Show the modal with the match found
      $("#results-modal").modal("toggle");
    });
  } else {
    alert("Please fill out all fields before submitting!");
  }
  return false;
});

})