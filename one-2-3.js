var choices = ['Búa', 'Giấy', 'Kéo'];
var images = ['tải xuống (3) (1).png', 'tải xuống (1) (1).png', 'tải xuống (2).png'];

var playerScore = 0;
var computerScore = 0;
var gameMessage = document.getElementById('game-message');

// Hàm chọn ngẫu nhiên lựa chọn của máy tính
function getComputerChoice() {
  var randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Hàm so sánh kết quả của người chơi và máy tính
function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    resetImages();
    return 'Hòa!';
  } else if (playerChoice === 'Búa' && computerChoice === 'Giấy') {
    resetImages();
    return 'Bạn thắng!';
  } else if (playerChoice === 'Giấy' && computerChoice === 'Búa') {
    resetImages();
    return 'Bạn thắng!';
  } else if (playerChoice === 'Giấy' && computerChoice === 'Kéo') {
    resetImages();
    return 'Bạn thắng!';
  } else if (playerChoice === 'Kéo' && computerChoice === 'Giấy') {
    resetImages();
    return 'Bạn thắng!';
  } else if (playerChoice === 'Kéo' && computerChoice === 'Búa') {
    resetImages();
    return 'Bạn thắng!';
  } else if (playerChoice === 'Búa' && computerChoice === 'Kéo') {
    resetImages();
    return 'Bạn thắng!';
  } else {
    return 'Bạn thắng!';
  }
}

function resetImages() {
  var images = document.getElementsByTagName('img');
  for (var i = images.length - 1; i >= 0; i--) {
    images[i].remove();
  }
}
// Hàm xử lý khi người chơi chọn một lựa chọn

// Hàm xử lý khi người chơi chọn một lựa chọn
function choose(playerChoice) {
  var computerChoice = getComputerChoice();
  var result = compareChoices(playerChoice, computerChoice);
  var playerImageIndex = choices.indexOf(playerChoice);
  var computerImageIndex = choices.indexOf(computerChoice);
  var playerImageSrc = images[playerImageIndex];
  var computerImageSrc = images[computerImageIndex];
  
  var playerImage = document.createElement('img');
  playerImage.src = playerImageSrc;
  playerImage.alt = playerChoice;
  document.body.appendChild(playerImage);
  
  var computerImage = document.createElement('img');
  computerImage.src = computerImageSrc;
  computerImage.alt = computerChoice;
  document.body.appendChild(computerImage);
  
  if (result === 'Bạn thắng!') {
    playerScore++;
  } else if (result === 'Bạn thua!') {
    playerScore++;
  }
  
  gameMessage.innerHTML = 'Bạn chọn ' + playerChoice + '. Máy tính chọn ' + computerChoice + '. ' + result;
  
  if (playerScore >= 5) {
    gameMessage.innerHTML += '<br><strong>Bạn đã thắng cuộc!</strong>';
    alert("Bạn Xuất Sắc Vãi");
    window.location.href = "hehe.html";
    reset();
  }
}

// Hàm đặt lại trò chơi khi kết thúc
function reset() {
  playerScore = 0;
  computerScore = 0;
  var images = document.getElementsByTagName('img');
  for (var i = images.length - 1; i >= 0; i--) {
    images[i].remove();
  }
}