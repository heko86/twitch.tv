import User from "../../models/User.js";
import Channel from "../../models/Channel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.exists({ email });

    if (userExists) {
      return res.status(409).send("E-mail already in use");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newChannel = await Channel.create({});

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
      channel: newChannel._id,
    });

    // JWTトークン作成
    const token = jwt.sign(
      // JWTトークンで暗号化したいユーザーの詳細
      {
        userId: user._id,
        email: user.email,
      },
      // シークレット
      process.env.TOKEN_KEY,
      // 追加の設定
      {
        expiresIn: "8h",
      }
    );

    return res.status(201).json({
      userDetails: {
        email: user.email,
        username,
        token,
      },
    });

    // 登録ユーザーとJWTのデータを含む成功レスポンスをユーザーに送信
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error occured. Please try again");
  }
};
