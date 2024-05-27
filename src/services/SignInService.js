import { supabase } from "./ConnectService.mjs";

export const signInWithEmailAndPassword = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  /**
   * 
   */
  // const user = data.user;
  // const userId = data.user.id;
  // supabase.auth.signOut();

  // /**
  //  * 
  //  */
  // let { data: profile, errorProf } = await supabase
  //   .from("Profile")
  //   .select("*")
  //   .eq("user_id", userId);

  // /**
  //  * 
  //  */
  // const profId = profile[0].profile_id;

  // /**
  //  * 
  //  */
  // let { data: person, errorPerson } = await supabase
  //   .from("Person")
  //   .select("*")
  //   .eq("person_id", profId);

  return { data, error };
};
