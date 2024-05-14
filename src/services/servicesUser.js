import axios from "axios";

const getUser = async (query = "") => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users${
        query ? `/${query}/todos` : ""
      }`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// const patchUser = async (taskId = "") => {
//   try {
//     const response = await axios.patch(
//       `https://jsonplaceholder.typicode.com/todos/${taskId}`,
//       {
//         completed: true,
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

export { getUser, patchUser };
