const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'secret code',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true,
        maxAge: 1000 * 60 * 60
    }
}));

app.use(express.json({
    limit: '50mb'
}));

const server = app.listen(3000, () => {
    console.log("Server started. port: 3000");
});


// fs.watchFile(__dirname + '/sql.js', (curr, prev) => {
//     console.log('sql 변경시 재시작 없이 반영');
//     delete require.cache[require.resolve('./sql.js')];
// });


const db = {
    database: 'MINI_SHOP',
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "mariadb"
} 

const dbPool = require('mysql').createPool(db);


app.post('/api/login', async (request, res) => {
    // request.session['email'] = 'kdk921123@gmail.com';
    // res.send('ok');
    try {
        await req.db('signUp', request.body.param);
        if(request.body.param.length > 0 ) {
            for(let key in request.body.param[0]){
                request.session[key] = reqeust.body.param[0][key];
            }
            res.send(request.body.param[0]);
        }else {
            res.send({
                error: "Please try again or contact system manager."
            });
        }
    } catch (err) {
        res.send({
            error: "DB access error"
        });
    }  

});


app.post('/api/logout', async (request, res) => {
    request.session.destroy();
    res.send('ok');
});

const sql = require('./sql.js');

app.post('/api/:alias', async (request, res) => {

    // if(!request.session.email) {
    //     return res.status(401).send({error: 'You need to login.'});
    // }

    try {
        res.send(await req.db(request.params.alias, request.body.param));

    } catch(err) {
        res.status(500).send({
            error: err
        });
    }
});

const req = { 
    async db(alias, param = [], where = '' ) {
        return new Promise((resolve, reject) => dbPool.query(sql[alias].query + where , param, (error, rows) => {
             if ( error ) {
                if ( error.code != 'ER_DUP_ENTRY')
                    console.log(error); 
                resolve({
                    error
                });
             } else resolve(rows);
        }));
     } 
};