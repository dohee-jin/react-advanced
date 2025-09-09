import React, { useState } from 'react';

import Counter from './optimizing/components/Counter/Counter';
import Header from './optimizing/components/Header';
import { log } from './optimizing/log';
import './App.css';
import ConfigureCounter from "./optimizing/components/Counter/ConfigureCounter.jsx";

const App = () => {
    log('<App /> rendered');

    const [chosenCount, setChosenCount] = useState(0);

    // 끌어올리기용 함수
    const setCounterHandler = (number) => {
        setChosenCount(number)
    }
    return (
        <>
            <Header />
            <main>
                <ConfigureCounter onSet={setCounterHandler}/>
                <Counter key={chosenCount} /* 강제로 키를 변경시켜서 리렌더링 되게 함. 리액트는 키가 변경되면 상태를 원래대로 되돌림 */ initialCount={chosenCount} />
            </main>
        </>
    );
};

export default App;
