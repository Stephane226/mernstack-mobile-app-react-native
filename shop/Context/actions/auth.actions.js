import jwt_decode from 'jwt-decode'
import AsyncStorage from '@react-native-async-storage/async-storage'
//import { AsyncStorage } from 'react-native';
import Toast from 'react-native-toast-message'
import baseUrl from '../../assets/common/baseUrl'
import { decode } from 'punycode'


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
            AsyncStorage.setItem('message2', 'you are logged')
            const decoded = jwt_decode(token)
            dispatch(setCurentUser(decoded , user)) 

        }else{
           logoutUser(dispatch)
        }
     }).catch((err) =>{
        Toast.show({
            topOffset : 60,
            type : 'error',
            text1 :'please provide correct credentials',
            text2 : ''
        })
     })
}

export const getUserProfile = (id) =>{
   fetch(`${baseUrl}users/${id}` , {
    method: 'GET',
    body : JSON.stringify(id),
    header :{
        Accept : 'application/json',
        'Content-Type' : 'application/json',
    }
   })
   .then((res) => res.json())
   .then((data) => console.log(data)) 

}


export const logoutUser = (dispatch) =>{
    AsyncStorage.removeItem('jwt');
    dispatch(setCurentUser({}))
}

export const  setCurentUser = (decoded, user) =>{
    return{
         type : SET_CURRENT_USER,
         payload : decoded,
         userProfile : user
    }
}