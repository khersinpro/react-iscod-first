import React, { useCallback, useEffect, useState } from 'react';
import UserProfile from '../components/UserProfile';

const UserList = () => {
    const [criteria, setCriteria]         = useState('');
    const [filteredUser, setFilteredUser] = useState([]);
    const [users, setUsers] = useState(['Eva','Aude','Stéphane','Anne', 'michel']);
    const [errorMessage, setErrorMessage] = useState(false);
    
    const handleSearch = useCallback(value => {
        setCriteria(value);
    }, []);
    
    useEffect(() => {
        setFilteredUser(users.filter(user => user.toLowerCase().includes(criteria.toLowerCase())))
    }, [criteria, users]);

    const handleNewUser = useCallback(event => {
        event.preventDefault();
        if (event.target.username.value !== null && event.target.username.value.length) 
        {
            const newUser = event.target.username.value;
            setUsers([...users, newUser]);
            errorMessage && setErrorMessage(!errorMessage);
        } 
        else 
        {
            !errorMessage && setErrorMessage(!errorMessage);
        }
    }, [users, errorMessage]);

    return (
        <div className='container mt-3'>
            <h1>Liste des utilisateurs</h1>
            <div className="row">
                <div className='col-lg-8 mb-3'>
                    <input type="text" className='form-control' placeholder='Recherche' onChange={e => handleSearch(e.target.value)} />
                </div>
                <form onSubmit={handleNewUser} className='d-flex col-lg-4 mb-3'>
                    <div className='me-2 w-100'>
                        <input type="text" name='username' className='form-control' placeholder='Nouvel utilisateur' />
                        { errorMessage && <p className='fs-6 text-danger'>Vous devez entrer un nom d'utilisateur.</p> }
                    </div>
                    <div>
                        <button type='submit' className='btn btn-primary px-4 px-lg-3'>Créer</button>
                    </div>
                </form>
            </div>
            <div className='row'>
                {filteredUser.map((user, key) => ( 
                    <div className="col-lg-3 col-md-4 col-xs-6 mb-3" key={key}>
                        <UserProfile user={user}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;