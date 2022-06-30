import { useState } from 'react';
import Header from './components/Header';
import ChildrenList from './components/ChildrenList';
import daniel from "./img/Daniel.jpg";
import rue from "./img/Rue.jpg";
import sami from "./img/Sami.jpg";
import sara from "./img/Sara.jpg";

const usersState = [
  {
    name: "Rue",
    isSignedIn: true,
    id: "1",
    img: rue
  },
  {
    name: "Daniel",
    isSignedIn: false,
    id: "2",
    img: daniel
  },
  {
    name: "Sami",
    isSignedIn: false,
    id: "3",
    img: sami
  },
  {
    name: "Sara",
    isSignedIn: true,
    id: "4",
    img: sara
  },
]





function App() {
  const [users, setUsers] = useState(usersState);

  //handle user sign-in
  const handleSignin = (id, isSignedIn) => {
    let date = new Date();
    let timeOptions = {hour12: false, hour: '2-digit', minute: "2-digit"};
    let time = date.toLocaleTimeString("en-US", timeOptions);
    let day = date.toLocaleDateString("en-US", {weekday: "short"})
    // add the sign-in time to locaL storage
    let userObj = {}
    userObj.isLoggedIn = isSignedIn;
    isSignedIn ? userObj.inAt = `${day} at ${time}` : userObj.outAt = `${day} at ${time}`;
    localStorage.setItem(`user-${id}`, JSON.stringify(userObj));
    // Update the user state with the sign-in/sign-out time
    setUsers(prev => {
      return prev.map(user => {
        if (user.id === id) {
          return isSignedIn ? ({...user, isSignedIn, inAt: `${day} at ${time}`}) : ({...user, isSignedIn, outAt: `${day} at ${time}`})
        }
        return user;
      })

    })
  
  }
  return (
    <>
      <Header />
      <main>
        <section>
          <div className='container vertical-gutter'>
            <p>you have {users.length} children expected today.</p>
            <ChildrenList users={users} setUsers={setUsers} handleSignin={handleSignin}/>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
