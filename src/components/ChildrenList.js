import { useEffect } from "react";
import styles from "./ChildrenList.module.css";
import Button from "./UI/Button";
const ChildrenList = ({users, handleSignin, handleSignout, setUsers}) => {
  useEffect(() => {
    users.forEach(userItem => {
      const userData = localStorage.getItem(`user-${userItem.id}`);
        let parsed = JSON.parse(userData);
        if (parsed) {
          if (parsed.isLoggedIn) {
            setUsers(prev => {
              return prev.map(user => {
                if (user.id === userItem.id) {
                  return ({...user, isSignedIn: true, inAt: parsed.inAt})
                }
                return user;
              })
        
            })
          } else if(!parsed.isLoggedIn) {
            setUsers(prev => {
              return prev.map(user => {
                if (user.id === userItem.id) {
                  return ({...user, isSignedIn: false, outAt: parsed.outAt})
                }
                return user;
              })
        
            })
          }
        }
    });
  }, []);
    return (
        <ul className={`${styles["chilldren-list"]} verical-gutter`}>
            {users.map(user => (<li key={user.id} className={`${styles.user} ${user.isSignedIn && styles["signed-in"]}`}>
              <img src={user.img} alt={user.name} className={styles['user-img']}/>
              <div className={`${styles['user-info']} vertical-gutter`}>
                <p className={`${styles['user-name']}`}>{user.name}</p>
                <p>{user.isSignedIn ? `Signed in on ${user.inAt ? user.inAt : "08:55"}` : `Signed out ${user.outAt ? `on ${user.outAt}`:''}`}</p>
              </div>
              {/* <button className={"btn"} onClick={() => user.isSignedIn ? handleSignout(user.id) : handleSignin(user.id)}>{user.isSignedIn ? "Sign out" : "Sign in"}</button> */}
              <Button className={`${user.isSignedIn && "outline"}`}
               onClick={() => user.isSignedIn ? handleSignout(user.id) : handleSignin(user.id)}
               content={user.isSignedIn ? "Sign out" : "Sign in"} />
            </li>))}
        </ul>
    )
}

export default ChildrenList;