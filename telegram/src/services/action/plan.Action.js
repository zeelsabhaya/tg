import axios from "axios";
import { toast } from "react-toastify";

export const addNewplans = () => {
  return {
    type: "ADD_NEW_PLANS",
  };
}
export const addplanasync = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3000/api/pricing/downgrade", data)
      .then((res) => {
        dispatch(addNewplans());
        toast.success("Plan added successfully!");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(`Error: ${err.message}`);
      });
  };
};
