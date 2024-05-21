import { supabase } from "./ConnectService.mjs";


export async function registerUserData(userData) {
  console.log(userData.email, userData.password, 'desde register');
  /**
   * Inserción de datos en la tabla 'Persona' 
   * mediante el cliente creado anteriormente
   */
  // const { data, error } = await supabas
  //   .from('Person')
  //   .insert([
  //     {
  //       person_id: userData.documentId,
  //       person_names: userData.names,
  //       person_last_names: userData.lastNames,
  //       person_genre: userData.genre,
  //       birth_date: userData.birthDate,
  //       person_photo: userData.profilePicture,
  //       id_document_photo: userData.documentId_image,
  //       phone_number: userData.phoneNumber,
  //     },
  //   ])
  //   .select()

  // /**
  //  * Inserción de datos en la tabla 'Usuario' 
  //  * mediante el cliente creado anteriormente
  //  */

  let { dataUser, errorUser } = await supabase.auth.signUp(
    {
      email: userData.email,
      password: userData.password,
    }
  )

  if (dataUser) {
    const userId = dataUser.user.id;
    console.log('ID del usuario:', userId);

  } else if (errorUser) {
    console.error('Error al registrar el usuario:', errorUser.message);
  }


  // const { data2, error2 } = await supabase
  //   .from('Profile')
  //   .insert([
  //     {
  //       person_id: userData.documentId,
  //       user_id: dataUser.id,
  //       user_type: 'Pasajero'
  //     },
  //   ])
  //   .select()

  /**
   * Impresión de datos y errores registrado en ambas inserciones
   */
  console.log('Data ------');
  console.log(dataUser);
  console.log('Error ------');
  console.log(errorUser);

  return { dataUser, errorUser };
}
