import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})

export default mongoose.model('tasks', userSchema)