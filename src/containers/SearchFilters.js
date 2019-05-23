import React from 'react';

import FacilitiesFilter from '../components/FacilitiesFilter';

import './SearchFilters.css';

export default function SearchFilters() {
    return (
        <div id="filters">
            <h2>Filter by</h2>
            <FacilitiesFilter />
        </div>
    );
}