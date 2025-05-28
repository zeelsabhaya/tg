// const axios = require('axios');

const addUserlogin = () => {
    return dispatch => {
        return axios.get("")
            .then((res) => {
                dispatch({
                    type: "ADD_USER_LOGIN",
                    payload: res.data
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
}

export const addUser = (data) => {
    return dispatch => {
        axios.post("", data)
        .then((res) => {
            dispatch(addUserlogin());
        }).catch((err) => {
            console.log(err);
        });
    };
};
