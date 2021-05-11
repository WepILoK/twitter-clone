import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Route, Switch, useHistory} from 'react-router-dom';

import {SignIn} from "./pages/SignIn";
import {Home} from "./pages/Home";
import {AuthApi} from "./services/api/authApi";
import {setUserData} from "./store/ducks/user/actionCreators";
import {Layout} from "./pages/Layout";
import {selectIsAuth} from "./store/ducks/user/selectors";


function App() {
    const history = useHistory()
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)

    const checkAuth = async () => {
        try {
            const {data} = await AuthApi.getMe()
            dispatch(setUserData(data))
            // history.replace('/home')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])

    useEffect(() => {
        if (isAuth) {
            history.push('/home')
        }
    }, [isAuth])

    return (
        <div className="App">
            <Switch>
                <Route path='/signIn' component={SignIn}/>
                <Layout>
                    <Route path='/home' component={Home}/>
                    {/*<Route path='/user' component={User}/>*/}
                </Layout>
            </Switch>
        </div>
    );
}

export default App;
