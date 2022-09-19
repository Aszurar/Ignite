import React from 'react';
import { TouchableOpacity } from 'react-native';

import AddIcon from "../../assets/icons/buttons/add_icon.svg";
import DeleteIcon from "../../assets/icons/buttons/remove_icon.svg";

import theme from '../../theme';
import { styles } from './styles';

interface IButtonProps {
  deleteIcon?: boolean;
}

export function Button({ deleteIcon = false }: IButtonProps) {
  const backgroundColor = deleteIcon ? theme.COLORS.DELETE : theme.COLORS.SUCCESS;
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: backgroundColor }]}>
      {deleteIcon ? <DeleteIcon /> : <AddIcon />}
    </TouchableOpacity>
  );
}