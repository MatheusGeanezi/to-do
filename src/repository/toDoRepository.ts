import { IToDo } from "../interfaces/Itodo"
import toDo from "../models/to-do"


export const getAllToDosRepository = async () => {
    const card = await toDo.find({})
    return card
}

export const postToDosRepository = async (body: object) => {
    const card = await toDo.create(body)
    return card
}

export const updateToDosRepository = async (_id: string, setUpdate: IToDo) => {
    const card = await toDo.updateOne({
        _id: _id,
    },
    { $set: setUpdate })
    return card
}

export const getOneToDosRepository = async (_id: string) => {
    console.log("🚀 ~ file: toDoRepository.ts:19 ~ getOneToDosRepository ~ _id", _id)
    const card = await toDo.findOne({_id:_id})
    return card
}
