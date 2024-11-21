import staticData from '../../static.json';

const UserPicker = () => {
    const users = staticData.users;

    return (
        <select>
            {users.map((e, i) => <option value={i}>{e.name}</option>)}
        </select>
    );
};

export default UserPicker;