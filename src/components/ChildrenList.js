import { useEffect } from "react";
import styles from "./ChildrenList.module.css";
import Button from "./UI/Button";
const ChildrenList = ({users, handleSignin, handleSignout, setUsers}) => {
  useEffect(() => {
    users.forEach(userItem => {
      const userData = localStorage.getItem(`user-${userItem.id}`);
        let parsed = JSON.parse(userData);
        const handleLocaleStorage = (isSignedIn, time) => {
          setUsers(prev => {
            return prev.map(user => {
              if (user.id === userItem.id) {
                return isSignedIn ? ({...user, isSignedIn: isSignedIn, inAt: time.inAt, outAt: time.outAt})
                : ({...user, isSignedIn: isSignedIn, outAt: time.outAt})
              }
              return user;
            })
      
          })
        }
        if (parsed) {
          // Get data from localStorage and update the users state
          parsed.isLoggedIn ? handleLocaleStorage(true, parsed) : handleLocaleStorage(false, parsed);
        }
    });
  }, []);
    return (
        <ul className={`${styles["chilldren-list"]} verical-gutter`}>
            {users.map(user => (<li key={user.id} className={`${styles.user} ${user.isSignedIn && styles["signed-in"]}`}>
              <div className={styles["user-img-container"]}>
               <img src={user.img} alt={user.name} className={styles['user-img']}/>
              </div>
              <div className={`${styles['user-info']} vertical-gutter`}>
                <p className={`${styles['user-name']}`}>{user.name}</p>
                <p>{user.isSignedIn ? `Signed in on ${user.inAt ? user.inAt : "08:55"}` : `Signed out ${user.outAt ? `on ${user.outAt}`:''}`}</p>
              </div>
              <Button className={user.isSignedIn && ["outline"]}
               onClick={() => user.isSignedIn ? handleSignin(user.id, false) : handleSignin(user.id, true)}
               content={user.isSignedIn ? "Sign out" : "Sign in"} />
            </li>))}
        </ul>
    )
}

export default ChildrenList;