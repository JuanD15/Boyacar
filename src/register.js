//Modelo de lo que toca hacer
/*const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware para parsear el body de las solicitudes
app.use(bodyParser.json());

// Array para almacenar temporalmente los usuarios registrados (puedes usar una base de datos en su lugar)
let users = [];

// Ruta para registrar un nuevo usuario
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Verificar si se proporcionaron todos los datos necesarios
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Faltan datos para el registro' });
  }

  // Verificar si el usuario ya está registrado
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'El usuario ya está registrado' });
  }

  // Crear un nuevo usuario
  const newUser = { username, email, password };
  users.push(newUser);

  return res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
*/


class User {
    constructor(){
        
    }
  
    setData(first_name, last_name, email, phone_number, password, id_number){
     // if (this.verify_email(email)) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone_number = phone_number;
        this.password = password;
        this.id_number = id_number;
     /* } else {
       window.alert('Usuario no guardado') 
      }*/
    }
  
    /*verify_email(email) {
      if (!email.includes("@")) {
        window.alert('Introduzca un correo aceptable');
        return false;
      } else {
        window.alert('Buena bro')
        return true;
      }
    }*/
  }
  
  const nUser = new User();
  var first_name = 'Juan David';
  var last_name = 'Carrillo Parra';
  var email = 'juan.carrillo03uptc.edu.co';
  var phone_number = '3184589747';
  var password = 'XDsen318_ñ';
  var id_number = '1002333333';
  nUser.setData(first_name,last_name,email,phone_number,password,id_number);
  console.log('test branch');
  
console.log('QUIZOOOO CARRILLO');

  
  
  console.log(nUser);