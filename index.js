const express = require('express');

const app = express();

let port = 5600;

/////////////////////////////////////////////////////////////////////

/* let rol = 1;

let users = [
    {username:'pripal', password:'123', name:'camilo',rol:'1'},
    {username:'estdnte', password:'456', name:'Paco',rol:'2'}
]


let mRol = (req, res, next) => {
    if(rol){
        next()
    } else {
        next(new Error("no tiene privilegios para acceder"));
    }
}

app.use(mRol); 

function searchUser(username, password, name, rol) {
    let user = users.find(usr => usr.username == username && usr.password == password && usr.name == name && usr.rol == rol);
    return user;
} */

///////////////////////////////////////////////////////////////

const express = require('express');

app = express();
port = 3200;

let users = [
    {username:"tv", name:'Teresa Valencia', password:'111', rol:1},
    {username:"fz", name:'Faustino Zapata', password:'222', rol:2},
    {username:"oz", name:'Otilia Zapata Valencia', password:'333', rol:2}
]

function searchUser (usern, passw){
    let userfind = users.find(usr => usr.username == usern && usr.password==passw);
    return userfind
}


let middSearchUser = (user, passwd) => {
    return ((req, res, next) => {
        let myuser = searchUser(user, passwd);
        if (myuser != undefined) {
            if (myuser.rol == 1){
                next();
            }
            else{
                // res.status(404).send("Recurso solo para administradores")
                res.redirect('/')
            }
        }
        else{
            res.status(404).send("Usuario no hallado")
        }
    })
}



app.get('/dashboard', middSearchUser("tv","111"), (req, res) => {
     res.send("Estamos en dashboard")
})

app.get('/',(req, res)=>{
    res.send("Inicio")
})

app.listen(port, ()=>{
    console.log(`Server in http://localhost:${port}`);
})


/////////////////////////////////////////////////////
//Rutas
/* app.get('/', (req, res) => {
    res.send("Pagina de Inicio");
})

app.get('/Login/:name/:username/:passwd/:rol', function (req, res) {
    const {username, passw, name, rol} = req.params;
    res.send(`Bienvenido ${name}, Su usuario es: ${username} y su rol es: ${rol}`)
})

app.get('/students', (req, res) => {
    res.send(`Estamos en Modo Estudiantes`)
})

app.get('/dashboard', mRol, (req, res) => {
    res.send(`Estamos en modo administrador ${username}`)
})

app.get('/quienessomos', (req, res) => {
    res.send('Ingreso a quienes Somos')
})

app.post('/contacts', (req, res) => {
    res.send('Ingreso a Contactos')
})

app.put('/ubication', (req, res) => {
    res.send('Ingreso a Ubicacion')
})

app.delete('/student', (req, res) => {
    res.send('Ingreso a la ruta student')
})

app.listen(port, () => {
    console.log(`server is in http://localhost:${port}`);
}) */