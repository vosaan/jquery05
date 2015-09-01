function card(name, suit, value){
	this.name = name,
	this.suit = suit,
	this.value = value
};

var cards = new Array();
var names = new Array("2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k", "a");
var suits = new Array("clubs", "diamonds", "hearts", "spades");
var values = new Array(2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

for (var i=0; i<=52; i++){
	cards[i] = new card();
}

//var j=0;
var k=0;
while (k <= suits.length){
	var j=0;
	while (j <= names.length - 1){
		console.log(names[j]);
		j++;
	}
k++;
}