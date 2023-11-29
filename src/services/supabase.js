
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://rmcdobbpkvpnxbdkyvhl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtY2RvYmJwa3ZwbnhiZGt5dmhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxNTk5MjUsImV4cCI6MjAwNzczNTkyNX0.j6Y5dJiAND31Oz7Buuka4bUNkKHiWKRoIzoXF_V7SCM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;