-- Demo seed data for Shuttle Service
INSERT INTO users (id,name,email,password,role,phone)
VALUES
  (uuid_generate_v4(),'Admin User','admin@example.com',NULL,'admin','+10000000000'),
  (uuid_generate_v4(),'Driver One','driver1@example.com',NULL,'driver','+10000000001'),
  (uuid_generate_v4(),'Dispatcher','dispatch@example.com',NULL,'dispatcher','+10000000002');

INSERT INTO vehicles (reg_number,make,model,year,mileage,status,license_expiry,insurance_expiry,notes)
VALUES
  ('ABC123','Toyota','Coaster',2018,120000,'active','2026-12-31','2026-06-30','10-seater coach'),
  ('XYZ789','Mercedes','Sprinter',2020,80000,'active','2027-05-01','2026-11-15','Luxury shuttle');

-- Simple driver entries (link to existing users if desired)
INSERT INTO drivers (user_id,license_number,license_expiry,pdp_expiry,rating,assigned_vehicle)
SELECT u.id,'DL-'||substr(u.email,1,3),current_date + interval '1 year', current_date + interval '2 year', 4.8, v.id
FROM users u JOIN vehicles v ON u.email LIKE 'driver%'
LIMIT 1;
