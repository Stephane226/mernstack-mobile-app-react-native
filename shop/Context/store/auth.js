import React, { useEffect, useReducer, usereffect, useState} from 'react'
import jwt_decode from 'jwt-decode'
import AsyncStorage from '@react-native-async-storage/async-storage'
//import { AsyncStorage } from 'react-native';

import authReducer from '../reducers/auth.reducer'
import { setCurrentUserUser } from '../actions/auth.actions'
import AuthGlobal from './auth.global'

const Auth = (props) => {
    const [stateUser, dispatch] = useReducer(authReducer, {
        isAuthenticated: null,
        user: {}
    });
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        setShowChild(true);
        if (AsyncStorage.jwt) {
            const decoded = AsyncStorage.jwt ? AsyncStorage.jwt : "";
            if (setShowChild) {
                dispatch(setCurrentUserUser(jwt_decode(decoded)))
            }
        }
        return () => setShowChild(false);
    }, [])


    if (!showChild) {
        return null;
    } else {
        return (
            <AuthGlobal.Provider
                value={{
                    stateUser,
                    dispatch
                }}
            >
                {props.children}
            </AuthGlobal.Provider>
        )
    }
};

export default Auth;