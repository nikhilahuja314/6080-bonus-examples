const loadJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
        .then((data) => data.json())
        .then((jsonObject) => {
            console.log(jsonObject);
            const jokeInsertionTag = document.getElementById('dad-joke-text');
            jokeInsertionTag.textContent = jsonObject.joke;
        });

    console.log("Hello!");
}

const loadJokeButton = document.getElementById('new-dad-joke-btn');
loadJokeButton.addEventListener('click', loadJoke);

window.addEventListener("load", loadJoke);