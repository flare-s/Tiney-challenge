import { useState } from 'react';
import Header from './components/Header';
import ChildrenList from './components/ChildrenList';

const usersState = [
  {
    name: "Rue",
    isSignedIn: true,
    id: "1",
  },
  {
    name: "Daniel",
    isSignedIn: false,
    id: "2"
  },
  {
    name: "Sami",
    isSignedIn: false,
    id: "3"
  },
  {
    name: "Sara",
    isSignedIn: true,
    id: "4"
  },
]





function App() {
  const [users, setUsers] = useState(usersState);

  const handleSignout = (id) => {
    setUsers(prev => {
      return prev.map(user => {
        if (user.id === id) {
          return ({...user, isSignedIn: false})
        }
        return user;
      })

    })
  
  }

  const handleSignin = (id) => {
    setUsers(prev => {
      return prev.map(user => {
        if (user.id === id) {
          let date = new Date();
          console.log(date);
          return ({...user, isSignedIn: true})
        }
        return user;
      })

    })
  
  }
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <h2>Children's info</h2>
          <p>you have {users.length} children expected today</p>
          <ChildrenList users={users} handleSignin={handleSignin} handleSignout={handleSignout}/>
        </section>
      </main>
    </div>
  );
}

export default App;
