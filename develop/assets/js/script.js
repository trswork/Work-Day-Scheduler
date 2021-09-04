 // Top date, works
 moment(Date);
 $("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

 var currentTime = moment();
 currentTime = currentTime.startOf("hour");