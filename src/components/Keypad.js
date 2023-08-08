// Code Keypad Component Here

function Keypad() {
  return (
    <input
      type="password"
      placeholder="Enter password"
      onChange={() => console.log("Entering password...")}
    />
  );
}

export default Keypad;
