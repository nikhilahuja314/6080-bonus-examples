//document.getElementById('container-inner').addEventListener('click', () => alert("Inner Container Clicked!"));
document.getElementById('container-middle').addEventListener('click', () => alert("Middle Container Clicked!"));
document.getElementById('container-outer').addEventListener('click', () => alert("Outer Container Clicked!"));

const innerContainer = document.getElementById('container-inner');
innerContainer.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log(event.target);
    alert("Inner Container clicked");
})
console.log(innerContainer);