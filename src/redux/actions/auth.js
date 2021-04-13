import axios from 'axios';
import {LOGIN_SUCCESS,LOGIN_FAIL,USER_LOADED_SUCCESS,USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,AUTHENTICATED_FAIL,LOGOUT} from './auth_ac'
// import {connect} from 'react-redux';
// const login = (props) =>{
//     console.log(props);

    
// }
// export default login;
export const load_users = () => async dispatch =>{
    if (localStorage.getItem('access')){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'JWT '+ localStorage.getItem('access')
            }
        };
        try {
            const res = await axios.get('http://127.0.0.1:8000/auth/users/me/', config);
    
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            });
    
            
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAIL
            })
        }
    } else {
        dispatch({
            type: USER_LOADED_FAIL
        })
    }
}

export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }; 

        const body = JSON.stringify({ token: localStorage.getItem('access') });

        try {
            const res = await axios.post('http://127.0.0.1:8000/auth/jwt/verify/', body, config)

            if (res.data.token) {
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                });
            } else {
                dispatch({
                    type: AUTHENTICATED_FAIL
                });
            }
        } catch (err) {
            dispatch({
                type: AUTHENTICATED_FAIL
            });
        }

    } else {
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
};
export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
};
const login = (props) => async dispatch => {
    console.log(props);
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('http://127.0.0.1:8000/auth/jwt/create/',props, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(load_users())
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
};
export default login;






















// export const login = (email, password) => dispatch=>{
    
//     console.log(email,password);
//     try {
//         const res =  axios.post(`http://127.0.0.1:8000/auth/jwt/create/`);

//         dispatch({
//             type: LOGIN_SUCCESS,
//             payload: res.data
//         });

        
//     } catch (err) {
//         dispatch({
//             type: LOGIN_FAIL
//         })
//     }
// };

// const mapDispatchToProps = (dispatch) =>{
//     dispatch({
//         type:'LOGIN_SUCESS',

//     })

// }
// export default connect(null,mapDispatchToProps)(login);
