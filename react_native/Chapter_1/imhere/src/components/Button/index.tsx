import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import AddIcon from "../../assets/icons/buttons/add_icon.svg";
import DeleteIcon from "../../assets/icons/buttons/remove_icon.svg";

import theme from '../../theme';
import { styles } from './styles';

interface IButtonProps extends TouchableOpacityProps {
  deleteIcon?: boolean;
}

export function Button({ deleteIcon = false, ...rest }: IButtonProps) {
  const backgroundColor = deleteIcon ? theme.COLORS.DELETE : theme.COLORS.SUCCESS;
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: backgroundColor }]} {...rest}>
      {deleteIcon ? <DeleteIcon /> : <AddIcon />}
    </TouchableOpacity>
  );
}