import React from 'react';
import { connect } from 'react-redux';

// actions
import { fetchUsers } from '../actions/index';

class UserList extends React.Component {
    
    componentWillMount() {
        this.props.dispatch(fetchUsers());
    }
    
    _renderUser(user) {
        return (
            <div className="card card-block">
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">Company</p>
                <a href="" className="btn btn-primary">Email</a>
            </div>
        );
    }
    
    render() {
        return (
            <div>
                {this.props.users.map(this._renderUser)}
            </div>
        );
    }
}

export default connect((state) => {
    return {
        users: state.users
    };
})(UserList);