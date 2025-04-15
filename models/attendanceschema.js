const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['Present', 'Absent'],
        default: 'Absent',
    },
}, { timestamps: true });