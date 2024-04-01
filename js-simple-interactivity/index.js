// # simple approach
// const button = document.getElementById('btn-click-alert');
// const onClickHandler = function() {
//     alert("Hello!");
// }

// button.onClick = onClickHandler;

// # slightly more complex approach
const button = document.getElementById('btn-click-alert');
const onClickHandler = function() {
    alert("Hello!");
}

button.addEventListener('click', onClickHandler);

// # the one-liner...
document.getElementById('btn-click-alert').addEventListener('click', (e) => alert("Hello!"));