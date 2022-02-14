import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './backend/firebase';
import Login from './components/Login';
import Header from './components/Header';
import Widgets from './components/Widgets';
import Sidebar from './components/Sidebar';
import Feeds from './components/Feeds';
import { login } from './features/userSlice';
import Home from './components/appBody/Home';

function App() {
    // const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(
                    login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                        photoUrl: userAuth.photoURL,
                    })
                );
            }
        });
    })

    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route exact path="/" element={ <Login /> } />
                    <Route exact path="/hom" element={
                        <div className='app-body'>
                            <Header/>
                            <Sidebar />
                            <Feeds />
                            <Widgets />
                        </div>
                    } />
                    <Route exact path='/home' element={<Home/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;