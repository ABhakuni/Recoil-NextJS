import { useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil'
import { dataState, dataApi } from '../lib/recoil-atoms'
import * as React from 'react';

const useData = () => ({
  body: useRecoilValue(dataState),
  fetchData: useSetRecoilState(dataApi),
  reset: useResetRecoilState(dataApi),
})

const Counter = () => {

    const [persistedstate, setpersistedstate] = React.useState("");

    React.useEffect(() => {
        setpersistedstate(window.localStorage.getItem('data'))
    }, [])
    
    const { body, fetchData, reset } = useData()
    return (
        <div>
        <h1>
            Data:
            {persistedstate.length>0 ?
                <span>{localStorage.getItem('data')}</span>
                :
                <span>{body}</span>
            }
        </h1>
        <button onClick={fetchData}>Show it NOW!!</button>
        <button onClick={reset}>Reset it NOW!!</button>
        </div>
    )
}

export default Counter
