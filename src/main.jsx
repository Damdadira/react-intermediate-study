import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppXY from './AppXY.jsx'
import AppMentor from './AppMentor.jsx'
import AppMentors from './AppMentors.jsx'
import AppForm from './AppForm.jsx'
import AppWrap from './AppWrap.jsx'
import AppCard from './AppCard.jsx'
import AppTheme from './AppTheme.jsx'
import AppMentorsButton from './AppMentorsButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppXY /> */}
    {/* <AppMentor /> */}
    {/* <AppMentors /> */}
    {/* <AppForm /> */}
    {/* <AppWrap /> */}
    {/* <AppCard /> */}
    {/* <AppTheme /> */}
    <AppMentorsButton />
  </StrictMode>,
)
