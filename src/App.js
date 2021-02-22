import React from 'react';
import MyApp  from './components/MyApp';
import MyApp2 from './components/MyApp2';
import Component1 from './propsTutorial/Component1';
import Component2 from './propsTutorial/Component2';
function App(){
    return (
        <div className="MyApp">
            {/*<MyApp/>
            <MyApp2/>*/}
            <Component1 name="Nurlibay" age="17"/>
            <Component2 text="React Tutorial"/>
        </div>
    );
}

export default App;