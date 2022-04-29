import express from 'express';
import { getAllData, addData, updateData } from '../controllers/controllers.js';

const router = express.Router();

router.get('/get', getAllData);

router.get('/get/:id', (req, res) => {
  res.send('menampilkan berdasarkan id');
});

router.post('/add', addData);

router.put('/update/:id', updateData);

router.delete('/delete/:id', (req, res) => {
  res.send('menghapus data tertentu berdasarkan id');
});

export default router;
