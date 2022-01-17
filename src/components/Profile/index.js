import { connect } from "react-redux";
import { setName, signOut, toggleName } from "../../store/profile/actions";
import { Form } from "../Form";

const ProfileForConnect = ({
    showName,
    userName,
    changeName,
    toggleShowName,
    logout,
}) => {
    const handleChange = () => {
        toggleShowName();
    };

    const handleSubmit = (newName) => {
        changeName(newName);
    };

    return (
        <>
            <h3>THIS IS PROFILE</h3>
            <button onClick={logout}>SignOut</button>
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
    changeName: setName,
    toggleShowName: () => toggleName,
    logout: signOut,
};

const ConnectedProfile = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfileForConnect);
export default ConnectedProfile;
