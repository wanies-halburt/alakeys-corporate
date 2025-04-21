import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
    },
    userName: {
      type: String,
      required: [true, "Please provide an userName number"],
    },
    otp: {
      type: String,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Please Include your password"],
    },
    isVerified: { type: Boolean, default: false },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
    productsPurchased: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        purchasedAt: { type: Date, default: Date.now },
      },
    ],
    favourites: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
        addedAt: { type: Date, default: Date.now },
      },
    ],
    cart: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
        quantity: { type: Number, default: 1 },
        isPurchased: { type: Boolean, default: false },
        addedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const MAX_TOKENS = 3;

UserSchema.pre("save", async function (next) {
  try {
    const user = this;
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);
    }
    next();
  } catch (err) {
    next(err);
  }
});

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  let options = {};

  // Set token to expire in 1 hour in production mode
  if (process.env.NODE_ENV !== "development") {
    options.expiresIn = "1h";
  } else {
    options.expiresIn = "5d";
  }

  const token = jwt.sign(
    {
      _id: user._id,
      fullName: user.firstname,
      email: user.email,
    },
    "secret",
    options
  );
  user.tokens = user.tokens.concat({ token });
  if (user.tokens.length > MAX_TOKENS) {
    user.tokens = user.tokens.slice(user.tokens.length - MAX_TOKENS);
  }
  await user.save();

  return token;
};

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await Client.findOne({ email });

  if (!user) {
    return false;
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return false;
  }
  return user;
};
const Client = mongoose.models.clients || mongoose.model("clients", UserSchema);

export default Client;
