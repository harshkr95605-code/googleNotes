
//middleware logger.js
const logger = (store)=>(next)=>(action)=>{
    console.log('dispatching:',action);
    let result=next(action)
    console.log('Next State',store.getState());
    return result;
}

export default logger;