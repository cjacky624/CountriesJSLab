ChangeDisplay();

//program only takes valid input

class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = new Array(3);
        this.colors = colors;
    }
    setColors(colorOne, colorTwo, colorThree) {
        this.colors = { colorOne, colorTwo, colorThree };
    }
}


function ChangeDisplay() {
    var selectedCountry = SwitchCountry();

    document.getElementById("Color1").style.backgroundColor = selectedCountry.colors[0];
    document.getElementById("Color2").style.background = selectedCountry.colors[1];
    document.getElementById("Color3").style.background = selectedCountry.colors[2];
    document.getElementById("CountryName").innerHTML = selectedCountry.name;
    document.getElementById("OfficialLanguage").innerHTML = selectedCountry.lang;
    document.getElementById("HelloWorld").innerHTML = selectedCountry.greeting;

}
function SwitchCountry() {
    let input = prompt("Please input a country: (USA, Canada, Mexico, Cuba, France)").toLowerCase();
    var num;
    var listCT = new Array(5);
    listCT = creatArray();
    for (var i = 0; i < 5; i++) {
        if (listCT[i].name.toLowerCase() == input) {
            console.log(listCT[i].name);
            num = i;
        }
    }
    return listCT[num];
}
function creatArray() {
    var listCT = new Array(5);
    listCT[0] = { name: "USA", lang: "English", greeting: "Hello", colors: ["red", "white", "Blue"] };
    listCT[1] = { name: "Canada", lang: "English and Frence", greeting: "Hello, Bonjorno", colors: ["Red", "White", "Red"] };
    listCT[2] = { name: "Mexico", lang: "Spanish", greeting: "Hola", colors: ["Green", "White", "Red"] };
    listCT[3] = { name: "Cuba", lang: "Spanish", greeting: "Hola", colors: ["White", "Red", "Blue"] };
    listCT[4] = { name: "France", lang: "Frence", greeting: "Bonjorno", colors: ["Blue", "White", "Red"] };
    return listCT;
}