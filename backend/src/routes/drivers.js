const express = require('express');
const db = require('../db');

const router = express.Router();

// Create driver
router.post('/', async (req, res) => {
  const { user_id, license_number, license_expiry, pdp_expiry, rating, assigned_vehicle } = req.body;
  const result = await db.query(
    `INSERT INTO drivers (user_id,license_number,license_expiry,pdp_expiry,rating,assigned_vehicle)
     VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
    [user_id, license_number, license_expiry, pdp_expiry, rating || 5, assigned_vehicle]
  );
  res.json(result.rows[0]);
});

// List drivers
router.get('/', async (req, res) => {
  const result = await db.query('SELECT d.*, u.name as user_name, u.email as user_email FROM drivers d LEFT JOIN users u ON d.user_id=u.id ORDER BY d.created_at DESC');
  res.json(result.rows);
});

// Get driver
router.get('/:id', async (req, res) => {
  const result = await db.query('SELECT * FROM drivers WHERE id=$1', [req.params.id]);
  if (!result.rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(result.rows[0]);
});

// Update driver
router.put('/:id', async (req, res) => {
  const fields = ['user_id','license_number','license_expiry','pdp_expiry','rating','assigned_vehicle'];
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
  const q = `UPDATE drivers SET ${updates.join(',')} WHERE id=$${idx} RETURNING *`;
  const result = await db.query(q, values);
  res.json(result.rows[0]);
});

// Delete driver
router.delete('/:id', async (req, res) => {
  await db.query('DELETE FROM drivers WHERE id=$1', [req.params.id]);
  res.json({ ok: true });
});

module.exports = router;
