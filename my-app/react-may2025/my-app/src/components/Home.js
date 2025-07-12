import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

    const handleClick = (role) => {
        navigate(`/dashboard/${role}`);
    }
    return (
        <div style={{ padding: '20px' }}>
            <h2>Choose dashboard</h2>
            <div style={cardStyle} onClick={() => handleClick('user')}>
                <h3>User dashboard</h3>
                <p>Click to View user Dashboard</p>
            </div>

            <div style={cardStyle} onClick={() => handleClick('admin')}>
                <h3>Admin dashboard</h3>
                <p>Click to View Admin Dashboard</p>
            </div>

        </div>
    )
}

const cardStyle = {
    flex: 1,
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    cursor: 'pointer',
    background: '#f9f9f9',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
}

export default Home