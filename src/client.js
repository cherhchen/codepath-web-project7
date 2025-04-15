import { createClient } from "@supabase/supabase-js";

const URL = "https://rqjacrshcrxpjwrondiq.supabase.co"
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxamFjcnNoY3J4cGp3cm9uZGlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2OTUzMjEsImV4cCI6MjA2MDI3MTMyMX0.9vTQbbyRXtkpTeE2LH56hxwXuA-ZBvI1r1w8KXRu5M0"

export const supabase = createClient(URL, anonKey)