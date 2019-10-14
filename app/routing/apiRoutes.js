module.exports = app2 => {
    
    // If all required fields are filled
if (validateForm(app2)) {
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
    }

     // AJAX post the data to the friends API.
     $.post("/api/friends",  userData, friendsArray, function (data) {
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
  
}
    // var friendsArray = {
    //   name:   "Josh",
    //   photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    //   scores: [
    //     5,
    //     1,
    //     4,
    //     4,
    //     5,
    //     1,
    //     2,
    //     5,
    //     4,
    //     1
    //   ],
    //   name:   "Denise",
    //   photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    //   scores: [
    //     4,
    //     2,
    //     5,
    //     4,
    //     4,
    //     2,
    //     3,
    //     4,
    //     3,
    //     1
    //   ],
    //   name:   "Mirko",
    //   photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    //   scores: [
    //     5,
    //     4,
    //     5,
    //     4,
    //     5,
    //     4,
    //     5,
    //     4,
    //     5,
    //     4
    //   ],
    //   name:   "Emily",
    //   photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    //   scores: [
    //     3,
    //     5,
    //     3,
    //     5,
    //     3,
    //     4,
    //     3,
    //     1,
    //     3,
    //     2
    //   ],
    //   name:   "Jarkko",
    //   photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    //   scores: [
    //     4,
    //     2,
    //     5,
    //     4,
    //     5,
    //     5,
    //     5,
    //     4,
    //     3,
    //     1
    //   ]
    // };


   
