import {createStore,combineReducers}from 'redux';
import uuid from 'uuid';

/*const demoState = {
    expenses:[
        {
            id: 'maljojend',
            description: 'this is march',
            note: 'this is my note!',
            amount: 5400,
            createdAt: 0
        }
    ],
    filters:[
        {
            text: 'Rent',
            sortBy: 'amount',//date,
            startDate: undefined,
            endDate:undefined
        }
    ]
} 
//Action generaters
   ADD_EXPENSES
   EDIT_EXPENSES
   SET_TEXT_FILTER
   SORT_BY_DATE
   SORT_BY_AMOUNT
   SET_START_DATE
   SET_END_DATE */
   const addExpenses = (
       { 
        description= '',
        note = '',
        amount = 0,
        createdAt= 0
    }= {}) => ({
       type: 'ADD_EXPENSES',
       expenses: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
        
       }
   })
   const removeCount = ({id}= {}) => ({
       type: 'REMOVE',
       id
   });
 const expensesReducerDefualt = [{
    id: uuid(),
    description: '',
    note: '',
    amount: 0,
    createdAt: 0

 }]
const expensesReducer = (state = expensesReducerDefualt, action) => {
    switch(action.type){ 
        case 'ADD_EXPENSES': {
            return [
                ...state,
                action.expenses
            ]
        }
        case 'REMOVE': {
            return state.filter(({id}) => id !== action.id )
        }
        default: {
            return state
        }
    } 
}
const filtersReducerDefualt = [{
            text: 'Rent',
            sortBy: 'amount',//date,
            startDate: undefined,
            endDate:undefined

}]
const filtersReducer = (state = filtersReducerDefualt, action) => {
    switch(action.type){
        default: {
            return state
        }
    }
} 
const addcontactCount = ({
    firstName = '',
    lastName = '',
    age = 0,
    sex= ''


} = {}) => (
    {
        type: 'CONTACT',

        addcontact: {
            id:uuid(),
           firstName,
            lastName,
            age,
            sex 
        }
        
    }
)
const addcontactReducerDefault = [{
    firstName: '',
    lastName: '',
    age:0,
    sex: ''
}]
const addcontactReducer = (state = addcontactReducerDefault, action) => {
    switch(action.type) { 
        case 'CONTACT': {
            return [
                ...state,
                action.addcontact
            ]
        }
        default: {
            return state
        }
    }

}
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
    addcontact:addcontactReducer
}))
store.subscribe (() => {
    console.log(store.getState());
})

const oneExpense = store.dispatch(addExpenses({description: 'rent', amount: 100}));
const twoExpense = store.dispatch(addExpenses({description: 'food', amount: 2000}));
store.dispatch(addcontactCount({firstName: 'Andualem',
lastName: 'Mekonen',
age: 40,
sex: 'M'}))
store.dispatch(removeCount({id: oneExpense.expenses.id}));

const user = {
    name: 'andualem', 
    age: 34 ,
    lastName: 'mekonen'}
console.log({...user, locaction:'Ethiopia'});
/*const incrementCount = ({incrementBy = 1} = {}) => ({
    type:   'INCREMENT',
    incrementBy 
})
const decremntCount = () => ({
    type: 'DECREMENT'
})
const resetCount = () => ({
    type: 'RESET'
})

const countReducer = () => (state= {count:10}, action ) => {
    switch (action.type) {
        case 'INCREMENT': {
           
            return {
                count: state.count + action.incrementBy 
            }
        }
        case 'DECREMENT': {
            return {
                count: state.count -1
            }
        }
        case 'RESET': {
            return {
                count: 0
            }
        }
        default: {
            return state;
        }
    }


}

const store = createStore(countReducer())

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})
    
  
store.dispatch(incrementCount({incrementBy: 9}));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decremntCount());*/


/*const incrementCount = () => ({
    type: 'INCREMENT'
});
const decremntCount = () => ( {

    type: 'DECREMENT'
});
    



const store = createStore((state = { count:0}, action )=> {
   switch (action.type) {
       case 'INCREMENT': 
        return {
            count: state.count + 2
        }
       case 'DECREMENT' :
        return {
            count: state.count - 4
        }
        case 'SET': 
            return {
                count:100
            }
        default :
        return state;
   }
        

    
})


console.log (store.getState());


store.dispatch(incrementCount());

store.dispatch(decremntCount());

store.dispatch(decremntCount());




console.log(store.getState());*/







/*import { createStore} from 'redux';



const store = createStore((state = { count: 0}, action) => {
    
     switch (action.type) {
         case 'INCREMENT' : 
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1 ;
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT': 
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1;
            return {
                count: state.count - decrementBy
            }
        case 'SET' :
            return {
                count: action.count
            }
        case 'REST': {
            return {
                count: 0
            }
        }
         default : 
            return state;
            
     }
});

const unsubscribe = store.subscribe(() => {
console.log(store.getState());

})


store.dispatch({

    type: 'INCREMENT',
    incrementBy: 5
    
})

store.dispatch({

    type: 'DECREMENT',
    decrementBy: 8
})


store.dispatch({

    type: 'REST'
})
store.dispatch({

    type: 'SET',
    count:23
})*/

