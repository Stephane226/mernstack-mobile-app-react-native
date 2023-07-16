import jwt_decode from 'jwt-decode'
import AsyncStorage from '@react-native-community/async-storage'
import Toast from 'react-native-toast-message'
import baseUrl from '../../assets/common/baseUrl'


export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export const loginUser = (user, dispatch) => {
    fetch(`${baseUrl}users/login` ,
     { 
        method: 'POST',
        body : JSON.stringify(user),
        header :{
            Accept : 'application/json',
            'Content-Type' : 'application/json',
        }
     })
     .then((res) => res.json())
     .then((data) => {
        if(data){
            const token = data.token;
            AsyncStorage.setItem('jwt', token)
        }
     })
}