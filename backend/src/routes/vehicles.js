const express = require('express');
const db = require('../db');

const router = express.Router();

// Create vehicle
router.post('/', async (req, res) => {
  const { reg_number, make, model, year, mileage, status, license_expiry, insurance_expiry, notes } = req.body;
  const result = await db.query(
    `INSERT INTO vehicles (reg_number,make,model,year,mileage,status,license_expiry,insurance_expiry,notes)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
    [reg_number, make, model, year, mileage || 0, status || 'active', license_expiry, insurance_expiry, notes]
  );
  res.json(result.rows[0]);
});

// List vehicles
router.get('/', async (req, res) => {
  const result = await db.query('SELECT * FROM vehicles ORDER BY created_at DESC');
  res.json(result.rows);
});

// Get vehicle
router.get('/:id', async (req, res) => {
  const result = await db.query('SELECT * FROM vehicles WHERE id=$1', [req.params.id]);
  if (!result.rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(result.rows[0]);
});

// Update vehicle
router.put('/:id', async (req, res) => {
  const fields = ['reg_number','make','model','year','mileage','status','license_expiry','insurance_expiry','notes'];
  const updates = [];
  const values = [];
  let idx = 1;
  for (const f of fields) {
    if (req.body[f] !== undefined) {
      updates.push(`${f}=$${idx++}`);
      values.push(req.body[f]);
    }
  }
  if (updates.length === 0) return res.status(400).json({ error: 'No fields' });
  values.push(req.params.id);
  const q = `UPDATE vehicles SET ${updates.join(',')} WHERE id=$${idx} RETURNING *`;
  const result = await db.query(q, values);
  res.json(result.rows[0]);
});

// Delete vehicle
router.delete('/:id', async (req, res) => {
  await db.query('DELETE FROM vehicles WHERE id=$1', [req.params.id]);
  res.json({ ok: true });
});

module.exports = router;
