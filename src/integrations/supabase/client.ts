// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fvhktqdniawffgzrdnwo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2aGt0cWRuaWF3ZmZnenJkbndvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2MTg1NTEsImV4cCI6MjA2NDE5NDU1MX0.3hW398_HCvtDne9Swemwor_6s85J0FokG9JUBkPgeLM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);