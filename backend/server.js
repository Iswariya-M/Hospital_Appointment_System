const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'aishu@2003',
    database: 'hospital_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const sql = `INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)`;
    const values = [username, email, password, 'user'];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error signing up:', err);
            res.status(500).json({ message: 'Failed to signup' });
            return;
        }
        console.log('User signed up successfully');
        res.status(200).json({ message: 'Successfully signed up' });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, result) => {
        if (err) {
            console.error('Error logging in:', err);
            res.status(500).json({ message: 'Failed to login' });
            return;
        }

        if (result.length === 0) {
            console.log('User not found');
            res.status(404).json({ message: 'User not found' });
            return;
        }

        console.log('User logged in successfully:', result[0]);
        const userRole = result[0].role;
        if (userRole === 'admin') {
            res.status(200).json({ message: 'Admin logged in successfully' });
        } else {
            res.status(200).json({ message: 'User logged in successfully' });
        }
    });
});

app.get('/appointments', (req, res) => {
    const today = new Date().toISOString().split('T')[0];
    const query = `SELECT * FROM appointments WHERE date >= ? ORDER BY date ASC`;
    db.query(query, [today], (error, results, fields) => {
        if (error) throw error;
        res.send(results);
    });
});


app.post('/appointments', (req, res) => {
    const { name, email, doctor, phone, date } = req.body;

    db.query('SELECT COUNT(*) AS count FROM appointments WHERE doctor = ? AND date = ?', [doctor, date], (error, results, fields) => {
        if (error) throw error;
        const appointmentCount = results[0].count;
        if (appointmentCount >= 51) {
            res.status(400).json('Booking for this doctor on this date is full.');
        } else {
            let timeSlot;
            if (appointmentCount < 10) {
                timeSlot = '9:30 AM - 10:30 PM';
            } else if(appointmentCount < 20){
                timeSlot = '10:30 PM - 11:30 PM';
            } else if(appointmentCount < 30){
                timeSlot = '2:30 PM - 3:30 PM';
            } else if(appointmentCount < 40){
                timeSlot = '3:30 PM - 4:30 PM';
            } else {
                timeSlot = '6:30 PM - 7:30 PM';
            }

            db.query('INSERT INTO appointments (name, email, doctor, phone, date, time_slot) VALUES (?, ?, ?, ?, ?, ?)', [name, email, doctor, phone, date, timeSlot], (error, results, fields) => {
                if (error) throw error;
                res.json({ message: 'Appointment booked successfully', timeSlot: timeSlot });
            });
        }
    });
});



app.post('/doctors', (req, res) => {
    const { doctorName, speciality, dob, age, location, phoneNumber } = req.body;
    const sql = `INSERT INTO doctors (doctor_name, speciality, dob, age, location, phone_number) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [doctorName, speciality, dob, age, location, phoneNumber];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error adding doctor:', err);
            res.status(500).json({ message: 'Failed to add doctor' });
            return;
        }
        console.log('Doctor added successfully');
        res.status(200).json({ message: 'Doctor added successfully' });
    });
});


app.get('/doctors', (req, res) => {
    db.query('SELECT * FROM doctors', (error, results, fields) => {
        if (error) {
            console.error('Error getting doctors:', error);
            res.status(500).json({ message: 'Failed to get doctors' });
            return;
        }
        res.send(results);
    });
});

app.get('/doctorName', (req, res) => {
    db.query('SELECT doctor_name,speciality FROM doctors', (error, results, fields) => {
        if (error) {
            console.error('Error getting doctors:', error);
            res.status(500).json({ message: 'Failed to get doctors' });
            return;
        }
        res.send(results);
    });
});


app.delete('/doctors/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM doctors WHERE id = ?', id, (err, result) => {
        if (err) {
            console.error('Error deleting doctor:', err);
            res.status(500).json({ message: 'Failed to delete doctor' });
            return;
        }
        console.log('Doctor deleted successfully');
        res.status(200).json({ message: 'Doctor deleted successfully' });
    });
});

  



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
  

