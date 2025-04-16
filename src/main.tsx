import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Button} from "./index";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Button click={() => console.log('Clicked')} />
  </StrictMode>
)
