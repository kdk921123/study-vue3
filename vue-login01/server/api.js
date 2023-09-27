const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

app.use(bodyParser.json());
app.use(cookieParser());


const members = [
    {
        id: 1,
        name: "kim",
        memberId: "kim1",
        password: "kim1"
    },
    {
        id: 2,
        name: "kim",
        memberId: "kim2",
        password: "kim2"
    },
    {
        id: 3,
        name: "kim",
        memberId: "kim3",
        password: "kim3"
    },
    {
        id: 4,
        name: "kim",
        memberId: "kim4",
        password: "kim4"
    }
]

const jwtKey = "abc1234567";

app.get('/api/account', (req, res) => {


    if(req.cookies && req.cookies.token) {
        jwt.verify(req.cookies.token, jwtKey, (err, decoded) => {
            if(err) {
                return res.send(401);
            }
            return res.send(decoded);
        })

    } else {
        res.send(401);
    }


})

app.post('/api/account', (req, res) => {
   const memberId = req.body.memberId;
   const password = req.body.password;

    const member = members.find(m => m.memberId == memberId && m.password == password);

    if (member) {
        const options = {
            domain: "localhost",
            path: "/",
            httpOnly: true
        };

        const token = jwt.sign({
            memberId: member.memberId,
            memberName: member.memberName 
        }, jwtKey, {
            expiresIn: "15m",
            issuer: "africalib"
        });
 
        res.cookie("token", token, options);
        res.send(member);
    } else {
        res.send(404);
    }

});

app.delete('/api/accout', (req, res) => {
    if(req.cookies && req.cookies.token) {
        res.clearCookie("token");
    }

    res.send(200);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})