import { Link } from 'react-router-dom';

import './Closet.css';

import kennel from '../../../public/content/closet/kennel.png';
import { ClosetSetting } from './ClosetSetting';

//{`/${imgSrc}`}

function Closet(props) {
    let imgSrc = (props.closet.img == null ? kennel : null);

    return (
        <Link className='closet-wrapper scaleUp' to={{
            // `/closet/${props.closet}`
            pathname: '/closet/setting',
            state: {
                closet: props.closet
            }
        }}>
            <div className=''>
                <div className='closet-image-wrapper fadeIn'>
                    <img src={`/${imgSrc}`} />
                </div>
                <h3 className='fadeIn'>{props.closet.name}</h3>
            </div>
        </Link>
    );
}

export default Closet;