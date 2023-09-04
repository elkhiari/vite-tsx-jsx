import axios from 'axios';

const requist = axios.create({
    baseURL: 'http://localhost:8080/api',
});

const getMe =  (token : string) => {
    requist.get("/users/me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((res) => {
        return res.data
    }).catch((err)=>{
        throw new Error(err)
    })
}

const login = (email : string, password : string) => {
    requist.post("/auth/login", {
        email,
        password
    }).then((res) => {
        return res.data
    }
    ).catch((err)=>{
        throw new Error(err)
        console.log(err)
    })
}

export { getMe, login }