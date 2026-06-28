const SUPABASE_URL = "https://pwsfigdqsgjyiioggdce.supabase.co";
const SUPABASE_KEY = "sb_publishable_NBAGoITOg01ojvWB9IxcQw_c3WWZcr4";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
window.supabaseClient = supabaseClient;
