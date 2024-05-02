import { createClient } from "@supabase/supabase-js";

/**
 * Inicialización de constantes y variables necesarias para la conexión
 */
const supabaseUrl = "https://qdwfpdwadbykxwymotjx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkd2ZwZHdhZGJ5a3h3eW1vdGp4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDQxMzQ0OSwiZXhwIjoyMDI5OTg5NDQ5fQ.j-1Mlcjp8MdeyAMtik4PSwaOwUj4pFJlrBYBgFA-syQ";

/**
 * Creación de cliente con los datos inicializados
 */
export const supabase = createClient(supabaseUrl, supabaseKey);