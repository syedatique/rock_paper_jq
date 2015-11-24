function rand_index(){
  return Math.floor(Math.random() * 5)
}
var choice = ['rock','paper','scissors','spock','lizard'];

function aiMove(){
  return choice[rand_index()];
}
var answer = 0;

function result(){
  $('#output').append(answer);
  $('#output').slideUp();
  $('#output').slideDown();
  $('#output').slideUp();
  $('#output').slideDown();
}

var result_rock = function() {
  var human_choice = 'rock';
  if (aiMove() == 'rock') {
    answer = 'Its a draw';
     result();
  }
  else if(aiMove() == 'paper') {
    answer = ('AI picked paper.' + ' '+ 'paper covers rock' + ' ' + 'You loose');
    result();
  } 
  else if(aiMove() == 'scissors') {
    answer = ('AI picked scissors.'+' '+'rock crashes scissors'+' '+ 'You won!!');
    result();
  }
  else if(aiMove() == 'spock') {
    answer = ('AI picked spock.'+' '+'Spock vaporizes Rock'+' '+ 'You loose');
    result();
  }
  else if (aiMove() == 'lizard') {
    answer = ('AI picked lizard.'+' '+'Rock crushes Lizard'+' '+ 'You won');
    result();
  };
}


var result_paper = function() {
  var human_choice = 'paper';
  if (aiMove() == 'rock') {
    answer = ('AI picked Rock.'+' '+'Paper covers Rock' +' ' + 'You won!');
    result();
  }
  else if(aiMove() == 'paper') {
    answer = ('it is a draw');
    result();
  } 
  else if(aiMove() == 'scissors') {
    answer = ('AI picked lizard.'+' '+'Scissors cuts Paper'+' '+ 'You loose');
    result();
  }
  else if(aiMove() == 'spock') {
    answer = ('AI picked lizard.'+' '+'Paper disproves Spock' +' '+ 'You won!');
    result();
  }
  else if (aiMove() == 'lizard') {
    answer = ('AI picked lizard.'+' '+'Lizard eats Paper' +' '+ 'You loose');
    result();
  };
}


var result_scissors = function() {
  var human_choice = 'scissors';
  if (aiMove() == 'rock') {
    answer = ('AI picked Rock.'+' '+'Rock crushes scissors'+' '+ 'You loose');
    result();
  }
  else if(aiMove() == 'paper') {
    answer = ('AI picked Paper.'+' '+'Scissors cuts Paper' +' '+ 'You won!');
    result();
  } 
  else if(aiMove() == 'scissors') {
    answer = ('it is a draw');
    result();
  }
  else if(aiMove() == 'spock') {
    answer = ('AI picked Spock.'+' '+'Spock smashes Scissors'+' '+ 'You loose');
    result();
  }
  else if (aiMove() == 'lizard') {
    answer = ('AI picked Lizard.'+' '+'Scissors decapitates Lizard'+' '+ 'You won');
    result();
  };
}


var result_spock = function() {
  var human_choice = 'spock';
  if (aiMove() == 'rock') {
    answer = ('AI picked Rock.'+' '+'Spock vaporizes Rock'+' '+'You won!!');
    result();
  }
  else if(aiMove() == 'paper') {
    answer = ('AI picked Paper.'+' '+'Paper disproves Spock' +' '+ 'You loose');
    result();
  } 
  else if(aiMove() == 'scissors') {
    answer = ('AI picked Scissors.'+' '+'Spock smashes Scissors' +' '+ 'You won!!');
    result();
  }
  else if(aiMove() == 'spock') {
    answer = ('it is a draw');
    result();
  }
  else if (aiMove() == 'lizard') {
    answer = ('AI picked Lizard.'+' '+'Lizard poisons Spock' +' '+ 'You loose');
    result();
  };
}


var result_lizard = function() {
  var human_choice = 'lizard';
  if (aiMove() == 'rock') {
    answer = ('AI picked Rock.'+' '+'Rock crushes Lizard' +' '+ 'You loose');
    result();
  }
  else if(aiMove() == 'paper') {
    answer = ('AI picked Paper.'+' '+'Lizard eats Paper'+' '+ 'You won!');
    result();
  } 
  else if(aiMove() == 'scissors') {
    answer = ('AI picked Scissors.'+' '+'Scissors decapitates Lizard' +' '+'You loose');
    result();
  }
  else if(aiMove() == 'spock') {
    answer = ('AI picked Spock.'+' '+'Lizard poisons Spock' +' '+'You won!');
    result();  
  }
  else if (aiMove() == 'lizard') {
    answer = ('It is a draw');
    result();
  };
}


$('#rock').click(result_rock);
$('#paper').click(result_paper);
$('#scissors').click(result_scissors);
$('#spock').click(result_spock);
$('#lizard').click(result_lizard);
