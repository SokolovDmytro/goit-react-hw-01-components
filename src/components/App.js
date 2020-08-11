import React from 'react';
import Profile from './profile/Profile';
import user from './profile/user.json';

const App = () =>(
    <div>
        <Profile user={user}/>
    </div>
);

export default App;