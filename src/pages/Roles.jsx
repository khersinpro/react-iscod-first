import React, { useCallback, useEffect, useState } from 'react';

const roles = ['utilisateur', 'administrateur', 'moderateur', 'comptable', 'directeur', 'secretaire'];

const Roles = () => {
    const [criteria, setCriteria] = useState('');
    const [rolesFiltered, setRolesFiltered] = useState([]);

    const handleChange = useCallback((event) => {
        setCriteria(event.target.value);
    }, []);

    useEffect(() => {
        setRolesFiltered(roles.filter(role => role.toLowerCase().includes(criteria.toLowerCase())));
    }, [criteria]);

    return (
        <div className='container mt-3'>
            <h1>Listes de rôles</h1>
            <input type="text" onChange={handleChange} className='form-control' placeholder='Recherche' />
            {rolesFiltered.length
                ?   rolesFiltered.map((role, key) => <li key={key}>{role}</li>)
                :   <p className='mt-2 text-info fw-semi-bold'>Aucun résultat...</p>
            }
        </div>
    );
};

export default Roles;