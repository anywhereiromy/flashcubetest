import React from 'react';
import { Link } from "react-router-dom";
import PT from 'prop-types';

function Home ({ match }) {
    return (
        <div className="home" id="home">
            <Link className={match.url === '/' ? "active" : ''} to="/">Home</Link> 
            <Link className={match.url === '/topics' ? "active" : ''} to="/topics">Topics</Link> 
            <Link className={match.url === '/users/:userId/achievements' ? "active" : ''} to="/users/:userId/achievements">Achievements</Link>             
        </div>
    );
}

Home.propTypes = {
    match: PT.object.isRequired,
    userProfile: PT.object.isRequired
}


export default Home;