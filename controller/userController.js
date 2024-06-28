const user = require('../model/userModel')


exports.createUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const createUser = new user({

            email,
            password

        });
        await createUser.save()
        return res.status(201).json({ message: "user created ", createUser })


    } catch (error) {
        console.log('user not found');
        res.status(404).json({ message: " user not found" })

    }
}
exports.signIn = async (req, res) => {
    const { email, password } = req.body;
    try {

        const signIn = await user.findOne({ email });

        if (!signIn) {
            return res.status(404).json({ message: 'error' })

        }
        if (signIn.password !== password) {
            return res.status(402).json({ message: 'invalid password' })
        }
        res.status(200).json({ message: " signIn sucesfully", signIn })

    } catch (error) {
        console.log('wrong email and password');
        res.status(500).json({ message: 'error' });
    }
};




