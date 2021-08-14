import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import { delayedMessageMiddleware } from './exampleAddons/middleware'

const middlewareEnhancer = applyMiddleware(delayedMessageMiddleware)

// Pass enhancer as the second arg, since there's no preloadedState
const store = createStore(rootReducer, middlewareEnhancer)

export default store
