import './style.css'

export default function Section({ bgColor, children }) {

    return (
        <div id="section" className={bgColor}>
            <div className='content'>
                {children}
            </div>
        </div>
    );
}