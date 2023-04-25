import bcrypt from "bcrypt";
import { captialFirstLetter } from "../config/capitalLetter.js";
import User, { validateUser } from "../models/user.js";
import otpGenerator from 'otp-generator';
import nodemailer from 'nodemailer'

export const userReg = async (req, res) => {
    
    const saltRounds = 10;
    const val = validateUser(req.body);
    if (val) return res.status(400).json({ message: val.error });
    if (!req.body.password)
      return res.status(400).json({ message: "please enter password" });
    let email = captialFirstLetter(req.body.email);
    let firstName = captialFirstLetter(req.body.firstName);
    let lastName = captialFirstLetter(req.body.lastName);
    let exUserPhone = await User.findOne({ mobileNo: req.body.mobileNo });
    let exUserEmail = await User.findOne({ email: email });
    if (exUserEmail)
      return res.status(400).json({ message: "email already register" });
    if (exUserPhone)
      return res.status(400).json({ message: "Phone No already exists" });
      bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      let register = new User({       
        email: email,
        password: hash,
        firstName: firstName,
        lastName: lastName,
        dob: req.body.dob,
        gender: req.body.gender?.toLowerCase(),
        bloodGroup: req.body.bloodGroup,       
        mobileNo: req.body.mobileNo,
       
      });
      try {
        let User = await register.save();
        res.status(201).json({ message:User});
      } catch (error) {
        res.status(400).json({ message:error.message });
      }
    });
  };
  export const login = async (req, res) => {
    let email = captialFirstLetter(req.body.email);
    let foundUser = await User.findOne({ email: email });
    if (!req.body.email)
      return res.status(400).json({ message: "please enter email" });
    if (!req.body.password)
      return res.status(400).json({ message: "please enter password" });
    if (foundUser) {
      if (foundUser.isAdmin == false && foundUser.isBlock == true)
        return res.status(400).json({ message: "your are blocked user" });      
      bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
        if (result) {
          try {
            const token = jwt.sign({ id:foundUser?._id }, process.env.JWT,);
            res
              .header("hrms-auth-token", token)
              .json({ message: "login successfully", token: token });
          } catch (error) {
            res.status(400).json({ message: error.message });
          }
        } else {
          res.status(400).json({ message: "please enter correct password" });
        }
      });
    } else {
      res.status(404).json({ message: "user not found" });
    }
  };

  export const otpGenrate = async (req, res) => {
    const { email, mobile } = req.body;
  
    // Generate OTP
    const otp = otpGenerator.generate(6, { alphabets: false, upperCase: false, specialChars: false });
  
    // Set up Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'gokila1331@gmail.com',
        pass: '02D5BCB74AB3A7C75EBAC62D4F7F9F2D44DD'
      }
    });
  
    // Set up email options
    const mailOptions = {
      from: 'gokila1305@gmail.com',
      to: email,
      subject: 'Your One-Time Password',
      text: `Your One-Time Password is: ${otp}`
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error sending OTP');
      } else {
        console.log('Email sent: ' + info.response);
  
        // Send OTP to mobile
        // Code for sending OTP to mobile goes here
  
        res.status(200).send('OTP sent successfully');
      }
    });
  }