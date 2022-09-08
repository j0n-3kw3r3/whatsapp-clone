import React from 'react';
import { useState } from 'react';
import Chats from './Chats';
import Contacts from './Contacts';
import NewContact from './NewContact'; 
import NewChat from './NewChat'; 


export default function Sidebar({ id }) {
    const [active, setActive] = useState('chats');
    // const [modalOpen, setModalOpen] = useState(false);
    const [modal, setModal] = useState(false);

    // function closeModal(params) {
    //     setModalOpen(false)
    // }
    return (
        <div className='relative w-[35%] md:w-[20%] bg-white h-full overflow-auto' >
            <div className=" shadow pt-[1rem] flex fixed  top-0 left-0 w-[35%] md:w-[20%] bg-white "  >

                <div className={active === "chats" ? "shadow-md border cursor-pointer py-1 px-3 flex-1 text-center text-primary border-primary " : "  cursor-pointer py-1 px-3 flex-1 text-center "} onClick={() => setActive('chats')}>Chats</div>
                <div className={active === "contacts" ? "shadow-md border cursor-pointer py-1 px-3 flex-1 text-center  text-primary border-primary" : "  cursor-pointer py-1 px-3 flex-1 text-center "} onClick={() => setActive('contacts')}>Contacts</div>
            </div >

            {active === 'chats' ?
                <Chats />
                :
                <Contacts />
            }
            <div className="border-t border-t-primary fixed bottom-0 w-[35%] md:w-[20%]  text-sm ">
                <p className="p-2">
                    Your Id: <span className="text-sm text-slate-400 ">{id}</span>
                </p>
                <button className='w-full bg-primary text-white py-1 ' onClick={() => setModal(!modal)}>
                    New {active === 'chats' ? 'Chat' : 'Contact'}
                </button>
            </div>

            {
                modal ?
                    <div className="bg-[#000000a8] w-full h-full fixed top-0 right-0 " >
                        <div className="relative w-full h-full">
                            <div className="bg-white md:w-[40%] w-[80%] rounded absolute top-[50%] left-[50%] translate-x-[-50%] -translate-y-[50%]" >
                                {
                                   active === 'contacts' ? 
                                        <NewContact modal={modal} setModal={setModal} />
                                        :
                                        <NewChat modal={modal} setModal={setModal} />
                                }
                            </div>
                        </div>

                    </div>
                    : <></>
            }

        </div>
    );
}
