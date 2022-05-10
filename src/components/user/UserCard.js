
export const UserCard = ({ user }) => {

    return (
        <>
        <div className="UserCard">
            <h3>How are we doing!!</h3>
            <h2>{user.first_name}</h2>
            <h2>{user.last_name}</h2>
        </div>
        </>
    )
}