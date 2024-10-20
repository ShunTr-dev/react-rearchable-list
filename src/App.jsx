import Place from './components/SearchableList/Place.jsx'
import SearchableList from './components/SearchableList/SearchableList.jsx'

import PLACES from './places.js'

function App() {
    return (
        <main>
            <section>
                <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
                    {(item) => <Place item={item} />}
                </SearchableList>
                <SearchableList items={['item 1', 'item 2', 'item 3']} itemKeyFn={(item) => item}>
                    {(item) => item}
                </SearchableList>
            </section>
        </main>
    )
}

export default App
