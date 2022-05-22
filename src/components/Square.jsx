const Square = ({ colorValue, colorHex, colorRgba, isDarkText }) => {
  return (
    <div
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? '#000' : '#fff',
      }}
    >
      <p>{colorValue ? colorValue : 'Empty Value'}</p>
      <p>{colorHex ? colorHex : null}</p>
      <p>{colorRgba ? JSON.stringify(colorRgba) : null}</p>
    </div>
  )
}

export default Square
