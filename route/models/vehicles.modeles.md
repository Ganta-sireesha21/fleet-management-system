## Table:vehicles ##
### columns
- id (uuid, primary key)
- name (text, unique, not null)
- registration_number (text,unique)
- allowed_passengers (int)
- isavailable (boolen, default true)
- rate_per_km (numeric)
- owner_id (uuid, FK-users)
- driver_id (uuid, null FK-users)
- created_at (timestamp)


