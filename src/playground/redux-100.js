import {createStore, combineReducers} from 'redux' 
import uuid from 'uuid'

const addExpense = ({description='', note= '', amount=0, createdAT=0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense : {
        id:uuid(),
        description,
        note,
        amount,
        createdAT

    }

})


const expensesReducersDefault = []

const expensesReducers = (state = expensesReducersDefault, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE': 
            return [state.concat(action.expense)]
                
               
            
        default:
            return state
    }

}
const filtersReducersDefault = []
const filtersReducers = (state = filtersReducersDefault, action) => {
    switch(action.type) {
        default:
            return state
    }

}

const store = createStore(combineReducers({

    expenses : expensesReducers,
    filters : filtersReducers
}))

store.subscribe(()=> {
    console.log(store.getState())
})

store.dispatch(addExpense({description :'Rent', amount:300}))
































/*import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'

const addExpense = ({description='', note= '', amount= 0, createdAT=0}={}) => ({
    type: 'ADD_EXPENSE',
    expense : {
    id:   uuid(),
    description,
    note,
    amount,
    createdAT
}

})



const expensesReducersDefault = []
const expensesReducers = (state = expensesReducersDefault, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                state.concat(action.expense)
            ]
        case 'REMOVE_EXPENSE':
            return 
        default: 
            return state
    }

}
const filtersReducersDefault = []
const filtersReducers = (state = filtersReducersDefault, action) => {
    switch(action.type) {
        default: 
            return state
    }

}

const store= createStore(combineReducers({
    expenses: expensesReducers,
    filters: filtersReducers
}))
console.log(store.getState())
store.subscribe(()=> {
    console.log(store.getState());
})
store.dispatch(addExpense({description:'Rent', note:'myrent', amount: 400, createdAT: 114}))

store.dispatch(addExpense({description:'coffe', note:'morning', amount: 44, createdAT: 35}))
store.dispatch(addExpense({description:'tea', note:'night', amount: 36, createdAT: 0}))*/
/*import {createStore} from 'redux'

const incrementCount = ({incrementBy = 1}= {}) => ({
    type: 'INCREMENT',
    incrementBy
})
const decrementCount = ({decrementBy= 1}={}) => ({
    type:'DECREMENT',
    decrementBy
})
const resetCount = () => ({
    type: 'RESET',
    
})
const setCount = ({count}={})=> ({
    type:'SET',
    count
})
const store = createStore((state={count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state
    }
})
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch((incrementCount({incrementBy:5})))
store.dispatch(decrementCount({decrementBy:6}))
store.dispatch(resetCount({count:0}))
store.dispatch(setCount({count:101}))*/
