import KoaRouter from "koa-router";
import IndexController from "../controller/IndexController";
import LoginController from "../controller/LoginController";
import AuthMiddleware from "../middleware/AuthMiddleware";
import AdminController from "../controller/AdminController";
import UploadController from "../controller/UploadController";

const router = new KoaRouter({prefix: '/admin'});

// router.use(AuthMiddleware);

router.post('/login', LoginController.index);

router.post('/upload', UploadController.upload);

router.post('/', AdminController.createAdmin);

router.put('/:id', AdminController.editAdmin);

router.delete('/:id', AdminController.deleteAdmin);

router.get('/list', AdminController.getAdminList);

router.get('/', IndexController.index);

router.get('/:id', AdminController.getAdmin);




export default router;