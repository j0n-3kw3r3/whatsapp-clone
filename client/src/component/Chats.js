import React from 'react';
import { useChats } from '../context/ChatsProvider';

export default function Chats() {
    const { chats, selectedChatIndex } = useChats()
  
    return (
        <div className="px-[.5rem] py-[1rem] mt-[3rem]">
            {
                  chats.map((chat, index) => (
                    <div
                        className={chat.selected ?'bg-primary  text-white p-2 capitalize ': 'p-2  border-b-gray capitalize border-b' }
                          key={index}
                          onClick={() => {
                          selectedChatIndex(index)
                          }}

                      >
                          {chat.recipients.map((r) => (r.name)).join(', ')}
                        
                    </div>
                ))
            }
        </div>
    );
}
