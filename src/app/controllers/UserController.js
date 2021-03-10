import User from '../models/User.js';

class UserController {
    async index(req, res) {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch (err) {
            return res.status(500).send({ error: 'An error has occurred' });
        }
    }

    async save(req, res) {
        try {
            const hasUser = await User.findOne({ name: req.body.name });

            if (hasUser) {
                return res
                    .status(400)
                    .json({ error: `${req.body.name} already exists!` });
            }

            const user = await User.create(req.body);
            return res.status(201).json(user);

        } catch (error) {
            return res.status(500).json({
                error: `An error has occurred: ${req.body.name}!`,
                data: error,
            });
        }
    }
}

export default new UserController();
