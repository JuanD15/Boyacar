import { supabase } from "./ConnectService.mjs";

export const signUpWithEmailAndPassword = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  /**
   * Se guarda el id del usuario y se cierra la sesion 
   * para permitir consultas con la base de datos
   */
  const uId = user.user.id;
  supabase.auth.signOut();

  /**
   * 
   */
  const { person, errorPers } = await supabase
    .from("Person")
    .insert([
      {
        person_id: id,
        person_name: name,
        person_last_name: last_name,
        person_gender: gender,
        birth_date: birthDate,
        person_photo: idPhoto,
        id_document_photo: "URL",
        phone_number: phoneNumber,
      },
    ])
    .select();

  /**
   * 
   */
  const { profile, errorProf } = await supabase
    .from("Profile")
    .insert([
      {
        profile_id: id,
        user_id: uId,
      },
    ])
    .select();

  return { data, error };
};
