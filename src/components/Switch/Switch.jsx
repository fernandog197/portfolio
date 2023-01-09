import { useState, useEffect } from 'react'

import './switch.css'

const Switch = () => {
  const [theme, setTheme] = useState('light')

  const handleChange = (e) => {
    setTheme(e.target.checked?'dark':'light')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className='switch__container'>
      <input type="checkbox" class="checkbox" id="checkbox" onChange={handleChange} />
      <label for="checkbox" class="label">
        <i class="fas fa-moon"></i>
        <i class='fas fa-sun'></i>
        <div class='ball' />
      </label>
      {`Set ${theme==='dark'?'Light':'Dark'} Mode`}
    </div>
  )
}

export default Switch