import { atom, selector, useRecoilValue } from 'recoil'

export const countState = atom({
  key: 'count',
  default: 0,
})

export const dataState = atom({
  key: 'data',
  default: "I am not using recoil yet.. NAN!!",
})

export const incrementCount = selector({
  key: 'incrementCount',
  set: ({ set }) => set(countState, (currCount) => currCount + 1),
})

export const decrementCount = selector({
  key: 'decrementCount',
  set: ({ set }) => set(countState, (currCount) => currCount - 1),
})

export const dataApi = selector({
   key: 'getData',
   set: ({ set }) => { 
     set(dataState, "I am using recoil.. YAY!!")
     window.localStorage.setItem('data',"I am using recoil.. YAY!!")
   }
})
