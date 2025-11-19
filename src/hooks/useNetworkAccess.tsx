//Libraries
import { useState, useEffect } from "react"

const useNetworkAccess = () => {

    const [networkState, setNetworkState] = useState<boolean>(navigator.onLine);

    useEffect(() => { 
        const handleOnline = () => setNetworkState(true);
        const handleOffline = () => setNetworkState(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, [])

    return networkState;
}

export default useNetworkAccess;