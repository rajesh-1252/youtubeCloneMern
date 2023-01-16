"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const useSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: [true, "Please Provide Name"],
        unique: [true, "Account with this username already exist"],
    },
    email: {
        type: String,
        required: [true, "Please Provide Name"],
        unique: [true, "Account with this Email Id already exist"],
    },
    password: {
        type: String,
        required: [true, "Please Provide password"],
        minlength: 6,
    },
    confirmPassword: {
        type: String,
        required: [true, "Please Provide confirm Password"],
    },
    videos: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "videos",
    },
    // subscriber of my channel
    subscribers: {
        type: Array,
        default: [],
    },
    // the channel that im subscribing aka(following)
    userSubscribedChannel: {
        type: Array,
        default: [],
    },
    playList: {},
});
