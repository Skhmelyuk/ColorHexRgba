import Input from './components/Input'
import { useState } from 'react'
import Square from './components/Square'

function App() {
  const [colorValue, setColorValue] = useState('')
  const [colorHex, setColorHex] = useState('')
  const [colorRgba, setColorRgba] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        colorHex={colorHex}
        colorRgba={colorRgba}
        isDarkText={isDarkText}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setColorHex={setColorHex}
        setColorRgba={setColorRgba}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  )
}

export default App
