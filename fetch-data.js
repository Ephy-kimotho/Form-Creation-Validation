async function fetchUserData(){
    const apiUrl = "https://jsonplaceholder.typicode.com/users"

    const dataContainer = document.getElementById("api-data")
    
    try {
        const response = await fetch(apiUrl)
        const users =  await response.json()
       
        //clear data container
        dataContainer.innerHTML = ""

        // create a users list "ul" element
        const userList = document.createElement("ul")

        // loop through the users array
        users.forEach(user => {
            // for each user
                //create an li element
                const li = document.createElement("li")
                // set the li text content to user.name
                li.textContent = user.name
                // append li to userList
                userList.appendChild(li)
        });
        // then append users List to datacontainer
        dataContainer.appendChild(userList)

    } catch (error) {
        dataContainer.innerHTML = ""
        dataContainer.textContent = "Failed to load user data."

    }
}

document.addEventListener("DOMContentLoaded", fetchUserData)