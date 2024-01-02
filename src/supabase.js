import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zluulgxiajscnvxkecku.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsdXVsZ3hpYWpzY252eGtlY2t1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjU4ODk2NSwiZXhwIjoyMDEyMTY0OTY1fQ.cLlGVGnKoZqbFb-9b88D9Pujlp1SbijDGgW28bU3lCI";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
