function themeDark(btn, classDark){
  const $themeBtn = document.querySelector(btn)
  const $selectorsDataDark = document.querySelectorAll('[data-dark]')

  let moon = '🌙', sun = '☀️'

  const lightMode = ()=>{
    $selectorsDataDark.forEach(item => item.classList.remove(classDark))
    $themeBtn.textContent = moon
  }
  const darkMode = ()=>{
    $selectorsDataDark.forEach(item => item.classList.add(classDark))
    $themeBtn.textContent = sun
  }

  if (localStorage.getItem('theme') == sun) darkMode()
  else lightMode()

  addEventListener('click', e=>{
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) darkMode()
      else lightMode()
      
      localStorage.setItem('theme', $themeBtn.textContent)
    }
  })
}

themeDark('.dark-theme-btn', 'dark-mode')

// function changeTheme(theme){
//   addEventListener('click', e =>{
//     if (e.target.matches(theme) || e.target.matches(`${theme} i`)) {
//       const $main = document.querySelector('.main')
//       const $theme = document.querySelector(theme)
//       const $icon = document.querySelector(`${theme} i`)
//       // bi-brightness-high // bi-moon
//       $icon.classList.toggle('bi-moon')
//       $theme.classList.toggle('theme--dark')
//       $icon.classList.toggle('bi-brightness-high')
//       $main.classList.toggle('theme-dark')
//     }
//   })

// }
// changeTheme('.theme')