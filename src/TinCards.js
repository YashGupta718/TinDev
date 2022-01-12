import React, {useEffect, useState} from 'react'
import TinCard from 'react-tinder-card';
import './TinCards.css'
import database from './firebase';
//import { unsubscribe } from '@mui/icons-material';

function TinCards() {
    const [people, setPeople] = useState([]);
    //useEffect -- piece of code which runs based on a condition
    useEffect(() => {
        const unsubscribe = database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ));
        return() => {
            // this is the cleanup
            unsubscribe();
        };
    },[]);

    return (
        <div>
            {/* <h1>TinDev Cards</h1> */}

            <div className='cardContainer'>
            {people.map((person) => (
                <TinCard
                  className='swipe'
                  key={person.name} // always use key....makes ur app faster
                  preventSwipe={['up', 'down']}>
                    <div style={{backgroundImage: `url(${person.url})`, color: 'white' }} className='card'>
                        <h3>{person.name}</h3>
                    </div>
                </TinCard>
            ))}
            </div>    
        </div>
    )
}

export default TinCards