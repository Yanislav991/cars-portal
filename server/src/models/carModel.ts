import mongoose, { Schema, Document } from 'mongoose'

export interface ICar extends Document {
    make: String;
    model: String;
    horsePower: Number;
    manufactureYearStart: Number;
    manufactureYearEnd: Number;
    imageUrl: String;
}

const carSchema = new Schema<ICar>({
    make: { type: String, required: true },
    model: { type: String, required: true },
    horsePower: { type: Number, required: true },
    manufactureYearStart: { type: Number, required: true },
    manufactureYearEnd: { type: Number, required: true },
    imageUrl: { type: String, required: true }
});

export default mongoose.model<ICar>('Car', carSchema);