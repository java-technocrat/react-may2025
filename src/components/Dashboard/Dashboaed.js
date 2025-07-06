import React from 'react'
import { useParams } from 'react-router-dom';

function Dashboaed() {
    const { role } = useParams();
    const isAdmin = role === 'admin';
    return (
        <div style={style.container}>
            <h1 style={style.heading}>
                {isAdmin ? 'Admin Dashboard' : 'User Dashboard'}
            </h1>

            <div style={style.cardContainer}>
                <div style={style.card}>
                    <h3>{isAdmin ? 'User management' : 'Profile Info'}</h3>
                    <p>{isAdmin ? 'Add, edit or remove users and manage permission' : 'View and u;pdate your profile information'}</p>

                </div>
                <div style={style.card}>
                    <h3>{isAdmin ? 'System Analytics' : 'Your Data'}</h3>
                    <p>{isAdmin ? 'Monitor system activity, logs etc' : 'Check your app usage4 and activity insight'}</p>
                </div>
            </div>
        </div>
    )
}

const style = {
    container: {
        padding: '30px',
        background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
        minHeight: '100vh'
    },
    heading: {
        fontSize: '32px',
        marginBottom: '30px',
        textAlign: 'center',
        color: '#333'
    },
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px'
    },
    card: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '12px',
        width: '280px',
        boxShadow: '0, 4px, 12px, rgba(0,0,0,0.1)',
        textAlign: 'center',
        cursor: 'pointer'
    }

}

export default Dashboaed