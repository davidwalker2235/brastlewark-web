import React, { FC, useState } from 'react';
import styles from './styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const FilterComponent: FC<any> = () => {
  const [value, setValue] = useState<number[]>([20, 37]);
  const [personName, setPersonName] = useState<string[]>([]);
  const classes = styles();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const valuetext = (value: number) => {
    return `${value}°C`;
  }

  const renderSlider = () => (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Age range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );

  const handleSelectMultipleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[]);
  };

  const renderMultiselect = () => (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
      <Select
        labelId="demo-mutiple-checkbox-label"
        id="demo-mutiple-checkbox"
        multiple
        value={personName}
        onChange={handleSelectMultipleChange}
        input={<Input />}
        renderValue={(selected) => (selected as string[]).join(', ')}
        MenuProps={MenuProps}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={personName.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )

  return (
    <div
      className={classes.list}
      role="presentation"
    >
      <List>
        <ListItem key="sdfsdfsdf">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </ListItem>
        <ListItem key="sdfsdfsdf">
          {renderSlider()}
        </ListItem>
        <ListItem key="sdfsdfsdf">
          {renderSlider()}
        </ListItem>
        <ListItem key="sdfsdfsdf">
          {renderSlider()}
        </ListItem>
        <ListItem key="sdfsdfsdf">
          {renderMultiselect()}
        </ListItem>
        <ListItem key="sdfsdfsdf">
          {renderMultiselect()}
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="sdfsdfsdf">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </ListItem>
      </List>
    </div>
  );
}

export default FilterComponent;