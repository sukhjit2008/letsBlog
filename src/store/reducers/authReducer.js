const initState = {
  authError:null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
      case 'LOGIN_ERROR':
      console.log('Loggin Error');
      return {...state, authError:'Login Failed'}
      case 'LOGIN_SUCCESS':
      console.log('Loggin Success');
      return {...state, authError:null}
      case'LOGOUT_SUCCESS':
      console.log('Loggout Success')
      return state
      case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return{...state,authError:null}
      case 'SIGNUP_ERROR':
      console.log('signup error')
      return{...state, authError:action.err.message}
      default:
      return state;
    }
    
};

export default authReducer;