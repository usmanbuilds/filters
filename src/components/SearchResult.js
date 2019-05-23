import React from 'react';

export default function SearchResult({ result }) {
    return (
        <div>
            <h3>{result.name}</h3>
            <p>Facilities: {result.facilities.join(', ')}</p>
            <p>Rating: {result.starRating}</p>
        </div>
    );
}