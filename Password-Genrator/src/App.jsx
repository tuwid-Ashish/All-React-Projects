import { useCallback, useEffect, useRef, useState } from 'react'


import './App.css'




function App() {
  const [lenght, setLength] = useState(8)
  const [Numberallowed, setNmberallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [Password, setPassword] = useState(" ")

  const Passwordref = useRef(null)

  const PasswordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (Numberallowed) str += "1234567890"
    if (charallowed) str += "!@#$%^&*(){}[]"

    for (let i = 0; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

      setPassword(pass)
    }
  }, [lenght, Numberallowed, charallowed, setPassword])

  const copyinput = useCallback(() => {
    Passwordref.current?.select()
    Passwordref.current?.setSelectionRange(0, 8)
    window.navigator.clipboard.writeText(Password)
  }
    , [Password])

  useEffect(() => { PasswordGenrator() }, [lenght, Numberallowed, charallowed, PasswordGenrator])
  return (
    <>
      <div className="container bg-gray-900 text-orange-500 rounded-lg h-36 my-10 px-4  max-w-2xl mx-auto">
        <h1 className='text-center bg-blue text-lg p-5'>Password Genrator</h1>
        <div className="container flex flex-col shadow-lg rounded overflow-hidden mb-4">
          <div>
            <input
              type="text"
              value={Password}
              className='w-5/6 outline-none rounded py-2 px-3'
              placeholder='Password'
              readOnly
              ref={Passwordref}

            />
            <button onClick={copyinput} className='px-3 py-2 m-1 rounded shrink-0 bg-blue-700 text-white'>copy </button>

          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input type="range"
                min={8} max={100}
                value={lenght}
                className='cursor-pointer'
                onChange={(e) => setLength(e.target.value)}
              />
              <label >Length:{lenght}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox"
                defaultChecked={Numberallowed}
                id='numberinput'

                className='cursor-pointer'
                onChange={(e) => setNmberallowed((prev) => !prev)}
              />
              <label >Number</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox"
                defaultChecked={charallowed}
                id='numberinput'

                className='cursor-pointer'
                onChange={(e) => setcharallowed((prev) => !prev)}
              />
              <label >character</label>
            </div>

          </div>
        </div>


      </div>
    </>
  )
}

export default App

