import mongoose, {Schema} from "mongoose";

const cardSchema = new Schema (
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        price: {type: Number, required: true},
        area: {type: String, required: true},
    },
);

const CardModel = mongoose.models.CardTemplate || mongoose.model("CardTemplate", cardSchema);

module.exports = CardModel;
