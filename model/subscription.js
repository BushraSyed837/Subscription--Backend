const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    picture: { type: String, required: true, validate: /^https?:\/\/.+/ },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    dob: { type: String, required: true, match: /^\d{4}-\d{2}-\d{2}$/ },
    profession: { type: String, enum: ['comedian', 'actor', 'actress', 'model'], required: true },
    shoesize: { type: Number },
    haircolor: { type: Number },
    hairlength: { type: Number },
    waistSizeCm: { type: Number },
    heightCm: { type: Number },
    weight: { type: Number }
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;


