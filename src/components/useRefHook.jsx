import React, { useRef } from 'react';

const UseRefHook = ( ) => {
  // it's common to initialise refs with null
  const inputEl = useRef( null );

  const onButtonClick = () => {
    // ⚡️ TypeScript in strict mode will complain here,
    // because inputEl can be null!
    inputEl.current.value = ''

    inputEl.current.focus( )

    if( inputEl?.current ) {
        inputEl.current.value = ''
        inputEl.current.focus( );
    }
  }
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Clear and focus</button>
    </>
  )
}

export default UseRefHook
