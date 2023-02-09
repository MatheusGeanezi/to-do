import { Schema, model, connection, Model } from 'mongoose';

type toDoType = {
    title: string,
    desc: string,
    status: string,
}

const schema = new Schema<toDoType>({
    title: { type: String, required: true },
    desc: String,
    status: String,

})

const modelName: string = 'toDo'

export default (connection && connection.models[modelName]) ?
    connection.models[modelName] as Model<toDoType> : model<toDoType>(modelName, schema);