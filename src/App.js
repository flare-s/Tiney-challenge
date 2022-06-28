import { useState } from 'react';
import Header from './components/Header';

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
          <ul>
            {users.map(user => (<li key={user.id} className={`user ${user.isSignedIn && "signid-in"}`}>
              <div className='user-img'></div>
              <div className='user-info'>
                <p className='user-name'>{user.name}</p>
                <p className='user-status'>{user.isSignedIn ? `Signed in at 08:55` : "Signed out"}</p>
              </div>
              <button className={"btn"} onClick={() => user.isSignedIn ? handleSignout(user.id) : handleSignin(user.id)}>{user.signedIn ? "Sign out" : "Sign in"}</button>
            </li>))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
