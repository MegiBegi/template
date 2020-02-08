import React, { FC, useCallback, useMemo, useReducer, useRef, useContext, useLayoutEffect } from 'react'

const App: FC = () => {
  const array = [4, 3, 5, 6, 7, 7, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 15, 16, 18]
  console.log(array)
  const funcs = () => { return (<h1>"aaa"</h1>) }
  return (<div />)
}
export default App
