
import './Chats.css';
const chats = [
    {
        id: 'chat1',
        name: 'chat1'
    },
    {
        id: 'chat2',
        name: 'chat2'
    },
    {
        id: 'chat3',
        name: 'chat3'
    },
]

export const ChatList = () => {
    return (
        <ul className='Chats'> Chats :
            {chats.map((chat) => (
                <li ket={chat.id}>{chat.name}</li>
            ))}
        </ul>
    )
}