var chico = ["One Mile", "Monkey Face", "Sierra Nevada Brewery", "Chico State", "Tin Roof Bakery"];
var current = "";

function shuffleGallery()
{
  do
  {
    var i = Math.floor(Math.random() * chico.length);
  }while(current == chico[i])
  current = chico[i];
  console.log(chico[i]);
}
