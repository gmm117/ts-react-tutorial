import React from 'react';

type GreetingsProps = {
    name : string;
    mark : string;
    onClick: (name:string) => void;
    // children : React.ReactNode
};

// FC -> ㅊhildren 굳이 선언하지 않아도 됨
// 단, defaultProps가 동작하지 않음
// const Greetings : React.FC<GreetingsProps> = ({ name, mark = "!" } ) => {
//     return <div>Hello, {name} {mark}!</div>
// };

function Greetings ({ name, mark, onClick } : GreetingsProps ) {
    const handleClick = () => onClick(name);
    return ( 
        <div>
            Hello, {name} {mark}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    )
};


Greetings.defaultProps = {
    mark : '!'
};

export default Greetings;