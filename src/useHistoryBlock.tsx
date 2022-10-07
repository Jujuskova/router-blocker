import {useEffect, useRef, useState} from "react";
import {createBrowserHistory, History} from "history";
import {userConfirmation} from "./UserConfirmation";

const history = createBrowserHistory()


function useHistoryBlock(enabled: boolean) {
    // const ref = useRef(false)
    const [confirm, setConfirm] = useState(false)

    const cb = (v: boolean) => {
        // if(ref.current) ref.current = v
        setConfirm(v)
    }


    useEffect(() => {
        let unblock: () => void | undefined;
        if (enabled) {
            // Block navigation and register a callback that
            // fires when a navigation attempt is blocked.
            unblock = history.block((tx) => {
                // Navigation was blocked! Let's show a confirmation dialog
                // so the user can decide if they actually want to navigate
                // away and discard changes they've made in the current page.
                userConfirmation('Are you sure you want to go to ?', cb)


                if(confirm) {
                // if (window.confirm(`Are you sure you want to go to ?`)) {
                    // Unblock the navigation.
                    unblock?.();

                    // Retry the transition.
                    tx.retry();
                }
            });
        }

        return () => {
            if (typeof unblock === "function") {
                unblock();
            }
        };
    }, [enabled, confirm]);
}

export {history, useHistoryBlock}