import './Message.css';
export const Message = (props) => {
    return <h3 className="messageText" >{props.title} {props.onemoreProp}</h3>;
};