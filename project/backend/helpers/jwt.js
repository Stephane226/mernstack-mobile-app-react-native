const expressJwt  = require('express-jwt')

function authJwt(){
    const secret = process.env.secret

    return expressJwt({
        secret,
        algorithms : ['HS256']
    }).unless({
        //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDlkM2I0NDFkOWZlMjZiZmJlMjhhOWEiLCJpYXQiOjE2ODgxMzAwMDYsImV4cCI6MTY4ODIxNjQwNn0.sJaQizB8kry2jbhBpMFuf_erpYwJOluaUldY0MnEjDo
        //here apis can be reached without require of tokenn verification
        path:[
            'users/login',
            'products'
        ]
    })
}

module.exports = authJwt