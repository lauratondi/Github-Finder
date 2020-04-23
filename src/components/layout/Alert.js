import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';


const Alert = () => {
    const alertContext = useContext(AlertContext)

    const { alert } = alertContext;
    return (
        // if alert is not null then show the alert message
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle" />
                {alert.msg}

            </div>
        )
    )
}

export default Alert;