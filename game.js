var player = [];
var size;
var player_list = document.getElementById("players");
var descriptions = [];

function addPlayer() {
    if(player.length < 12){
        var name = prompt("Inserisci il nome","");
        if (name != "" && name != null) {
            player[player.length] = new Player(name, 0, getColor(player.length));
            player_list.children[player.length-1].innerHTML = name + "  0";
            player_list.children[player.length-1].style.display = "block";
        }
    }
    else{
        alert("Sono supportati massimo 12 giocatori")
    }
  }

function rollDice(id){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("load").style.display = "block";
    document.getElementById("name").innerHTML = "";
    document.getElementById("number").innerHTML = "";
    sound();
    setTimeout(function(){
        document.getElementById("load").style.display = "none";
        id = id - 1;
        var board = document.getElementById("board");
        board.children[player[id].pos].style.backgroundColor = "#eaeaea";
        steps = Math.floor(Math.random() * 5) + 1;
        document.getElementById("name").innerHTML = player[id].name + " ha ottenuto ";
        document.getElementById("number").innerHTML = steps;
        player[id].pos = player[id].pos + steps;
        if(player[id].pos < size){
            board.children[player[id].pos].style.backgroundColor = player[id].color;
            player_list.children[id].innerHTML = player[id].name + "  " + player[id].pos;
            for(z = 0; z < player.length; z++){
              board.children[player[z].pos].style.backgroundColor = player[z].color;
            }
        }
        else{
            sound("final");
            document.getElementById("name").innerHTML = player[id].name + " HA VINTO";
            document.getElementById('overlay').classList.add("win");
            alert(player[id].name + " ha vinto! ");
        }
    }, 3000);
}


function generate(length) {
    size = length + 1;
    var board = document.getElementById("board");
    var cell = document.createElement("div");
    cell.innerHTML = "GO";
    cell.classList.add("square");
    board.appendChild(cell);

    for(j = 1; j < length+1; j++){
                var cell = document.createElement("div");
                cell.innerHTML = j;
                cell.setAttribute("onclick", "showDescription(" + j +")");
                cell.classList.add("square");
                board.appendChild(cell);
    }

    var cell = document.createElement("div");
    cell.innerHTML = "END";
    cell.classList.add("square");
    board.appendChild(cell);
  }


  class Player {
    constructor(name, pos, color) {
      this.name = name;
      this.pos = pos;
      this.color = color;
    }
  }

  function setDescription(array){
    descriptions = array;
  }

  function showDescription(index){
    var modal = document.getElementById("modal");
    if (typeof modal.showModal === "function") {
      document.getElementById("desc").innerHTML = descriptions[index-1];
      modal.showModal();
    } else {
      //The <dialog> API is not supported by this browser
      alert("Questa casella contiene:\n" + descriptions[index-1]);
    }
  }

  function closeDescription(){
    document.getElementById("modal").close();
  }
  
  function sound(name){
    switch(name){
      case "win":
        var audio = new Audio('assets/win.mp3');
      break;
      case "lose":
        var audio = new Audio('assets/lose.mp3');
      break;
      case "final":
        var audio = new Audio('assets/final.mp3');
      break;
      case "roll":
      default:
        var audio = new Audio('assets/roll.mp3');
      break;
    }
    audio.play();
  }

  function getColor(index){
    color = ["red", "orange", "gold", "LightSeaGreen", "LimeGreen", "MediumTurquoise", "Navy", "HotPink", "DarkViolet", "Chocolate", "Brown", "gray"];
    rColor = color[index]
    return rColor;
  }

  function hide(){
    document.getElementById("overlay").style.display = "none";
  }