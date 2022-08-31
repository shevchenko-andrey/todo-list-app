import Joi from 'joi';
import bcrypt from 'bcryptjs';
import { Document, Model, model, Schema } from 'mongoose';
import { RegExEmail } from '../utils/constants';

// TODO: Use it as an example
/**
 * Interface to model the User Schema for TypeScript.
 * @param email:string
 * @param password:string
 */
export interface IUser extends Document {
  _id: string;
  email: string;
  password: string;
}

const userSchema: Schema<IUser> = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.pre('save', async function cb(next) {
  const salt = bcrypt.genSaltSync(10);

  this.password = bcrypt.hashSync(this.password, salt);

  next();
});

export const joiShema = Joi.object({
  email: Joi.string().regex(RegExEmail),
  password: Joi.string().min(8).max(16)
});

const User: Model<IUser> = model('User', userSchema);

export default User;
