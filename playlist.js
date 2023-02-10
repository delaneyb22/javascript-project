promptAnswer="yes"

var myItems = ["playlist"];

// display it on the page
var list = $("#Personal-Playlist");
var parent = list.parent();

// loop through items and build list
list.detach().empty().each(function(i){
    for (var x = 0; x < myItems.length; x++){
        $(this).append('<li>' + myItems[x] + '</li>');
        if (x == myItems.length - 1){
            $(this).appendTo(parent);
        }
    }
});


// Add item button 
function myListFunction() {
    var newItem = prompt("Would you like to add this song to your playlist?");
  $("#Personal-Playlist").append('<li>' + newItem + '</li>');
  
}
function GetPopSong()
{
    var popSongs=["As it was:Harry Styles", "Flowers:Miley Cyrus", "Anti-Hero:Taylor Swift"];
    var random = popSongs[Math.floor(Math.random() * popSongs.length)];
  var randomSongPrompt=prompt("would you like to add "+ random +  " to your playlist?");
  if(randomSongPrompt=="yes"){
  $("#Personal-Playlist").append('<li>' + random + '</li>');
  }
    //alert(random);
  
}
function getCountrySong()
{
    var countrySongs=["country song1", "Country song 2", "Country song3"];
    var random1 = countrySongs[Math.floor(Math.random() * countrySongs.length)];
    var randomCountry=prompt("would you like to add "+ random1 +  " to your playlist?");
    if(randomCountry=="yes"){
        $("#Personal-Playlist").append('<li>' + random1 + '</li>');
    }
 }
   
function getFolkSong()
{
    var folkSongs=["Cleopatra: The Lumineers", "Stick Season: Noah Kahn", 
        "Georgia: Vance Joy", "Blowing in the wind: Bob Dylan", "As We Ran: The National Parks",
        "The sounds of Silence: Simon and Garfunkel"];
    var random2 = folkSongs[Math.floor(Math.random() * folkSongs.length)];
    var randomFolk=prompt("would you like to add "+ random2 +  " to your playlist?");
    if(randomFolk=="yes"){
        $("#Personal-Playlist").append('<li>' + random2 + '</li>');
    }
}

function getJazzSong()
{
    var jazzSongs=["Take Five: Dave Brubeck",
	"So What: Miles Davis",
	"Take The A Train: Duke Ellington",
	"Round Midnight: Thelonious Monk",
	"My Favorite Things: John Coltrane"  ];
    var random3 = jazzSongs[Math.floor(Math.random() * jazzSongs.length)];
  var randomJazz=prompt("would you like to add "+ random3 +  " to your playlist?");
  if(randomJazz=="yes"){
    $("#Personal-Playlist").append('<li>' + random3 + '</li>');
  }
}

function getIndieSong()
{
    var indieSongs=["Mr Brightside: The Killers",
	"Greek Tradegy: The Wombats",
	"A-Punk: Vampire Weekend",
	"Motion Sickness: Phoebe Bridgers",
	"Strawberry Suncreen: lostboycrow",
    "Pumped Up Kicks: Foster the People"  ];
    var random4 = indieSongs[Math.floor(Math.random() * indieSongs.length)];
  var randomIndie=prompt("would you like to add "+ random4 +  " to your playlist?");
  if(randomIndie=="yes"){
    $("#Personal-Playlist").append('<li>' + random3 + '</li>');
  }
}

 function getAltSong()
{
    var AltSongs=["Two: Sleeping At Last",
	"Hearing: Sleeping At Last",
	"Anchor: Novo Amor",
	"Ontario: Novo Amor",
	"Rivers and Roads: The Heart and the Hand",
    "Bloom: The Paper Kites",  "Coastline: Hollow Coves"];
    var random5 = AltSongs[Math.floor(Math.random() * AltSongs.length)];
  var randomAlt=prompt("would you like to add "+ random5 +  " to your playlist?");
  if(randomAlt=="yes"){
    $("#Personal-Playlist").append('<li>' + random5 + '</li>');
  }
}

