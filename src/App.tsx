import React, { FC, useEffect, useRef, useState } from 'react'

const App: FC = () => {
   const apple = '@apple'
   if (apple) { console.log(apple) } else {
      return <h1>1</h1>
   }
   return <h1>2</h1>
}

const foe = {
   fsdnks: 1, fnksnf: 2, fn2ksnf: 3, s: 4, asaddddd: 5, snjknsjknd: 3,

}
useEffect(() => console.log(2), [])
export default App;
