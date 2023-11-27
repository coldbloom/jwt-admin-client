import React from 'react';
import Login from "./Components/Login";
import {useSelector} from "react-redux";
import {IRootState} from '../../store'
import {useAppDispatch} from "../../store";
import {logoutUser} from "../../store/auth/actionCreators";

const Main = () => {
    const dispatch = useAppDispatch();
    const isLoggedIn = useSelector(
        (state:IRootState) => !!state.auth.authData.accessToken
    );

    const renderProfile = () => {
        return (
            <div>
                <p>Вы успешно авторизовались!</p>
                <button onClick={() => dispatch(logoutUser())}>Logout</button>
            </div>
        );
    };

    return (
        <div>
            <h1>Main</h1>
            {isLoggedIn
                ? renderProfile()
                : <Login />
            }
        </div>
    );
};

export default Main;