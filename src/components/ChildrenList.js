import { useEffect } from "react";
import styles from "./ChildrenList.module.css";
import Button from "./UI/Button";
const ChildrenList = ({users, handleSignin, handleSignout, setUsers}) => {
  useEffect(() => {
    users.forEach(userr => {
      const userData = localStorage.getItem(`user-${userr.id}`);
        let parsed = JSON.parse(userData);
        if (parsed) {
          if (parsed.isLoggedIn) {
            setUsers(prev => {
              return prev.map(user => {
                if (user.id === userr.id) {
                  return ({...user, isSignedIn: true, signedInTime: parsed.time})
                }
                return user;
              })
        
            })
          } else if(!parsed.isLoggedIn) {
            setUsers(prev => {
              return prev.map(user => {
                if (user.id === userr.id) {
                  return ({...user, isSignedIn: false})
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
            {users.map(user => (<li key={user.id} className={`${styles.user} ${user.isSignedIn && "signid-in"}`}>
              <div className={styles['user-img']}></div>
              <div className={`${styles['user-info']} vertical-gutter`}>
                <p className={`${styles['user-name']}`}>{user.name}</p>
                <p className={`${styles['user-status']}`}>{user.isSignedIn ? `Signed in at ${user.signedInTime ? user.signedInTime : "08:55"}` : "Signed out"}</p>
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