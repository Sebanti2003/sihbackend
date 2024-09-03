import { Imageupload } from "../models/imageupload.model.js";
import AppError from "../utils/Error.js";

export const uploadimage = async function (req, res, next) {
  try {
    const { name = "Plant", photo } = req.body;
    const newimage = await Imageupload.create({
      name,
      photo,
    });

    res.status(201).json({
      status: "success",
      data: newimage,
    });
  } catch (error) {
    next(new AppError(error.message, 404, error));
  }
};
