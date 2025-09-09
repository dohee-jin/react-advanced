import React from 'react';
import ZustandCounter from "./zustand-practice/components/ZustandCounter.jsx";
import {useCounterScore} from "./zustand-practice/store/counterStroe.js";
import Header from "./zustand-practice/components/Header.jsx";
import Auth from "./zustand-practice/components/Auth.jsx";
import {useAuthStore} from "./zustand-practice/store/authStore.js";
import UserProfile from "./zustand-practice/components/UserProfile.jsx";

const App = () => {

    const {isLoggedIn} = useAuthStore();

    return (
        <>
            <Header />
            { isLoggedIn ? <UserProfile /> : <Auth /> }
            <ZustandCounter />
        </>
    );
};

export default App;