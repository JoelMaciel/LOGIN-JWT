const jwt = require('jsonwebtoken')

const user = {
    id: "20",
    name: "Joao",
    username: "joao@gmail.com",
    password: "123457"
}

const secret = "joel";

function createToken() {
    const token = jwt.sign({ id: user.id, username: user.username }, secret, { expiresIn: 120 })

    console.log(token)
}

function testeToken(token) {
    try {
        const validData = jwt.verify(token, secret)
        console.log(validData);

    } catch (error) {
        console.log(error)
    }
}

testeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJqb2FvQGdtYWlsLmNvbSIsImlhdCI6MTYxMzYxOTE1MCwiZXhwIjoxNjEzNjE5MjcwfQ.on7l_CenGi448x_0nVhT7bbOo0-Q3Ae1DbCyKIoxMXY")

