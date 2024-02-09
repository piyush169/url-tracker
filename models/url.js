const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema({
    shortUrl: {
        type: String,
        unique: true
    },
    origonalUrl: {
        type: String,
        required: true,
    },
    urlAnalytics: [ {timestamps: { type: String } , visits: { type: Number }} ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
 },
 {timestamps: true}
);

const Url = mongoose.model('url' , UrlSchema);

module.exports = Url;

