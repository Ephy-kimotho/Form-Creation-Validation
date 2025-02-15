document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("registration-form")
    const feedbackDiv = document.getElementById("form-feedback")

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

        feedbackDiv.style.display = "block"
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!"
            feedbackDiv.style.color = "#28a745"
        } else {
            feedbackDiv.innerHTML = messages.join("<br/>")
            feedbackDiv.style.color = "#dc3545"
        }
    })
})