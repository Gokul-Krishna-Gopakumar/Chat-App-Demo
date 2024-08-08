const mongoose = require("mongoose");

const textSchema = new mongoose.Schema(
  {
    chatId: String,
    senderId: String,
    text: String,
  },
  {
    timestamps: true,
  }
);

const textModel = mongoose.model("Message", textSchema);

module.exports = textModel;
