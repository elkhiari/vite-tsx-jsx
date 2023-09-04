const getMe (token : string) => {
    axios.get("http://localhost:8080/api/users/me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}