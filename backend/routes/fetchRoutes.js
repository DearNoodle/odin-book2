const { Router } = require('express');
const controller = require('../controllers/fetchController');
const { jwtAuth } = require('./middlewares/routeAuth');

const router = Router();

router.get('/home-page', jwtAuth, controller.getHomePageData);
router.get('/follows-page', jwtAuth, controller.getFollowsPageData);
router.get('/chats-page', jwtAuth, controller.getChatsPageData);
router.get('/profile-page', jwtAuth, controller.getProfilePageData);

router.get('/user-page/user/:id', jwtAuth, controller.getUserPageData);
router.get('/post-page/post/:id', jwtAuth, controller.getPostPageData);
router.get('/chat-page/user/:id', jwtAuth, controller.getChatPageData);

module.exports = router;
