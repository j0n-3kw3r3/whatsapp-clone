import React, { useState, useCallback } from 'react';
import { useChats } from '../context/ChatsProvider';

export default function OpenChats() {
    const [text, setText] = useState();
    const { sendMessage, selectedChat } = useChats()
    const setRef = useCallback(
        node => {
            if (node) {
                
                node.scrollIntoView({ smooth: true})
            }
        }
    ,[])



    function handleSubmit(e) {
        e.preventDefault()
        sendMessage(
            selectedChat.recipients.map(r => r.id),
            text
        )
        setText('')
    }
    return (
        <div className='flex flex-col flex-1 w-[65%] md:w-[80%]'>
            <div className=' flex-1 overflow-auto'>
                <div className=" flex flex-col items-start justify-end px-3 ">
                    {selectedChat.messages.map((message, index) => {
                        const lastMessage = selectedChat.messages.length - 1 === index
                        return (
                            <div
                                ref={lastMessage ? setRef : null}
                                key={index}
                                className={message.fromMe ? 'my-1 flex flex-col self-end max-w-[70%] rounded-lg ' : ''}
                            >
                                <div
                                    className={message.fromMe ? 'rounded px-2 py-1 bg-primary text-white ' : 'rounded px-2 py-1 border'}
                                >{message.text}</div>
                                <div
                                    className={message.fromMe ? 'rounded px-2 py-1 b text-sm text-right ' : ''}
                                >{message.fromMe ? 'You' : message.senderName}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <form className='mx-2 flex'
                onSubmit={handleSubmit}
            >
                <textarea name="" id=""
                    value={text}
                    onChange={e => setText(e.target.value)}
                    className=' h-[3.5rem] w-full border  bg-[#455a64] rounded-l-full resize-none text-white pl-[2rem]  py-[.8rem] '
                ></textarea>
                <button className='px-3 bg-primary text-white rounded-r-full'>send</button>
            </form>
        </div>
    );
}
