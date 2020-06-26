/*import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense = ({description='', note='', amount='', createdAt=''}={}) => ({
    type: 'ADD_EXPENSE',
    expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
    }


})
const removeExpense = ({id}={}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
const editExpense = (id, update) => ({
    type:   'EDIT_EXPENSE',
    id,
    update

})
const setTextFilter = (text = '')=>({
    type: 'SET_TEXT_FILTER',
    text
})
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})
const sortByDate = ()=>({
    type: 'SORT_BY_DATE',
    
})
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
const expensesReducersDefault = {

}
const expensesReducer = (state=[], action)=> {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense)=> {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.update
                    }
                } else {
                    return expense
                }

            })
        default: 
            return state
    }

}
const filtersReducersDefault = {
    text:'',
    sortBy:'date',
    startDate: undefined,
    endDate:undefined
}
const filtersReducer = (state= filtersReducersDefault, action)=> {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
            case 'SORT_BY_AMOUNT':
                return {
                    ...state,
                    sortBy: 'amount'
                }
            case 'SORT_BY_DATE':
                return {
                    ...state,
                    sortBy: 'date'
                }
            case 'SET_START_DATE': 
                return {
                    ...state,
                    startDate: action.startDate
                }
            case 'SET_END_DATE': 
                return {
                    ...state,
                    endDate: action.endDate
                }
        default:
            return state
    }

}
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}))
store.subscribe(() => {
    console.log(store.getState())
})
const ex1 = store.dispatch(addExpense({description:'Rent', note:'payment', amount:23, createdAt:34}))
const ex2 = store.dispatch(addExpense({description:'bill', note:'payment1', amount:200, createdAt:340}))

store.dispatch(removeExpense({id: ex1.expense.id}))

store.dispatch(editExpense(ex2.expense.id, {amount:2000}))

store.dispatch(setTextFilter(''))
store.dispatch(sortByDate('date'))
store.dispatch(sortByAmount('amount'))
store.dispatch(setStartDate('467'))
store.dispatch(setEndDate('900'))*/


/* 

        SET_TEXT_FILTER 
        SORT_BY_DATE
        SORT_BY_AMOUNT
        SET_START_DATE
        SET_END_DATE
*/
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
store.dispatch(setCount({count:101})) */