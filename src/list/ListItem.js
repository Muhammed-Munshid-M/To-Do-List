import React from 'react';
import Label from './Label';

function ListItem() {
    return (
      <div className='list-item'>
      <hr />
      <div className='list-title'>
        <h4>My Title Two</h4>
      </div>
      <div className='list-descr'>
        This is a very big description
      </div>
      <div className='List-label'>
        <Label />
        <Label />
        <Label />
      </div>
      <hr />
    </div>
    );
  }

  export default ListItem;