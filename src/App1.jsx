import Header from '/components/Header.jsx'
import Entry from '/components/Entry';
import './App.css';
import data from '../data';

function App1() {
    //console.log(data)
    const journalEntries = data.map((items, index) => {
        return (
            <Entry key={index}
                image={items.img} country={items.country}
            />
        )
    })
    return (
        <div>
            <Header />
            {journalEntries}
        </div>
    )
}
export default App1;
