import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function navbar(){
    const [menuOpen, setMenuOpen] = useState(false)
    return(
        <div className='text-2xl text-black'>
            <p>Hello tilak</p>
        </div>
    )
}