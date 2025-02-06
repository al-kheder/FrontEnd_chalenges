async function searchPokemon() {
    const pokemonName = document.getElementById("searchInput").value.toLowerCase();
    const pokemonDisplay = document.getElementById("pokemonDisplay");
    const nameElement = document.getElementById("pokemonName");
    const imageElement = document.getElementById("pokemonImage");
    const infoElement = document.getElementById("pokemonInfo");

    if (!pokemonName) {
        const errorElement = document.createElement("div");
        errorElement.innerHTML = "Please enter a Pokémon name.";
        errorElement.style.color = "red";
        pokemonDisplay.innerHTML = ""; 
        pokemonDisplay.appendChild(errorElement);
        pokemonDisplay.style.display = "block";
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error("Pokémon not found");
        }

        const data = await response.json();

        // Display Pokémon info
        nameElement.textContent = data.name.toUpperCase();
        imageElement.src = data.sprites.front_default;
        imageElement.alt = data.name;
        infoElement.textContent = `Height: ${data.height}, Weight: ${data.weight}, Base Experience: ${data.base_experience}`;

        pokemonDisplay.style.display = "block";

    } catch (error) {
        alert(error.message);
        pokemonDisplay.style.display = "none"; 
    }
}
