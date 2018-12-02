


// Computer chooses a random number from 19 to 120
$(document).ready(function(){
    var randomNumber = Math.floor(Math.random() * (120-19) + 19);
    console.log(randomNumber);
  
    $(".computerChoice").html(randomNumber);

})

  function calculation(){
      
    var randomNumber = Math.floor(Math.random() * (12-1) + 1);
    var totalNumb = $('#custId').val();
   
    if(totalNumb == ''){
      totalNumb = 0;
    } 
    
    var totalAdding = parseInt(randomNumber)+parseInt(totalNumb);
    $("#custId").val(totalAdding);
   
    $(".totalAdded").html(randomNumber);
  }      

// Random value from 1-12 assigned to each crystal, and shown in total score window. 






// Clicked crystal numbers are added up and displayed in total score window



// If total score matches computer choice, Wins will go up and you win will be displayed. Game will reset.




// If total score surpasses computer choice, Losses will go up and you lost will be displayed. Game will reset. 




