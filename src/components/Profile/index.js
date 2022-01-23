import { useEffect } from "react";
import {
    connect,
} from "react-redux";


import {
    logOut
} from "../../service/firebase";
import {
    initUserData,
    setNameInDB,
    setShowNameInDB
} from "../../store/profile/actions";
import { Form } from "../Form";
const ProfileForConnect = ({
    showName,
    userName,
    changeName,
    toggleShowName,
    connectToDb
}) => {
    useEffect(() => {
        connectToDb();
    }, []);

    const handleChange = (e) => {
        toggleShowName(e.target.checked);
    };

    const handleSubmit = (newName) => {
        changeName(newName);
    };

    return (
        <>
            <h3>THIS IS PROFILE</h3>
            <button onClick={logOut}>SignOut</button>
            <input type="checkbox" checked={showName} onChange={handleChange} />
            {showName && <span>{userName}</span>}
            <Form onSubmit={handleSubmit} />
        </>
    );
};

const mapStateToProps = (state) => ({
    showName: state.profile.showName,
    userName: state.profile.name,
});

const mapDispatchToProps = {
    changeName: setNameInDB,
    toggleShowName: setShowNameInDB,
    connectToDb: initUserData,
};

const ConnectedProfile = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileForConnect);
export default ConnectedProfile;
