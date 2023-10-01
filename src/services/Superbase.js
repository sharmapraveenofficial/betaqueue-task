import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = process.env.REACT_APP_SUPERBASE_URL;
const supabaseKey = process.env.REACT_APP_SUPERBASE_KEY;
const Suparbase = createClient(supabaseUrl, supabaseKey);

export default Suparbase;
