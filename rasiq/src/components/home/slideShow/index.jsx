import { useEffect, useRef, useState } from 'react';
import './style.css'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";


const mockedData =
    [
        { image: 'https://www.celmarmoveis.com.br/upload/galeria-ambientes/media/cozinha2.jpg', text: "#1 Uma frase curta para marketing aqui..." },
        { image: 'https://www.formaplanejados.com.br/images/empresa/forma-ambientes-planejados-1.png', text: "#2 Ut enim ad minim veniam, quis nostrud exercitation ullamco ." },
        { image: 'http://www.lacunaambientes.com.br/img/slider/slider-4.jpg', text: "#3 Excepteur sint occaecat cupidatat non proident." },
        { image: 'http://villelamoveis.com.br/images/ambientes/home/home-miguel.jpg', text: "#4 Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    ]


export default function SlideShow() {
    const [active, setActive] = useState(null)
    const [previous, setPrevious] = useState(null)
    const [direction, setDirection] = useState(null)
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    const isBackwards = (atual, previous) => {
        if (direction == 'back') return true
        else if (direction == 'forward') return false
        else if (direction == 'auto') return previous && previous > atual
        return false
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => {
                setActive((prevIndex) =>
                    prevIndex === mockedData.length - 1 ? 0 : prevIndex + 1
                )
                setPrevious(null)
                setDirection(null)
            },
            5000
        );

        return () => {
            resetTimeout();
        };
    }, [active]);

    const renderSlides = () => {
        let _previous
        if (previous != null) _previous = previous
        else _previous = active == 0 ? mockedData.length - 1 : active - 1

        return mockedData.map((item, index) => {
            let classname = ''
            if (index == 0 && active == null) classname = `active`
            if (index == _previous) classname = `slideout${isBackwards(active, _previous) ? '-back' : ''}`
            else if (index == active) classname = `slidein${isBackwards(active, _previous) ? '-back' : ''}`

            return (
                <div className={`slide slide-${index} ${classname}`} style={{ backgroundImage: `url(${item.image})` }}>
                    <p>{item.text}</p>
                </div>)
        })
    }

    const renderDots = () => {
        return mockedData.map((item, index) => {
            const classname = active == index || active == null && index == 0 ? 'active' : ''
            return <div className={`dot ${classname}`} onClick={() => handleClick(index, 'auto')} />
        })
    }

    const handleClick = (index, direction) => {
        const _active = active ? active : 0

        if(_active == index) return
        else if (index == -1) index = mockedData.length - 1
        else if (index >= mockedData.length) index = 0
        setPrevious(_active)
        setActive(index)
        setDirection(direction)
    }

    return (
        <div id="slideshow">
            <div className="slides">
                {renderSlides()}
                <div className='dots'>
                    {renderDots()}
                </div>
                <div className='arrow left' onClick={() => handleClick(active - 1, 'back')}><HiChevronLeft /></div>
                <div className='arrow right'><HiChevronRight onClick={() => handleClick(active + 1, 'forward')} /></div>
            </div>
        </div>
    );
}