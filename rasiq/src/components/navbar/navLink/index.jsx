import { useEffect, useState } from 'react';

export default function NavLinks({ indexScrolled }) {
    const [activeItem, setActiveItem] = useState('home')

    useEffect(() => {
        const url = window.location.href.split('/')
        let item = url[url.length - 1].replace('#', '')
        if (item !== '') setActiveItem(item)
    }, [])

    useEffect(() => {
        if (indexScrolled == 0) setActiveItem('home')
        else if (indexScrolled == 1) setActiveItem('sobre')
        else if (indexScrolled == 2) setActiveItem('servicos')
        else if (indexScrolled == 3) setActiveItem('orcamento')
        else if (indexScrolled == 4) setActiveItem('loja')
    }, [indexScrolled])

    const NavLink = (description, url) => {
        return <a href={`/#${url}`} className={activeItem === url ? 'active' : ''} onClick={() => setActiveItem(url)}>{description}</a>
    }

    return (
        <div className='links'>
            {NavLink('Home', 'home')}
            {NavLink('Sobre Nós', 'sobre')}
            {NavLink('Serviços', 'servicos')}
            {NavLink('Orçamento', 'orcamento')}
            {NavLink('Loja Virtual', 'loja')}
        </div>
    )
}