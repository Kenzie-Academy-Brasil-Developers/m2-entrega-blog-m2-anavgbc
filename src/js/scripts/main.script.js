import Elements from "../controllers/main.controller.js";
import BtnPost from "../models/main.models.js"

Elements.header();
BtnPost.logout();

Elements.posts();
BtnPost.editContent();


