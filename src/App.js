import React, {useState, Fragment} from 'react';


import NewUser from './components/User/NewUser';
import UsersList from './components/User/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {name: uName, age: uAge, id: Math.random().toString() }
      ]
    });
  }

  return (
    // <div>
    // <React.Fragment>
    <Fragment>
      <NewUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </Fragment>
    // </React.Fragment>
    // </div>
  );
}

export default App;
