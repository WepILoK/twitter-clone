import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {Route, Switch, useHistory} from 'react-router-dom';

import {SignIn} from "./pages/SignIn";
import {Home} from "./pages/Home";
import {AuthApi} from "./services/api/authApi";
import {setUserData} from "./store/ducks/user/actionCreators";


function App() {
    const history = useHistory()
    const dispatch = useDispatch()

    const checkAuth = async () => {
        try {
            const {data} = await AuthApi.getMe()
            dispatch(setUserData(data))
            history.replace('/home')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <div className="App">
            <Switch>
                <Route path='/signIn' component={SignIn}/>
                <Route path='/' component={Home}/>

            </Switch>
        </div>
    );
}

export default App;
