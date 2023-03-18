
import { createGlobalState } from 'react-hooks-global-state';
const {setGlobalState,useGlobalState}=createGlobalState({
    clubId:0,
    isauth:false,
    coeId:0
});

export {useGlobalState,setGlobalState};