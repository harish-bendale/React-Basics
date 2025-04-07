import {useState, useCallback, useEffect, useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const passwordRef = useRef(null);

  const passwordGenerate = useCallback(()=> {
    let pass = "";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "+_)(*&^%$#@!|}{[]\":;'.,<>/?";

    for(let i=0; i<length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  },[length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(password.substring(0, 9));
  },[password]);

  useEffect(() => {
    passwordGenerate()
  },[passwordGenerate, length, numberAllowed, charAllowed]);

  return (
    <div className = "flex flex-col flex-wrap justify-center w-full h-screen">
      <h1 className = "font-bold ">PasswordGenerator</h1>
      <div className = "flex shadow-lg">
        <input
          type="text"
          value = {password}
          placeholder="Password"
          ref = {passwordRef}
        />
        <button className="outline-none" onClick={copyPasswordToClipboard}>copy</button>
      </div>
      <div>
        <input
          type="range"
          min = {6}
          max = {100}
          value = {length}
          onChange = {(e) => setLength(e.target.value)}
        />
        <label>Length :{length}</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked = {numberAllowed}
          id = "numberInput"
          onChange = {() => setNumberAllowed((prev) => !prev)}
        />
        <label htmlFor = "numberInput">Numbers</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked = {charAllowed}
          id = "charInput"
          onChange = {() => setCharAllowed((prev) => !prev)}
        />
        <label htmlFor = "charInput">Characters</label>
      </div>
    </div>
  )
}

export default App
