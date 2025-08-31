import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://cyjqltispfzdlxvrcnxm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5anFsdGlzcGZ6ZGx4dnJjbnhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2MzAyODUsImV4cCI6MjA3MjIwNjI4NX0.Q10JWlpeeJhgFRt9hCHgK9zj0twOKxtJfiUPY-JSM0Q";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);