import React from 'react'
import ReactDOM from 'react-dom'

type UserConfirmationT = (
    message: string,
    callbackProps: (answer: boolean) => void,
) => void

const userConfirmation: UserConfirmationT = (message, callback) => {
    const container = document.createElement('div')
    document.body.appendChild(container)

    const removeModal = (answer: boolean) => {
        ReactDOM.unmountComponentAtNode(container)
        document.body.removeChild(container)
        callback(answer)
    }

    const dialogMessage = message || 'You are about to leave this page. '

    ReactDOM
        .render(
            <div className="modal-outline">
                <div className="modal">
                    <p>{dialogMessage}</p>
                    <div className="modal-footer">
                    <button type="button" onClick={() => removeModal(false)}>Cancel</button>
                    <button type="button" onClick={() => removeModal(true)}>Confirm</button>
                    </div>
                </div>
            </div>,
            container,
        )

}
export {userConfirmation}