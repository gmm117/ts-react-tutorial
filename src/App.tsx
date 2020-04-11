import React from 'react';
// import Greetings from './Greetings';
// import Counter from './Counter';
// import MyForm from './MyForm';
// import ReducerCounter from './ReducerCounter';
// import ReducerSample from './ReducerSample';
import ReducerContextSample from './ReducerContextSample';
import SampleProvider from './SampleContext';


// function App() {
//   const onClick = (name : string) => {
//     console.log(name);
//   };

//   return (
//     <Greetings name="리액트" onClick={onClick}/>
//   );
// }

// function App() {
//   return (
//     <Counter />
//   );
// }

// function App() {
//   const onSubmit = (form : {name : string, description : string}) => {
//     console.log(form);
//   };

//   return (
//     <MyForm onSubmit={onSubmit} />
//   );
// }

// function App() {
//   return (
//     <ReducerCounter />
//   );
// }

function App() {
  return (
    <SampleProvider>
      <ReducerContextSample />
    </SampleProvider>
  );
}

export default App;
