export const getJoke = async () => {
    const jokeResponse = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        'Accept': 'application/json'
      }
    });

    const jokeContent = await jokeResponse.json();
    return jokeContent.joke;
  }