const crypto = require("crypto");

function secureRandomIndex(max) {
  const byte = crypto.randomBytes(1)[0];
  return byte % max;
}

function generateOTP(options = {}) {
  const {
    length = 6,
    type = "numeric",
    expiresIn = 20,
    humanFriendly = false,
  } = options;

  let charset = "";
  if (type === "numeric") charset = "0123456789";
  else if (type === "hex") charset = "abcdef0123456789";
  else if (type === "alphanumeric") {
    charset = humanFriendly
      ? "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789"
      : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  } else {
    throw new Error("Invalid OTP type");
  }

  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += charset[secureRandomIndex(charset.length)];
  }

  return {
    otp,
    expiresAt: Date.now() + expiresIn * 1000,
  };
}

function verifyOTP(userOTP, session) {
  if (Date.now() > session.expiresAt) {
    return { success: false, message: "OTP expired" };
   
  }

  if (userOTP !== session.otp) {
    return { success: false, message: "Incorrect OTP" };
  }

  return { success: true, message: "OTP verified" };
}

module.exports = { generateOTP, verifyOTP };
