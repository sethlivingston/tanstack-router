/// <reference types="vinxi/types/client" />
import { hydrateRoot } from 'react-dom/client'
import { StartClient } from '@tanstack/start'
import { createRouter } from './router'

const router = createRouter()
router.basepath = "CaseSensitive";

hydrateRoot(document.getElementById('root')!, <StartClient router={router} />)
