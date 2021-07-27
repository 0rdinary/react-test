import './AddCloset.css';
import './Closet.css';

import add from '../../../public/content/closet/add.png';

// {`/${add}`}
function AddCloset(props) {
    return (
        <div className='closet-wrapper scaleUp' onClick={props.setClosets}>
            <img className='add-img' src={`/${add}`} />
        </div>
    );
}

export default AddCloset;