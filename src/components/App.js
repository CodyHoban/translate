import React from 'react'
import UserCreate from './UserCreate'
import { LanguageStore } from '../contexts/LangueageContext'
import ColorContext from '../contexts/ColorContext'
import LanguageSelector from './LanguageSelector'

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />

                    <ColorContext.Provider value="pink">
                            <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

export default App;