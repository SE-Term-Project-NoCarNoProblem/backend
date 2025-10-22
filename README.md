## .env Example

```env
# Connect to Supabase via connection pooling
DATABASE_URL="postgresql://postgres.???:???@???.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct connection to the database. Used for migrations
DIRECT_URL="postgresql://postgres.???:???@???.pooler.supabase.com:5432/postgres"

SUPABASE_URL="https://???.supabase.co"
 # for user-facing calls (RLS applies)
SUPABASE_ANON_KEY="eyJhbGci???.eyJpc3M???.2b1mZf9???"
# for admin tasks (bypass RLS)
SUPABASE_SERVICE_ROLE_KEY="eyJhbG???.eyJpc3???.PCtnqSF???"

LOG_LEVEL=debug
DEV_ENVIRONMENT=1
```
