let add = document.getElementById('add');

let sub = document.getElementById('subtract');

let countDisplay = document.getElementById("countDisplay");




add.addEventListener("click", function () { 
    countDisplay.innerHTML = +countDisplay.innerHTML + 1;
})

sub.addEventListener('click', function() { 
    countDisplay.innerHTML = +countDisplay.innerHTML -1
})

