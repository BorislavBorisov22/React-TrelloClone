
import React from 'react';
import PropTypes from 'prop-types';


const List = ({ list }) => {
    return (
        <div className="sc-ckVGcZ pzoVb">
            <h4 className="sc-jKJlTe ldRhSy">{list.name}</h4>
            <hr />
            <div>
                <form>
                    <label><label><input type="text" name="cardName_list_24" value="" className="input" /></label></label>
                </form>
                {/* <div draggable="true">
                    <div className="sc-kGXeez dQRJlP" style="opacity: 1; box-shadow: rgba(0, 0, 0, 0.16) 0px 6px 6px, rgba(0, 0, 0, 0.23) 0px 6px 6px; text-decoration: none; background-color: rgb(202, 255, 222);">
                        <h3 className="sc-kpOJdX dUecFp">somelistname</h3>
                        <div className="sc-dxgOiQ bjdCWn">✓</div>
                    </div>
                </div> */}
            </div>
        </div>
    )
};

List.propTypes = {
    list: PropTypes.object.isRequired
};

export default List;