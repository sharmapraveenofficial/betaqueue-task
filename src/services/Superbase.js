import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kingdkrcopbqsspdamul.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtpbmdka3Jjb3BicXNzcGRhbXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNDk3MDAsImV4cCI6MjAxMTcyNTcwMH0.7Cnpe_J5vnPPCzxrZcTnwlVukpan8jIzNvtsJFHzII8";
const Suparbase = createClient(supabaseUrl, supabaseKey);

export default Suparbase;
