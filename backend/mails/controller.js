import MailModel from "./model.js"; //initial importing in name of schema (#error)
import mongoose from "mongoose";

export const createMail = async (req, res) => {
  const { sender, reciever, type, body ,subject,status} = req.body;
  try {
    const mail = new MailModel({  
      sender,
      subject,
      reciever,
      type,
      body,
      status,
    });
    await mail.save();     //YAHAN EAK ERROR THA (#err)
    res.status(201).json(mail); //new prop get added in this mail
  } catch (error) {
    res.status(500).json({ message: "Error creating mail", error });
  }
};

export const getMails = async (req, res) => {
  try {
    const mails = await MailModel.find();
    res.status(200).json(mails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMail = async (req, res) => {
  const { id } = req.params;
  // console.log(id)
  try {
    const tbd = await MailModel.findByIdAndDelete(id);
    // console.log(tbd);

    if (!tbd) {
      return res.status(404).json({ message: 'mail not found' });
    }
    res.status(200).json({ message: 'mail deleted', tbd });

  } catch (error) {
    res.status(500).json({ message: "Error deleting mail", error });
  }
};

export const starMail = async (req, res) => {
  const { id } = req.params;
  try {
    const mail = await MailModel.findById(id);
    mail.starred = !mail.starred;
    await mail.save();
    res.status(200).json(mail);
  } catch (error) {
    res.status(500).json({ message: "Error starring mail", error });
  }
};

export const markAsRead = async (req, res) => {
  const { id } = req.params;
  try {
    const mail = await MailModel.findById(id);
    // if(mail.status == 'seen')mail.status = 'unseen';
    // else mail.status = 'seen';
    mail.status = 'seen';
    await mail.save();
    res.status(200).json(mail);
  } catch (error) {
    res.status(500).json({ message: "Error marking mail as read", error });
  }
};
