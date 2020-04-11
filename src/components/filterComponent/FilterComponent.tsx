import React, { FC, useState, useEffect } from 'react';
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
import locale from '../../shared/locale';
import { useSelector, useDispatch } from 'react-redux';
import { State, FilterData, Brastlewark } from '../../interfaces/appInterfaces';
import { getFilterData } from '../../actions/filterActions';

const FilterComponent: FC<any> = () => {
  const dispatch = useDispatch();
  const filterData: FilterData | undefined = useSelector((state: State) => state.filter.filterData);
  const globalData: Brastlewark[] = useSelector((state: State) => state.home.globalData);
  useEffect(() => {
    !filterData && dispatch(getFilterData(globalData));
  });

  const [value, setValue] = useState<number[]>([20, 37]);
  const [personName, setPersonName] = useState<string[]>([]);
  const classes = styles();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

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

  const renderMultiselect = (dataOption: string) => (
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
        {filterData && filterData[dataOption].map((name) => (
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
          <ListItemText primary={locale.SelectToFilter} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key="name">
          <TextField id="standard-basic" label="Standard" />
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
          {renderMultiselect('hairColors')}
        </ListItem>
        <ListItem key="sdfsdfsdf">
          {renderMultiselect('professions')}
        </ListItem>
      </List>
    </div>
  );
}

export default FilterComponent;