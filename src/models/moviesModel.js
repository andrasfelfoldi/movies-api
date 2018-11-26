import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MoviesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    }
});