function calculate() {
    var num_Octo = document.getElementById("Octo").value

    // !!!!!!!!!!!!!!!!!! STEP 5 !!!!!!!!!!!!!!!!!!
    // Get the no. of seahorses from the user input and store it in a variable
    var num_Seahorse = document.getElementById("Seahorse").value

    // Get the no. of starfish from the user input and store it in a variable
    var num_Starfish = document.getElementById("Starfish").value
    // Get the no. of other beings from the user input and store it in a variable
    var num_Input = document.getElementById("Input4").value

    // !!!!!!!!!!!!!!!!!! STEP 6 !!!!!!!!!!!!!!!!!!
    // Calculate the total no. of water-blades needed and store it in a variable
    var num_output = num_Octo * 8 + num_Seahorse * 2 + num_Starfish * 5 + num_Input * 4

    // !!!!!!!!!!!!!!!!!! STEP 7 !!!!!!!!!!!!!!!!!!
    // Embed the result in the modal text body.

    document.getElementById("result").innerText = "Please Request " + num_output + "water-blades by reaching out to fishy"
}

// !!!!!!!!!!!!!!!!!! STEP 8 !!!!!!!!!!!!!!!!!!
// Call the function defined above when the user clicks the button to get the total no. of water-blades needed

document.getElementById("calculate").addEventListener("click", calculate)
