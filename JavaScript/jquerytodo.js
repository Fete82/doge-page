/* // Hämta ett element
document.querySelector('#heading');

$("#heading");

// Hämta flera element
document.querySelectorAll('.sentence');

$('.sentence');

// Hämta element inuti ett annat element

let ourContent = document.querySelector('.content');
ourContent.querySelector('p');

let jContent = $('.content');
jContent.find('p');

// Kör function på alla element som hämtats

document.querySelectorAll('.sentence').forEach(function(sentence) {
    //sentence.style.display = 'none';
    sentence.style.color = 'green';
});

//$('.sentence').hide();
$('.sentence').css('color', 'green');

$(".sentence").css({
    "color": "#000",
    "background-color": "red"
  });

// Events

document.querySelector('#heading').addEventListener('click', function(event) {
    // Gör något magiskt!
});

$('#heading').click(function(event) {
    // Gör något "magiskt"
});

// Jobba med CSS Klasser
let heading = document.querySelector('#heading');
heading.classList.add('klass-namn', 'klass-namn-2');
heading.classList.remove('heading');
heading.classList.toggle('edvin');

heading.classList.replace('byt-ut', 'byt-in');


$('#heading').addClass('klass-namn');
$('#heading').removeClass('klass-namn');
$('#heading').toggleClass('klass-namn');

    //se om klassen finns
    if(document.querySelector('#heading').classList.contains('klass-namn')){
        //Gåt nått ballt
    }

    if($('#heading').hasClass('klass-namn')) {
        //Gör något "ballt"
    }

// Skapa nya element

let newDiv = document.createElement('div');
document.createElement('p');

let newJDiv = $('<div class=""></div>');
$('<p/>');

// Uppdatera DOM

document.querySelector('.sentence').textContent = "Godmorgon";  // Sätt nytt text-innehåll
document.querySelector('#sentence2').textContent;               // Hämta text-innehåll

$('.sentence').text('Text från jQuery');                        // Sätt nytt text-innehåll
$('.sentence').text();                                          // Hämta text-innehåll


let newElement = document.createElement('div');
newElement.classList.add('newelement');
document.querySelector('.content').appendChild(newElement);

document.querySelector('.content').innerHTML += `<div class="newelement">Jag är ny här</div>`;

document.querySelector('.newelement').textContent = 'JAG ÄR NY!';

$('.content').append(`<p class="newthing">Hallå</p>`);
//$('.newthing').text('HAllå');


// Göra ajax anrop

fetch("data.json")
  .then(data => {
    // Handle data
  }).catch(error => {
    // Handle error
  });

  $.ajax({
    url: "data.json"
  }).done(function(data) {
    // ...
  }).fail(function() {
    // Handle error
  });

  */

  //Instruktioner ovan.


  $(document).ready(
    function(){
        $('#addButton').click(
            function(){
                let toAdd = $('input[class=todo-input]').val();
                 $('ul').append('<li>' + toAdd + '</li>');
            });
       
       $("input[class=ListItem]").keyup(function(event){
          if(event.keyCode == 13){
            $("#button").click();
          }         
      });
      
      $(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');    
      });
      
      $('input').focus(function() {
        $(this).val('');
      });
      
      $('ul').sortable();  
      
    }
);