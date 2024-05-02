import { supabase } from "./ConnectService.mjs";


export async function registerUserData(userData) {
  /**
   * Inserción de datos en la tabla 'Persona' 
   * mediante el cliente creado anteriormente
   */
  const { data, error } = await supabase
    .from('Person')
    .insert([
      {
        person_id: userData.documentId,
        person_names: userData.names,
        person_last_names: userData.lastNames,
        person_genre: userData.genre,
        person_email: userData.email,
        birth_date: userData.birthDate,
        person_photo: userData.profilePicture,
        phone_number: userData.phoneNumber,
        id_document_photo: userData.documentId_image,
      },
    ])
    .select()

  /**
   * Inserción de datos en la tabla 'Usuario' 
   * mediante el cliente creado anteriormente
   */
  const { data2, error2 } = await supabase
    .from('User')
    .insert([
      {
        user_id: userData.documentId,
        password: userData.password,
        user_type: 'Pasajero'
      },
    ])
    .select()

  /**
   * Impresión de datos y errores registrado en ambas inserciones
   */
  console.log('Data ------');
  console.log(data, data2);
  console.log('Error ------');
  console.log(error, error2);

  return { data, data2, error, error2 };
}
