## Table:users ##
### columns
- id (uuid, primary key)
- name (text, unique, not null)
- email (text, unique, not null)
- password (text)
- role (enum:customer|owner|driver)
- created_at (timestamp)
### constraints
- email UNIQUE
- role CHECK constraint
### relationships
- owner -> vehicles
- driver ->vehicles
- customer -> trips
