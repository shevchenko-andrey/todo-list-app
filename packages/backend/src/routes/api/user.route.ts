import { Router } from 'express';
import { joiShema } from '../../models/User';
import validate from '../../middlewares/validate.middleware';
import handlerControl from '../../middlewares/handler-control.middleware';
import userController from '../../controllers/user.controler';

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
router.post('/register', validate(joiShema), handlerControl(userController.register));

router.post('/login', validate(joiShema), handlerControl(userController.login));

export default router;
