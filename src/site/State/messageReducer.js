export const addMessage = (textMessage) => ({ type: addmessage ,textMessage});

const addmessage = "ADD_MESSAGE";

let initialState = {
  objName: [
    { name: "Kirill", id: 1, ava: "ava1" },
    { name: "Yana", id: 2, ava: "ava2" },
    { name: "Anton", id: 3, ava: "ava3" },
    { name: "Jenya", id: 4, ava: "ava4" },
    { name: "Kristina", id: 5, ava: "ava5" },
    { name: "Alex", id: 6, ava: "ava6" }
  ],
  objMess: [
    { mes: "Hello" },
    { mes: "How are you" },
    { mes: "I am fine" },
    { mes: "How you???" }
  ],
  newText: ""
};
let messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case addmessage:
      let obj = {
        mes: action.textMessage
      };
      return {
        ...state,
        objMess: [...state.objMess, obj],
        newText: ""
      };

  

    default:
      return state;
  }
};
export default messageReducer;
