import React from 'react';

import { connect } from 'react-redux';
import _ from 'underscore';

import SearchResult from '../components/SearchResult';

class SearchResults extends React.Component {
    render() {
        const selectedFacilities = this.props.selectedFacilities;
        const filteredResults = this.props.results.map((result, index) => {
            if (selectedFacilities.length === 0 ||
                _.intersection(result.facilities, selectedFacilities).length > 0) {
                return <SearchResult key={index} result={result}/>
            }
        });

        return (
            <div>
                <h2>Hotels found</h2>

                {filteredResults}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedFacilities: state.selectedFacilities,
    results: state.results
});

export default connect(mapStateToProps)(SearchResults);