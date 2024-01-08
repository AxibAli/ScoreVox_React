import Api from "../index";
import { endPoints, requestType } from "../../constants/variables";


// Login
export const loginUser = (params) => {
    return Api(`${endPoints.login}`, params, requestType.POST,null) 
}

export const registerUser = (params) => {
    return Api(`${endPoints.register}`, params, requestType.POST,null) 
}

