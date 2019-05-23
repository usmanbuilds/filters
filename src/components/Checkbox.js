import React from 'react';

export default function Checkbox({ name, onChange }) {
    return (
        <div>
            <input type="checkbox" onChange={onChange} value={name} />
            <label>{ name }</label>
        </div>
    );
}
