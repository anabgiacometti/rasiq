import './style.css'
import toolsIcon from '../../../../static/images/ferramentas32px.png'


export default function Separator() {

    return (
        <div className='separator'>
            <div className='line' />
            <img src={toolsIcon} />
            <div className='line' />
        </div>
    );
}