const textModel = require("../Models/textModel");

//API for creating message
const createText = async (req, res) => {
  const { chatId, senderId, text } = req.body;

  const message = new textModel({
    chatId,
    senderId,
    text,
  });

  try {
    const response = await message.save();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { createText };
