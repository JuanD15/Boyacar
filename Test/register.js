class User {
    constructor(){
        
    }
  
    setData(first_name, last_name, email, phone_number, password, id_number){
      if (this.verify_email(email)) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone_number = phone_number;
        this.password = password;
        this.id_number = id_number;
      } else {
       window.alert('Usuario no guardado') 
      }
    }
  
    verify_email(email) {
      if (!email.includes("@")) {
        window.alert('Introduzca un correo aceptable');
        return false;
      } else {
        window.alert('Buena bro')
        return true;
      }
    }
  }
  
  const nUser = new User();
  var first_name = 'Juan David';
  var last_name = 'Carrillo Parra';
  var email = 'juan.carrillo03uptc.edu.co';
  var phone_number = '3184589747';
  var password = 'XDsen318_ñ';
  var id_number = '1002333333';
  nUser.verify_email(email)
  
  
  
  
  console.log(nUser);