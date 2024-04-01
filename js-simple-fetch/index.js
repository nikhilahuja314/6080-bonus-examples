const loadDadJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then((data) => data.json())
        .then((jsonData) => {
            const dadJokePTag = document.getElementById('dad-joke-text');
            dadJokePTag.textContent = jsonData.joke;
        });
}

const loadDadJokeAsync = async () => {
    const dadJokeResponse = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            'Accept': 'application/json'
        }
    });

    const dadJokeJson = await dadJokeResponse.json();
    const dadJokePTag = document.getElementById('dad-joke-text');
    dadJokePTag.textContent = dadJokeJson.joke;

}

window.addEventListener("load", () => {
    loadDadJoke();
    //loadDadJokeAsync();
})

const loaderButton = document.getElementById('new-dad-joke-btn');
loaderButton.addEventListener('click', loadDadJoke);