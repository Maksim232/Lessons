import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store";
import { showName } from "../../store/profile/actions";
import { withProfileContext } from "../utils/ProfileContext";
import { Form } from "../Form";

export const Profile = ({ name, onChangeName }) => {
    const storeData = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(showName);
    };

    return (
        <>
            <h3>Your Profile</h3>
            <input type="checkbox" chacked={storeData.showName} onChange={handleChange} />
            {storeData.showName && <span>{name}</span>}
            <Form onSubmit={onChangeName} />
        </>
    );
};

export default withProfileContext(Profile);
