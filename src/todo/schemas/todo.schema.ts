import { Schema } from "mongoose"

export const  TodoSchema = new Schema({
    title: String,
    description: String,
    Status: Boolean,
    createdAt: { type:Date, default: Date.now }

})