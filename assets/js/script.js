// Event listener for clicking the save button and storing user input into local storage

  var saveButton = $('.saveBtn');
    saveButton.on('click', function() {
      var userInput = $(this).siblings(".description").val();
      var currentHour = $(this).parent().attr("id");
      localStorage.setItem(currentHour,userInput);
    });
    
    // applying jquery $(this) method to manipulate time-block colors according 
    // to past, present, or future tasks
    
    function time() {
      var currentTime = dayjs().format('HH');

    var hourBlock = $('.time-block');
      hourBlock.each(function() {
        var hourBlock = $(this).attr("id").split("-")[1];

        if (currentTime == hourBlock) {
          $(this).addClass("present");
          $(this).removeClass("past");
          $(this).removeClass("future")
        }
        else if (currentTime > hourBlock) {
          $(this).removeClass("present");
          $(this).removeClass("future")
          $(this).addClass("past");
        }
        else if (currentTime < hourBlock) {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    
    }
  
  time();

  // dayjs()hour() reads as 24 hour clock so 1PM = 13th hour
  
  // takes the value of whatever is int he description box and 
  // saves that into local storage 

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // formats and displays the month, day, and year

var currentDate = dayjs();
$('#currentDay').text(currentDate.format('MMMM D, YYYY'))
