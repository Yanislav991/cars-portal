import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
    username: string,
    hashedPassword: string
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true }
});

export default mongoose.model<IUser>('User', userSchema);