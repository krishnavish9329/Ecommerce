import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { categoryControler, createCategoryController, deleteCategoryControler, singleCategoryControler, updateCategoryController } from '../controllers/categoryController.js';

const router = express.Router();

//router

router.post('/create-category',requireSignIn,isAdmin, createCategoryController)

//Update Routes

router.put('/update-category/:id', requireSignIn,isAdmin, updateCategoryController)

//getAll category

router.get('/get-category', categoryControler)

//single get category

router.get('/single-category/:slug', singleCategoryControler)

//delete category

router.get('/single-category/:id',requireSignIn,isAdmin, deleteCategoryControler)

export default router