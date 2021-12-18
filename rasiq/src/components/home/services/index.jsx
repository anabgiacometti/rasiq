import './style.css'
import residencial from '../../../static/images/residencial.jpg'
import comercial from '../../../static/images/comercial.jpg'
import Separator from '../section/separator';
import Section from '../section';
import { HiArrowRight } from "react-icons/hi";
import RippleButton from '../../button/rippleButton';



export default function Services() {

    return (
        <Section bgColor={'white'}>
            <h1>Nosso Serviços</h1>
            <Separator />
            <div className='cards'>
                <div className='card' style={{ backgroundImage: `url('${residencial}')` }}>
                    <div className='text'>
                        <h1>Projetos Residenciais</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <RippleButton>Saiba Mais <HiArrowRight /></RippleButton>
                    </div>
                </div>
                <div className='card' style={{ backgroundImage: `url('${comercial}')` }}>
                    <div className='text'>
                        <h1>Projetos Comerciais</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <RippleButton>Saiba Mais <HiArrowRight /></RippleButton>
                    </div>
                </div>
                <div className='card' style={{ backgroundImage: `url('${comercial}')` }}>
                    <div className='text'>
                        <h1>Projetos Comerciais</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <RippleButton>Saiba Mais <HiArrowRight /></RippleButton>
                    </div>
                </div>
                <div className='card' style={{ backgroundImage: `url('${residencial}')` }}>
                    <div className='text'>
                        <h1>Projetos Residenciais</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <RippleButton>Saiba Mais <HiArrowRight /></RippleButton>
                    </div>
                </div>
            </div>
        </Section>
    );
}