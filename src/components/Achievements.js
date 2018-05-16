import React from 'react';
import PT from 'prop-types';

class Achievements extends React.Component {
    render () {
        const { id } = this.props.userProfile
        return (
            <div>
                {id ? <div className="achievements">
                        Achievements
                    </div> 
                    :
                    <div className="login">Login</div>}
            </div>
        );
    }

    static propTypes = {
        userProfile: PT.object.isRequired
    }
}

export default Achievements;