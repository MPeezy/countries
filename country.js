class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "English", "Hello World!", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Marhaban Bialealam!", ["green", "white", "red"]);
let iceland = new Country("Iceland", "Icelandic", "Halló Heiminum!", ["red", "white", "blue"]);
let italy = new Country("Italy", "Italy", "Ciao Mondo!", ["red", "white", "green"]);


function SwitchCountry() {
    let input = "USA";
    let country;
    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }else if (input === "Iceland") {
        country = iceland;
    }
    else { 
        country = italy}
    

}
