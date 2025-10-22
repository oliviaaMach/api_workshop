// syftet : Hämta skämt från dadjokes api
// returera sting med skämt
// funktion :
// hämtar in knappen genom

// steg 1 - hämta elementet i html med class joke, där skämtet ska visas.
    const joke = document.querySelector(".joke");

// steg 2 - hämta knappen med class btn som används för att hämta nya skämt fråpn api
    const btn = document.querySelector(".btn");

// steg 3 - skapa en funktion generateJoke ->
    function generateJoke() {

// steg 3.1 - ställ in tillbaka data i json-format
        const config = {
            headers: {
                Accept: "application/json",
            },
        };
// steg 3.2 - fetch (hemsidan icanhazdadjoke)
        fetch("https://icanhazdadjoke.com", config)

// steg 3.3 - vi får ett joke (hah)
            .then((response) => response.json())

// steg 3.3.1 - konvertera till json och hämtar skämtet och visar i joke
            .then((data) => {
                joke.textContent = data.joke;
            });
    }

// steg 4 - funktionen ska köras en gång varje gång sidan laddas.
        generateJoke();
        
// steg 5 - addeventlistener vid button click på btn genereras nytt skämt
        btn.addEventListener('click', generateJoke);



