const createStore = require("redux").createStore;
const combineReducers = require("redux").combineReducers;
/// Actions
const BUY_POKEMON = "BUY_POKEMON";
const RETURN_POKEMON = "RETURN_POKEMON";
const BUY_YOSHI = "BUY_YOSHI";
const RETURN_YOSHI = "RETURN_YOSHI";
const BUY_SWITCH = "BUY_SWITCH";
const RETURN_SWITCH = "RETURN_SWITCH";
const BUY_PS5 = "BUY_PS5";
const RETURN_PS5 = "RETURN_PS5";



const buy_switch_action = (cant) => {
    return{
        type: BUY_SWITCH,
        payload: cant
    }
}

const return_switch_action = (cant) => {
    return{
        type: RETURN_SWITCH,
        payload: cant
    }
}

const buy_ps5_action = (cant) => {
    return{
        type: BUY_PS5,
        payload: cant
    }
}

const return_ps5_action = (cant) => {
    return{
        type: RETURN_PS5,
        payload: cant
    }
}


const buy_pokemon_action = (cant) => {
    return{
        type: BUY_POKEMON,
        payload: cant
    }
}

const return_pokemon_action = (cant) => {
    return{
        type: RETURN_POKEMON,
        payload: cant
    }
}

const buy_yoshi_action = (cant) => {
    return{
        type: BUY_YOSHI,
        payload: cant
    }
}

const return_yoshi_action = (cant) => {
    return{
        type: RETURN_YOSHI,
        payload: cant
    }
}


//// Reducers
const default_game_state = {
    pockemon: 10,
    yoshi: 10
}

const default_consoles_state = {
    Ps5: 30,
    Switch: 20
}


const console_reducer = (state = default_consoles_state ,action) =>{
    switch(action.type) {
        case BUY_SWITCH: {
            return {
                ...state,
                Switch: state.Switch - action.payload
            }
        }
        case RETURN_SWITCH:{
            return{
                ...state,
                Switch: state.Switch + action.payload
            }
        }
        case BUY_PS5: {
            return {
                ...state,
                Ps5: state.Ps5 - action.payload
            }
        }
        case RETURN_PS5:{
            return{
                ...state,
                Ps5: state.Ps5 + action.payload
            }
        }
        default: return state;
    }
}

const games_reducer = (state = default_game_state ,action) =>{
    switch(action.type) {
        case BUY_POKEMON: {
            return {
                ...state,
                pockemon: state.pockemon - action.payload
            }
        }
        case RETURN_POKEMON:{
            return{
                ...state,
                pockemon: state.pockemon + action.payload
            }
        }
        case BUY_YOSHI: {
            return {
                ...state,
                yoshi: state.yoshi - action.payload
            }
        }
        case RETURN_YOSHI:{
            return{
                ...state,
                yoshi: state.yoshi + action.payload
            }
        }
        default: return state;
    }
}


const rootReducers = combineReducers({games_reducer,console_reducer});
/// Store

const store = createStore(rootReducers);
console.log("Estado inicial: ", store.getState());

store.subscribe(() => {
    console.log("Cambio de estado:", store.getState());
});


store.dispatch(buy_pokemon_action(3));
store.dispatch(return_pokemon_action(2));
store.dispatch(buy_yoshi_action(3));
store.dispatch(return_yoshi_action(2));

store.dispatch(buy_switch_action(6));
store.dispatch(return_switch_action(4));
store.dispatch(buy_ps5_action(3));
store.dispatch(return_ps5_action(2));