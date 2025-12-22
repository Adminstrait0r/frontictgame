// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// 1. Initialize supabase first
const supabase = createClient(
  'https://bpmsrexadtbchsjtkclq.supabase.co',  // Replace with your Supabase URL
  'sb_publishable_tea5XcUjhBLUsLapY0DV-Q_SgNlMAUp'               // Replace with your anon/public key
);

// 2. Export supabase
export { supabase };
