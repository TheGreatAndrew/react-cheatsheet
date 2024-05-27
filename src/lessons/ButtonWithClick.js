const ButtonWithClick = ({ onClick }) => {
    const handleClick = () => {
      console.log("Button clicked!");
      // You can call the function passed as a prop
      if (onClick) {
        onClick();
      }
    };
  
    return (
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
    );
  };
  
  export default ButtonWithClick