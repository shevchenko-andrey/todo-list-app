import { Document, Model, model, Schema } from 'mongoose';
import Joi from 'joi';
import { RegExYear } from '../utils/constants';
// TODO: Use it as an example
/**
 * Interface to model the User Schema for TypeScript.
 * @param title:string
 * @param description:string
 * @param year:string
 * @param public:boolean
 * @param completed:boolean
 */
export interface ITodo extends Document {
  title: string;
  userId: string;
  description: string;
  year: string;
  public: boolean;
  completed: boolean;
}

const todoSchema: Schema<ITodo> = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    isPublic: {
      type: Boolean,
      default: false
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    userId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export const joiShema = Joi.object({
  title: Joi.string().min(10).max(30).required(),
  description: Joi.string().min(10).max(100).required(),
  year: Joi.string().length(4).pattern(RegExYear).required(),
  isPublic: Joi.boolean(),
  isCompleted: Joi.boolean()
});

const Todo: Model<ITodo> = model('Todo', todoSchema);

export default Todo;
