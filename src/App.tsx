import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Route, Switch, useHistory} from 'react-router-dom';

import {SignIn, useStylesSignIn} from "./pages/SignIn";
import TwitterIcon from '@material-ui/icons/Twitter'
import {Home} from "./pages/Home";
import {fetchUserData, setUserData} from "./store/ducks/user/actionCreators";
import {Layout} from "./pages/Layout";
import {selectIsAuth, selectUserStatus} from "./store/ducks/user/selectors";
import {LoadingStatus} from "./store/types";
import CircularProgress from "@material-ui/core/CircularProgress";


function App() {
    const classes = useStylesSignIn()
    const history = useHistory()
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)
    const loadingStatus = useSelector(selectUserStatus)
    const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING

    useEffect(() => {
        dispatch(fetchUserData())
    }, [])

    useEffect(() => {
        if (!isAuth && isReady) {
            history.push('/signin')
        } else {
            history.push('/home')
        }
    }, [isAuth, isReady])

    if (!isReady) {
        return (
            <div className={classes.centered}>
                <TwitterIcon color='primary' style={{width: 80, height: 80}}/>
            </div>
        )
    }

    return (
        <div className="App">
            <Switch>
                <Route path='/signin' component={SignIn}/>
                <Layout>
                    <Route path='/home' component={Home}/>
                    {/*<Route path='/user' component={User}/>*/}
                </Layout>
            </Switch>
        </div>
    );
}

export default App;
