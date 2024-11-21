import staticData from '../../static.json';

const UsersList = () => {
    const users = staticData.users;
    return (
        <select>
            {users.map((e, i) => <option value={i}>{e.name}</option>)}
        </select>
    );
};

export default UsersList;