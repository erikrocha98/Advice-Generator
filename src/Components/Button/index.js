import './style.css'
import buttonImg from '../../images/icon-dice.svg'

function Button () {
    return (
        <button className='ButtonStyle'>
            <img className='IconStyle'src={buttonImg} alt="" />
        </button>
        
    )
}

export default Button