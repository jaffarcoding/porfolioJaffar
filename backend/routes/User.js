import express from "express";
import { addProject, addTimeline,contact, deleteProject, deleteTimeline, getUser, login, logout,myProfile, update } from "../controller/Users.js";
 import {isAuthenticated} from "../middleware/auth.js";

export const UserRotes = express.Router();

 UserRotes.route("/login").post(login);

 UserRotes.route("/logout").get(logout);

 UserRotes.route("/user").get(getUser);

 UserRotes.route("/me").get(isAuthenticated,myProfile);

 UserRotes.route("/admin/update").put(isAuthenticated,update);

 UserRotes.route("/admin/timeline/add").post(isAuthenticated,addTimeline)

 UserRotes.route("/admin/project/add").post(isAuthenticated,addProject);

 UserRotes.route("/admin/timeline/:id").delete(isAuthenticated,deleteTimeline);


 UserRotes.route("/admin/project/:id").delete(isAuthenticated,deleteProject);
 

 UserRotes.route("/contact").post(contact);