import User from '../../../models/User';
import bcryptjs from 'bcryptjs';
import db from '../../../utils/db';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return
  }

  const { name, email, password } = req.body;

  if (
    !name ||
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 3
  ) {
    res.status(422).json({
      message: 'Validation error'
    })
    return
  }

  await db.connect();

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    res.status(422).json({
      message: 'User already exists!'
    });
    await db.connect();
    return;
  }

  const newUser = new User({
    name,
    email,
    password: bcryptjs.hashSync(password),
    isAdmin: false
  })

  const user = await newUser.save();
  await db.disconnect();

  res.status(201).send({
    message: 'User created!',
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin
  })
}

export default handler