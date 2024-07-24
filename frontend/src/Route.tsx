import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Host from './pages/Host';
import Question from './pages/Question';

const RouteScreen = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/question' element={<Question/>}/>
                <Route path='/host' element={<Host/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteScreen;