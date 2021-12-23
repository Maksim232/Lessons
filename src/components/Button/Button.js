import './Button.css';
export const Button = ({ anyProp, onButtonClick }) => {
    return <button className="buttonText" onClick={onButtonClick} >{anyProp}</button>;
};
