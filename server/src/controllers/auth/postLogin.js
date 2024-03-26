import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (user && (await bcrypt.compare(password, user.password))) {
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
      // ユーザー情報を返却
      return res.status(200).json({
        userDetails: {
          email: user.email,
          token,
          username: user.username,
        },
      });
    }

    return res.status(400).send("Invalid credentials. Please try again");
  } catch (err) {
    return res.status(500).send("Something went wrong. Please try again");
  }
};
