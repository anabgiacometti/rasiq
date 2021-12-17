import './style.css'
import prizeIcon from '../../../static/images/prize.png'
import Separator from '../section/separator';
import Section from '../section';


export default function Services() {

    return (
        <Section bgColor={'white'}>
            <h1>Nosso Serviços</h1>
            <Separator />
            <p>
                Sollicitudin ac orci phasellus egestas. Habitasse platea dictumst <strong>quisque sagittis</strong> purus sit amet volutpat consequat. Nibh cras pulvinar mattis nunc sed <strong>blandit libero volutpat sed</strong>. Consectetur lorem donec massa sapien faucibus et. Egestas pretium aenean pharetra magna ac placerat. Id nibh tortor id aliquet lectus.                </p>
            <p>
                Scelerisque purus semper eget duis. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Faucibus purus in <i>massa tempor</i>. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique.
            </p>
            <p>
                Non odio euismod lacinia at quis risus sed. Scelerisque mauris pellentesque pulvinar pellentesque.
            </p>
            <div className='labels'>
                <div className='label'>
                    <img src={prizeIcon} />
                    <p>Non odio euismod lacinia at quis risus sed. Scelerisque mauris pellentesque pulvinar pellentesque.</p>
                </div>
                <div className='label'>
                    <img src={prizeIcon} />
                    <p>Non odio euismod lacinia at quis risus sed. Scelerisque mauris pellentesque pulvinar pellentesque.</p>
                </div>
                <div className='label'>
                    <img src={prizeIcon} />
                    <p>Non odio euismod lacinia at quis risus sed. Scelerisque mauris pellentesque pulvinar pellentesque.</p>
                </div>
                <div className='label'>
                    <img src={prizeIcon} />
                    <p>Non odio euismod lacinia at quis risus sed. Scelerisque mauris pellentesque pulvinar pellentesque.</p>
                </div>
            </div>
        </Section>
    );
}