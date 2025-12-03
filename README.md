# NODE-PACKAGE
A secure and flexible OTP generator supporting numeric, hex, and alphanumeric with expiry sessions.

# Pro-OTP-Generator 🔐

A robust and flexible Node.js module for generating and verifying One-Time Passwords (OTPs). This project provides a secure way to create OTPs with customizable options, including length, type (numeric, hex, alphanumeric), and expiration time. It's designed to be easily integrated into various applications requiring secure user authentication.

## 🚀 Features

- **OTP Generation:** Generates OTPs with configurable length, type (numeric, hex, alphanumeric), and expiration time.
- **Secure Randomness:** Uses the `crypto` module for cryptographically secure random number generation.
- **OTP Verification:** Verifies user-provided OTPs against stored sessions, ensuring validity and preventing reuse.
- **Expiration Handling:** Automatically expires OTPs after a specified time, enhancing security.
- **Human-Friendly Option:** Generates human-readable alphanumeric OTPs by excluding easily confused characters.
- **Customizable OTP Types:** Supports numeric, hexadecimal, and alphanumeric OTP generation to suit different application needs.

## 🛠️ Tech Stack

- **Backend:** Node.js
- **Cryptography:** `crypto` (Node.js built-in module)
- **Package Manager:** npm

## 📦 Getting Started

Follow these steps to set up and run the Pro-OTP-Generator in your local environment.

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1.  Usages:

    ```bash
    npm install pro-otp-Genrator
    ```

2.  Install the dependencies (though there are no declared dependencies, this step is good practice):

    ```bash
    npm install
    ```

### Running Locally

Since this library is designed to be integrated into another project, you won't "run" it directly. Instead, you'll import it into your project and use its functions.  Here's a basic example of how you might use it:

1.  Create a new Node.js project or use an existing one.
2.  Copy the `index.js` file into your project.
3.  Use the `generateOTP` and `verifyOTP` functions in your code:

    ```javascript
    const { generateOTP, verifyOTP } = require('./index'); // Adjust path as needed

    // Generate an OTP
    const otpSession = generateOTP({ length: 6, expiresIn: 60 }); // 6-digit OTP, expires in 60 seconds
    console.log("Generated OTP:", otpSession.otp);

    // Simulate user entering the OTP
    const userOTP = otpSession.otp;

    // Verify the OTP
    const verificationResult = verifyOTP(userOTP, otpSession);

    if (verificationResult) {
        console.log("OTP Verified Successfully!");
    } else {
        console.log("OTP Verification Failed.");
    }
    ```

## 📂 Project Structure

```
Pro-OTP-Genrator/
├── index.js             # Main module for OTP generation and verification
├── package.json         # Project metadata and dependencies
├── cryptoModule.env     # Example of using crypto module (not core functionality)
└── README.md            # Project documentation (this file)
```



## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

Deep Buddhadev - [deepbuddhadev135@gmail.com]

## 💖 Thanks

Thank you for using Pro-OTP-Generator! We hope this module helps you build secure and reliable authentication systems.


#
