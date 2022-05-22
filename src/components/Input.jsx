import toHex from 'colornames'
import rgba from 'color-rgba'

const Input = ({
  colorValue,
  setColorValue,
  setColorHex,
  setColorRgba,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="color">Add Color Name:</label>
      <input
        autoFocus
        required
        id="color"
        type="text"
        placeholder="Add color name"
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value)
          setColorHex(toHex(e.target.value))
          e.target.value ? setColorRgba(rgba(e.target.value)) : setColorRgba('')
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  )
}

export default Input
