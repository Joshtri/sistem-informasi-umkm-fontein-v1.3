import bcrypt from 'bcrypt';
import User from '../models/user.model.js';

// Update user password
export const updateUserPassword = async (req, res) => {
    const { userId, newPassword, confirmNewPassword } = req.body;

    if (newPassword !== confirmNewPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(500).json({ error: `Error updating password: ${error.message}` });
    }
};


// Update user details
export const updateUser = async (req, res) => {
    const { userId, namaLengkap, username } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        user.nama_lengkap = namaLengkap;
        user.username = username;

        await user.save();

        res.json({ message: "User details updated successfully" });
    } catch (error) {
        res.status(500).json({ error: `Error updating user: ${error.message}` });
    }
};