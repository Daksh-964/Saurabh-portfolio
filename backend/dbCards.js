import mongoose from "mongoose";

const cardSchema =mongoose.Schema({
    title:String,
    description:String,
    imgUrl:String,
});
export default mongoose.model("cards", cardSchema)