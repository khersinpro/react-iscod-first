import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserProfile = (props) => {
    return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1680696366952-7992c2da60fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.user}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link href="#" className="btn btn-primary">Go somewhere</Link>
        </div>
    </div>
    );
};

UserProfile.propTypes = {
    user: PropTypes.string
}

export default UserProfile;