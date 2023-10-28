const handleLogin = async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try {
        const response = await fetch("/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        }). then (result=> result.json()).then(json=>{
            localStorage.setItem('authToken', json.token)
        })
        const result = await response.json();
        //result.message === "Success" ? localStorage.setItem("token", result.token) : alert("errorrrrrrrr");
    } catch (err) {
        console.log(err);
    }
};

const myElement = document.getElementById("enviar");
myElement.addEventListener("click", () => {
    handleLogin();
});