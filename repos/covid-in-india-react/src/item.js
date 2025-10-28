
// 1st way

import React from 'react';

export default function Item(props) {
  const {index, text, checked, handleTodoCheckboxToggle} = props;
  const todoClassName = checked ? ' checked' : '';
  return (
    <label className={'todo' + todoClassName}>
      <input 
        type="checkbox" 
        checked={checked}
        onClick={e => handleTodoCheckboxToggle(index)}/>
      {text}
    </label>
  );
}
// 2nd way

// import React from 'react';

// const Item =  (props) => {
//   const {index, text, checked, handleTodoCheckboxToggle} = props;
//   const todoClassName = checked ? ' checked' : '';
//   return (
//     <label className={'todo' + todoClassName}>
//       <input 
//         type="checkbox" 
//         checked={checked}
//         onClick={e => handleTodoCheckboxToggle(index)}/>
//       {text}
//     </label>
//   );
// }

// export default Item;