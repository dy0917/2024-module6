export default function HelloWorld({ name, count, onClick, children }) {
  const bool = count % 2 == 0;

  if (bool) {
    return (
      <>
        {bool ? <div>Hello world {name} </div> : <div>else</div>}
        <button onClick={onClick}>Click</button>
        {}
        {children}
      </>
    );
  } else {
    return <div>adfasafsdf</div>;
  }
}

export function aF() {
  console.log(" a f");
}

export function bF() {
  console.log(" b f");
}
