import {createContext, useState} from 'react'

// const noop = () => {}

type ModalContextT = {
    message?: string
}

const ModalContext = createContext<ModalContextT>({

    message: 'You are about to leave this page. Are you sure ?'
})

function ModalProvider({ children }: any) {
    const[isOpen, setIsOpen] = useState(false)

    const handleToggleModal = (v: boolean) => setIsOpen(v)

    return (
        <ModalContext.Provider value={{}}>

            {children}
        </ModalContext.Provider>
    )


}