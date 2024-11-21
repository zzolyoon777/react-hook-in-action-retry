import staticData from "../../static.json";
import {useState} from "react";

const BookablesList = () => {
    const bookables = staticData.bookables;

    const group = "Rooms";

    const bookablesInGroup = bookables.filter(b => b.group === group);

    let oldBookableIndex = 1; // 선택된 자원의 인덱스를 하드코딩함 (useState 사용 X)

    const [bookableIndex, setBookableIndex] = useState(1);

    function changeBookable(selectedIndex) {
        setBookableIndex(bookableIndex);
    }

    return (
        <ul className={"bookables items-list-nav"}>
            {bookablesInGroup.map((b, i) => (
                <li key={b.id} className={i === bookableIndex ? "selected" : null}>
                    <button className={"btn"} onClick={changeBookable}>{b.title}</button>
                </li>
            ))}
        </ul>
    );
};

export default BookablesList;