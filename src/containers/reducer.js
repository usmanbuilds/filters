const UPDATE_SELECTED_FACILITIES = 'UPDATE_SELECTED_FACILITIES';

const initialState = {
    selectedFacilities: [],
    results: [
        {
            "name": "hotelone",
            "starRating": 5,
            "facilities": ["car park", "pool"]
        },
        {
            "name": "hoteltwo",
            "starRating": 3,
            "facilities": ["car park", "gym"]
        },
        {
            "name": "hotelthree",
            "starRating": 3,
            "facilities": []
        }
    ]
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SELECTED_FACILITIES:
            return { ...state, selectedFacilities: action.payload };
        default:
            return state;
    }
}