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
    let date = new Date();
          let timeOptions = {hour12: false, hour: '2-digit', minute: "2-digit"};
          let time = date.toLocaleTimeString("en-US", timeOptions);
    localStorage.setItem(`user-${id}`, JSON.stringify({
      isLoggedIn: false,
      time
    }));
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
    let date = new Date();
          let timeOptions = {hour12: false, hour: '2-digit', minute: "2-digit"};
          let time = date.toLocaleTimeString("en-US", timeOptions);
    localStorage.setItem(`user-${id}`, JSON.stringify({
      isLoggedIn: true,
      time: time
    }));
    setUsers(prev => {
      return prev.map(user => {
        if (user.id === id) {
          return ({...user, isSignedIn: true, signedInTime: time})
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
          <div className='container vertical-gutter'>
            <h2>Children's info</h2>
            <p>you have {users.length} children expected today.</p>
            <ChildrenList users={users} setUsers={setUsers} handleSignin={handleSignin} handleSignout={handleSignout}/>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
