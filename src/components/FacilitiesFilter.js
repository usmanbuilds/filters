import React from 'react';

import { connect } from 'react-redux';

import Checkbox from './Checkbox';

class FacilitiesFilter extends React.Component {
    constructor(props) {
        super(props);

        this.toggleFilter = this.toggleFilter.bind(this);
    }

    toggleFilter(e) {
        const facilityName = e.target.value;

        if (this.isFacilitySelected(facilityName)) {
            return this.removeSelectedFilter(facilityName);
        }
        return this.addSelectedFilter(facilityName);
    }

    isFacilitySelected(facilityName) {
        return this.props.selectedFacilities.some(
            facility => facility === facilityName
        );
    }

    addSelectedFilter(facilityName) {
        const action = {
            type: 'UPDATE_SELECTED_FACILITIES',
            payload: [
                ...this.props.selectedFacilities,
                facilityName
            ]
        };

        this.props.dispatch(action);
    }

    removeSelectedFilter(facilityName) {
        const action = {
            type: 'UPDATE_SELECTED_FACILITIES',
            payload: [
                ...this.props.selectedFacilities.filter(facility => facility !== facilityName)
            ]
        };

        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <Checkbox id={11} name="gym" onChange={this.toggleFilter} />
                <Checkbox id={12} name="car park" onChange={this.toggleFilter} />
                <Checkbox id={13} name="pool" onChange={this.toggleFilter} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
   selectedFacilities: state.selectedFacilities
});

export default connect(mapStateToProps)(FacilitiesFilter);
