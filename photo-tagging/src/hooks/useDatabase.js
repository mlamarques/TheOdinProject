import { useEffect, useState } from 'react'
import { projectDatabase } from '../firebase/config'

const useDatabase = (collection) => {
    const [playersScore, setPlayersScore] = useState([])

    useEffect(() => {projectDatabase.ref(collection)
            .limitToLast(10)
            .orderByChild("time")
            .on('value', (snapshot) => {
                const data = []
                snapshot.forEach(item => {
                    data.push({key: item.key, item: item.val()})
                })
                // const data = snapshot.val()
                setPlayersScore(data)
            })
    }, [collection])

    return { playersScore }
}

export default useDatabase