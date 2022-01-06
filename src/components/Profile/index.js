import { connect } from "react-redux";
import { setName, toggleName } from "../../store/profile/actions";
import { Form } from "../Form";

const ProfileForConnect = ({
    showName,
    userName,
    changeName,
    toggleShowName,
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
};

const ConnectedProfile = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileForConnect);
export default ConnectedProfile;
