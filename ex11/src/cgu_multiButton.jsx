import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';

const MultiButton = () => {
    return (
        <div>
            <IconButton color="primary"><AddShoppingCartIcon /></IconButton>
            <IconButton color="primary"><DeleteIcon /></IconButton>
            <IconButton color="primary"><AlarmIcon /></IconButton>
        </div>
    );
};

export default MultiButton;