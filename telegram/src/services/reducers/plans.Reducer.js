const initialState = {
    plans: [],
    plan: null,
    planLoading: false,
    planError: null,
    planSuccess: false,
}

export const planReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NEW_PLANS":
            return {
                ...state,
                plans: [...state.plans, action.payload],
                planSuccess: true,
            };
        // case "FETCH_PLANS_REQUEST":
        //     return {
        //         ...state,
        //         planLoading: true,
        //         planError: null,
        //     };
        // case "FETCH_PLANS_SUCCESS":
        //     return {
        //         ...state,
        //         plans: action.payload,
        //         planLoading: false,
        //     };
        // case "FETCH_PLANS_FAILURE":
        //     return {
        //         ...state,
        //         planLoading: false,
        //         planError: action.payload,
        //     };
        default:
            return state;
    }
}