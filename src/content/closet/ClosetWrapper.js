import './ClosetWrapper.css';

import Closet from './Closet';
import AddCloset from './AddCloset';

function ClosetWrapper(props) {
    return (
        <div className='closet-div'>
            { props.closets.map( (closet, index) =>
              <Closet key={index} closet={closet} />
            )}
            <AddCloset setClosets={props.setClosets} />
        </div>
    );
}

export default ClosetWrapper;