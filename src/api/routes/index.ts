import {Router} from "express"
import express from "express"
import homeRouteHandler from "./home";
import getPropertiesHandler,{addPropertyHandler, getPropertyHandler} from "./properties";
import getFeaturesRouteHandler from "./features";
import { loginHandler,getCurrentUserHandler,registerHandler,logoutHandler ,verifyTokenHandler,refreshTokenHandler} from "./auth/index";

const router = Router()

// Middleware to parse JSON bodies
router.use(express.json());

// Public routes
// landing page
router.get('/home', homeRouteHandler)

router.get('/properties', getPropertiesHandler)
router.post('/properties', addPropertyHandler)
router.get('/properties/:id', getPropertyHandler)
router.get('/features', getFeaturesRouteHandler)

// Authentication routes
router.post('/auth/login', loginHandler)
router.post('/auth/register', registerHandler)
router.post('/auth/logout', logoutHandler)
router.post('/auth/verify', verifyTokenHandler)
router.post('/auth/refresh', refreshTokenHandler)
router.get('/auth/me', getCurrentUserHandler)


export default router;