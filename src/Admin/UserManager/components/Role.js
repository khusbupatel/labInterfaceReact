import React from 'react'

function Role(props) {
    return (
        <div className="admin-input">
            <h3 className="label">Role</h3>
            <select 
                id="role" 
                value = {props.role}
                onChange = {props.handleChange}
                required
                >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
                <option value="other">Other</option>
            </select>
        </div>
    )
}

export default Role