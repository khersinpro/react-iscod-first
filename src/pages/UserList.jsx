import React, { useCallback, useEffect, useState } from 'react';
import UserProfile from '../components/UserProfile';

const UserList = () => {
    const [criteria, setCriteria]         = useState('');
    const [filteredUser, setFilteredUser] = useState([]);
    
    const handleSearch = useCallback(value => {
        setCriteria(value);
    }, []);
    
    useEffect(() => {
        const users                           = ['Eva','Aude','Stéphane','Anne', 'michel'];
        setFilteredUser(users.filter(user => user.toLowerCase().includes(criteria.toLowerCase())))
    }, [criteria]);

    return (
        <div className='container mt-3'>
            <h1>Liste des utilisateurs</h1>
            <input 
                type="text" 
                className='form-control' 
                placeholder='Recherche' 
                onChange={e => handleSearch(e.target.value)}
            />
            <div className='row mt-3'>
                {filteredUser.map((user, key) => ( 
                    <div className="col-lg-3 col-md-4 col-xs-6 mb-3" key={key}>
                        <UserProfile user={user}/>
                    </div>
                ))}
                <div className="col-lg-3 col-md-4 col-xs-6 mb-3 d-flex justify-content-center align-items-center" >
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;