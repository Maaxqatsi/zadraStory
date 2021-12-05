    let button = document.getElementsByClassName('send-button')[0];
    let input = document.getElementsByClassName("input")[0];

    function removeInput () {
        input.value = "";
        }

    button.addEventListener("click", removeInput);