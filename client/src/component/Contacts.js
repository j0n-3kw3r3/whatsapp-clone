import React from 'react';
import { useContacts } from '../context/ContactsProvider';

export default function Contacts() {
    const { contacts } = useContacts()
    return (
        <div className="px-[.5rem] py-[1rem]  mt-[3rem]">

            {
                contacts.map((contact) => (
                    <div
                        className=' border-b border-b-gray p-2 capitalize  '
                        key={contact.id}>
                        {contact.name}
                    </div>
                )
                )
            }
        </div>

    );
}
