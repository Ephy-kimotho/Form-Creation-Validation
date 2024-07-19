document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("registration-form")
    const feedBackDiv = document.getElementById("form-feedback")

    form.addEventListener("submit", (event) => {
        // preventing default form behavior
        event.preventDefault()

        // selecting form data
        const username = document.getElementById("username").value.trim()
        const email = document.getElementById("email").value.trim()
        const password = document.getElementById("password").value.trim()

        //variable to track validation status
        let isValid = true

        // An array to track error messages
        const messages = []

        if (username.length < 3) {
            isValid = false
            messages.push("Username is too short !")
        }

        if (!(email.includes("@") && email.includes("."))) {
            isValid = false
            messages.push("Invalid email !")
        }


        if (password.length < 8) {
            isValid = false
            messages.push("Password is too short !")
        }

        feedBackDiv.style.display = "block"

        if (isValid) {
            // registration successfull
            feedBackDiv.textContent = "Registration successful!"
            feedBackDiv.style.color = "#28a745"
        } else {
            // display error messages
            feedBackDiv.innerHTML = messages.join("<br/>")
            feedBackDiv.style.color = "#dc3545"
        }
    })
})