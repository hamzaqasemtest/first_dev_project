document.getElementById('javascript-manuplation').addEventListener('click', function() {
    var confirmationResult = confirm('Are you sure you want to change the color?');
    if (confirmationResult) {
        var element = document.getElementById('javascript-manuplation');
        element.style.backgroundColor = getRandomColor(); 
    }
});

document.getElementById('javascript-alert').addEventListener('click', function() {
    alert("this is alert")
});

function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}


function handleSelection() {
    var answerSelector = document.getElementById("answerSelector");
    var outputElement = document.getElementById("output");

    switch (answerSelector.value) {
        case "option1":
            outputElement.textContent = "You selected Option 1";
            break;
        case "option2":
            outputElement.textContent = "You selected Option 2";
            break;
        case "option3":
            outputElement.textContent = "You selected Option 3";
            break;
        default:
            outputElement.textContent = "Please select an option";
    }
}