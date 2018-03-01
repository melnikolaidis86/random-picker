// names to be picked in random order
var namesArray = [
    'Βλαχάκης Μάνος',
    'Γεωργακάς Γιώργος',
    'Γαλατά Θεωδόρα',
    'Καραμπάς Πάρης',
    'Νικολαϊδης Μελέτιος',
    'Παουλίνης Πάνος',
    'Χάλας Αντώνιος'
];

var pickButton = document.getElementById('pickButton');

pickButton.addEventListener('click', function () {
    
    var pickElement = document.getElementById('pickResult');
   
    randomPicker = new RandomPicker(namesArray);
    
    pickElement.innerHTML = randomPicker.randomPick();
    
});


function RandomPicker(list) {
    
    this.listPick = list;
    
    this.randomPick = function () {
        
        if(this.listPick.length < 1) {
            
            return "Τέλος!";
        } else {
            
            var randomIndex = Math.floor(Math.random() * this.listPick.length);

            var pick = this.listPick[randomIndex];

            this.listPick.splice(randomIndex, 1);

            return pick; 
        }
        

    }
}



/*function displayNames() {
    
    for(var key in namesArray) {
        
        var nameNode = document.createTextNode(namesArray[key]);
        console.log(nameNode);
    }
}*/