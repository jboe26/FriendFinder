var friends = [
  {

    "name": "Lebron James",
    "photo": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.wsj.net%2Fim-117035%3Fwidth%3D620%26size%3D1.5&imgrefurl=https%3A%2F%2Fwww.wsj.com%2Farticles%2Flebron-james-speaks-carefully-then-he-discussed-the-nbas-crisis-in-china-11571153560&docid=JVnUjeP-bxx8NM&tbnid=UtzmrNDosnXX7M%3A&vet=10ahUKEwjv5JuGp5_lAhVGTd8KHYLcAX0QMwh6KAAwAA..i&w=620&h=413&itg=1&bih=744&biw=767&q=lebron%20james&ved=0ahUKEwjv5JuGp5_lAhVGTd8KHYLcAX0QMwh6KAAwAA&iact=mrc&uact=8",
    "scores": [5, 4, 2, 3, 3, 1, 1, 2, 3, 3],

  },
  {

    "name": "Taylor Swift",
    "photo": "taylorswift.gif",
    "scores": [5, 2, 2, 3, 3, 2, 2, 2, 2, 3],

  },

  {

    "name": "Donald Trump",
    "photo": "donaldtrump.gif",
    "scores": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]

  }
]




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
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
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

});
