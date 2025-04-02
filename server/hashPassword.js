import bcrypt from 'bcrypt';

const password = 'sa'; // Change this to any password you want to hash
const saltRounds = 10; // Defines how strong the hash will be

bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
        console.error("Error hashing password:", err);
    } else {
        console.log("Hashed password:", hash);
    }
});