import {Router} from "express"
import homeRouteHandler from "./home";

const router = Router()


router.get('/home', homeRouteHandler)


export default router;