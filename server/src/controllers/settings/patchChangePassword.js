import User from "../../models/User.js";
import bcrypt from "bcryptjs";

export const patchChangePassword = async (req, res) => {
  try {
    const { userId } = req.user;
    const { password, newPassword } = req.body;

    const userData = await User.findById(userId, {
      password: 1,
    });

    const isPasswordCorrect = await bcrypt.compare(password, userData.password);

    if (!isPasswordCorrect) {
      return res.status(400).send("Invalid Password. Please try again");
    }

    const encryptedPassword = await bcrypt.hash(newPassword, 10);

    await User.updateOne({ _id: userId }, { password: encryptedPassword });
    return res.status(200).send("Password change succesfully");
  } catch (e) {
    console.log(e);
    return res.status(500).send("Something went wrong. Please try again");
  }
};
