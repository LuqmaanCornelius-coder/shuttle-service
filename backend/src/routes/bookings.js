const express = require('express');
const db = require('../db');

const router = express.Router();

// Create booking
router.post('/', async (req, res) => {
  const { customer_name, pickup, dropoff, start_time, end_time, vehicle_id, driver_id, status, invoice_number, notes } = req.body;
  const result = await db.query(
    `INSERT INTO bookings (customer_name,pickup,dropoff,start_time,end_time,vehicle_id,driver_id,status,invoice_number,notes)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`,
    [customer_name, pickup, dropoff, start_time, end_time, vehicle_id, driver_id, status || 'pending', invoice_number, notes]
  );
  res.json(result.rows[0]);
});

// List bookings
router.get('/', async (req, res) => {
  const result = await db.query('SELECT * FROM bookings ORDER BY start_time DESC LIMIT 200');
  res.json(result.rows);
});

module.exports = router;
