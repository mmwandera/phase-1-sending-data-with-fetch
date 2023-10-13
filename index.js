// Add your code here
function submitData(name, email){
    
    // Test 4 - Return the Fetch Chain
    return(

        // Test 1 - Send Data
        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })

        // Test 2 - Handle the Response
        .then(res => res.json())
        .then(data => {
            document.body.innerHTML += data.id
        })

        // Test 3 - Handle Errors
        .catch(error => {
            document.body.innerHTML += error.message
        })
    )
}

submitData('Mark', 'mmwandera74@gmail.com')