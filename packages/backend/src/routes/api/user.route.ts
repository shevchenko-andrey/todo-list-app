import { Router } from 'express';
import { joiRegisterShema, joiLoginShema } from '../../models/User';
import validate from '../../middlewares/validate.middleware';
import handlerControl from '../../middlewares/handler-control.middleware';
import userController from '../../controllers/user.controler';

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
router.post(
  '/register',
  validate(joiRegisterShema),
  handlerControl(userController.register.bind(userController))
);

router.post(
  '/login',
  validate(joiLoginShema),
  handlerControl(userController.login.bind(userController))
);

export default router;
