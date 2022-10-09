import {useEffect} from "react";
import {createBrowserHistory} from "history";
import {userConfirmation} from "./UserConfirmation";

const history = createBrowserHistory()

function useHistoryBlock(enabled: boolean, message?: string) {
    useEffect(() => {
        let unblock: () => void | undefined;

        if (enabled) {
            // Block navigation and register a callback that
            // fires when a navigation attempt is blocked.
            unblock = history.block((tx) => {
                // Navigation was blocked! Let's show a confirmation dialog
                // so the user can decide if they actually want to navigate
                // away and discard changes they've made in the current page.
                userConfirmation(message || 'Are you sure you want to go to ?', (isAccepted) => {
                    if (isAccepted) {
                        unblock?.();

                        // Retry the transition.
                        tx.retry();
                    }
                })
            });
        }

        return () => unblock?.();

    }, [enabled, message]);
}

export {history, useHistoryBlock}