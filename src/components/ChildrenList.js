const ChildrenList = ({users, handleSignin, handleSignout}) => {
    return (
        <ul>
            {users.map(user => (<li key={user.id} className={`user ${user.isSignedIn && "signid-in"}`}>
              <div className='user-img'></div>
              <div className='user-info'>
                <p className='user-name'>{user.name}</p>
                <p className='user-status'>{user.isSignedIn ? `Signed in at 08:55` : "Signed out"}</p>
              </div>
              <button className={"btn"} onClick={() => user.isSignedIn ? handleSignout(user.id) : handleSignin(user.id)}>{user.isSignedIn ? "Sign out" : "Sign in"}</button>
            </li>))}
        </ul>
    )
}

export default ChildrenList;