## Table:trips##
- id (uuid, primary key)
- customer_id (uuid, FK users)
- vehicle_id (uuid, Fk-vehicles)
- start_date (date)
- end-date (date)
- location (text)
- distance-km (numeric)
- passengers (int)
- tripCost (numeric)
- isCompleted (boolen, default false)
- created_at (timestamp)

### Realtionships
- trip belongs to customer
- trip uses one vehicles