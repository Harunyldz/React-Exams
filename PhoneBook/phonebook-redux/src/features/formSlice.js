import { createSlice } from "@reduxjs/toolkit";


const initialState={
    persons:[
        {name:'Ali', phone:'0555 789 2114'},
        {name:'Ayşe', phone:'0444 698 2136'},
        {name:'Hasan', phone:'0333 698 7854'}
    ]
}
export const formSlice=createSlice({
    name:'form',
    initialState,
    reducers:{
       addPerson:(state,action)=>{
        state.persons=[...state.persons,action.payload]
       }
    }
})

export const {addPerson}=formSlice.actions;
export default formSlice.reducer

// addContact=(newContact)=>{
//     this.setState({contacts:[...this.state.contacts,newContact]})
//   }