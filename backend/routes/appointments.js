// routes/appointments.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');
const Appointment = require('../models/Appointment.js');

// @route   POST api/appointments
// @desc    Create an appointment
// @access  Private
router.post('/', auth, async (req, res) => {
    try {
        const { service, date, time } = req.body;

        const newAppointment = new Appointment({
            user: req.user.id,
            service,
            date,
            time
        });

        const appointment = await newAppointment.save();

        res.json(appointment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/appointments
// @desc    Get all appointments for a user
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const appointments = await Appointment.find({ user: req.user.id }).sort({ date: -1 });
        res.json(appointments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
