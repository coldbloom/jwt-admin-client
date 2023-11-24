import {ILoginRequest} from "../../api/auth/types";
import {loginFailure, loginStart, loginSuccess} from "./authReducer";
import {Dispatch} from "@reduxjs/toolkit";
import api from "../../api";

export const loginUser = (data: ILoginRequest) =>
    async (dispatch: Dispatch<any>): Promise<void> => {
        try {
            dispatch(loginStart())

            const res = await api.auth.login(data)

            dispatch(loginSuccess(res.data.accessToken))

        } catch (e: any) {
            console.error(e)

            dispatch(loginFailure(e.message))
        }
    }