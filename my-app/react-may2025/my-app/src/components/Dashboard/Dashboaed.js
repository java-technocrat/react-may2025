// import React from 'react'
// import { useParams } from 'react-router-dom';

// function Dashboaed() {
//     const { role } = useParams();
//     const isAdmin = role === 'admin';
//     return (
//         <div style={style.container}>
//             <h1 style={style.heading}>
//                 {isAdmin ? 'Admin Dashboard' : 'User Dashboard'}
//             </h1>

//             <div style={style.cardContainer}>
//                 <div style={style.card}>
//                     <h3>{isAdmin ? 'User management' : 'Profile Info'}</h3>
//                     <p>{isAdmin ? 'Add, edit or remove users and manage permission' : 'View and u;pdate your profile information'}</p>

//                 </div>
//                 <div style={style.card}>
//                     <h3>{isAdmin ? 'System Analytics' : 'Your Data'}</h3>
//                     <p>{isAdmin ? 'Monitor system activity, logs etc' : 'Check your app usage4 and activity insight'}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const style = {
//     container: {
//         padding: '30px',
//         background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
//         minHeight: '100vh'
//     },
//     heading: {
//         fontSize: '32px',
//         marginBottom: '30px',
//         textAlign: 'center',
//         color: '#333'
//     },
//     cardContainer: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//         gap: '20px'
//     },
//     card: {
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '12px',
//         width: '280px',
//         boxShadow: '0, 4px, 12px, rgba(0,0,0,0.1)',
//         textAlign: 'center',
//         cursor: 'pointer'
//     }

// }

// export default Dashboaed
import React from 'react'
import { useParams } from 'react-router-dom';
import { FaUser, FaUserCheck, FaDollarSign, FaThumbsUp, FaRegCommentDots, FaFileAlt, FaFile, FaCommentDots } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, Legend, AreaChart, Area } from 'recharts';
function Dashboaed() {
    const { role } = useParams();
    const isAdmin = role === 'admin';
    //Mock Data
    const admindata = [
        { name: 'jan', users: 200 },
        { name: 'Feb', users: 300 },
        { name: 'Mar', users: 450 },
        { name: 'Apr', users: 600 }
    ];
    const userData = [
        { name: 'posts', value: 40 },
        { name: 'Likes', value: 25 },
        { name: 'Comments', value: 35 }
    ]
    const COLOR = ['#8884d8', '#82ca9d', '#ffc658'];

    const kpis = isAdmin
        ? [
            { label: 'Total Users', value: 1820, icon: <FaUser size={28} color="#4e73df" /> },
            { label: 'Active Users', value: 1320, icon: <FaUserCheck size={28} color="#4e73df" /> },
            { label: 'Revenue', value: '$25,300', icon: <FaDollarSign size={28} color="#4e73df" /> },
        ]
        : [
            { label: 'Total Posts', value: 130, icon: <FaFile size={28} color="#4e73df" /> },
            { label: 'Total Likes', value: 820, icon: <FaThumbsUp size={28} color="#4e73df" /> },
            { label: 'Comments', value: 290, icon: <FaCommentDots size={28} color="#4e73df" /> },
        ]
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>
                {isAdmin ? 'Ademin dashboard' : 'User Dashboard'}
            </h1>

            <div style={styles.kpiRow}>
                {kpis.map((kpi, index) => (
                    <div key={index} style={styles.kpicard}>
                        <div style={styles.kpiIcon}>{kpi.icon}</div>
                        <div style={styles.kpiValueLabelWrapper}>
                            <h4 style={styles.kpiValue}>{kpi.value}</h4>
                            <p style={styles.kpiLabel}>{kpi.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div style={styles.chartRow}>
                {isAdmin
                    ? (
                        <>
                            <div style={styles.chartBox}>
                                <h4 style={styles.chartTitle}>User Growth</h4>
                                <BarChart width={400} height={250} data={admindata}>
                                    <CartesianGrid strokeDasharray={"3 3"} />
                                    <XAxis dataKey={"name"} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey={"users"} fill="#8884d8" />
                                </BarChart>
                            </div>

                            <div style={styles.chartBox}>
                                <h4 style={styles.chartTitle}>Monthly Activity</h4>
                                <AreaChart width={400} height={250} data={admindata} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorUsers" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="5%" stopColor="#82cad9" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#82cad9" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray={"3 3"} />
                                    <XAxis dataKey={"name"} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Area type="monotone" dataKey="users" stroke="#82cad9" fillOpacity={1} fill="url(#colorUsers)">
                                    </Area>
                                </AreaChart>
                            </div>

                        </>
                    )
                    : (
                        <>
                            <div style={styles.chartBox}>
                                <h4 style={styles.chartTitle}>Activity Breakdown</h4>
                                <PieChart width={400} height={250}>
                                    <Pie
                                        data={userData}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={90}
                                        labelLine={false}
                                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                                        dataKey="value">
                                        {userData.map((entry, index) => (
                                            <Cell key={`Cell-${index}`}
                                                fill={COLOR[index % COLOR.length]} />
                                        ))}
                                    </Pie>
                                    <Legend />
                                    <Tooltip />
                                </PieChart>
                            </div>
                        </>
                    )}
            </div>
        </div >
    )
}

const styles = {
    container: {
        padding: '30px'
    },
    heading: {
        textAlign: 'center'
    },
    kpiRow: {
        diplay: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
    },
    kapiCard: {
        display: 'flex'
    },
    kpiIcon: {
        display: 'flex'
    },
    kpiValueLabelWrapper: {
        display: 'flex'
    },
    kpiValue: {
        fontSize: '22px'
    },
    kpiLabel: {
        fontSize: '22px'
    },
    chartBox: {
        padding: '20px'
    },
    chartTitle: {
        textAlign: 'center'
    },
    chartRow: {
        diplay: 'flex'
    }
}

export default Dashboaed