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
import { State, FilterData, Brastlewark, SelectedFilterData, FilterRanges } from '../../interfaces/appInterfaces';
import { getFilterData, getListDataFromFilter } from '../../actions/filterActions';
import { PersonEnum } from '../../shared/enums';

interface MultiselectData {
  [key: string]: string[];
};

const FilterComponent: FC<any> = () => {
  const dispatch = useDispatch();
  const filterData: FilterData | undefined = useSelector((state: State) => state.filter.filterData);
  const globalData: Brastlewark[] = useSelector((state: State) => state.home.globalData);
  const [slidersData, setSlidersData] = useState<FilterRanges>({
    [PersonEnum.AGE]: [],
    [PersonEnum.WEIGHT]: [],
    [PersonEnum.HEIGHT]: []
  });
  const [multiSelectValue, setMultiSelectValue] = useState<MultiselectData>({
    [PersonEnum.HAIR_COLOR]: [],
    [PersonEnum.PROFESSION]: []
  });
  const [personName, setPersonName] = useState<string>('');
  const classes = styles();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  useEffect(() => {
    !filterData && dispatch(getFilterData(globalData));
    if (filterData &&
        !slidersData[PersonEnum.AGE].length &&
        !slidersData[PersonEnum.WEIGHT].length &&
        !slidersData[PersonEnum.HEIGHT].length
        ) {
          setSlidersData({
            ...slidersData, 
            [PersonEnum.AGE]: [
              filterData.ranges[`${PersonEnum.AGE}MinValue`],
              filterData.ranges[`${PersonEnum.AGE}MaxValue`]
            ],
            [PersonEnum.WEIGHT]: [
              filterData.ranges[`${PersonEnum.WEIGHT}MinValue`],
              filterData.ranges[`${PersonEnum.WEIGHT}MaxValue`]
            ],
            [PersonEnum.HEIGHT]: [
              filterData.ranges[`${PersonEnum.HEIGHT}MinValue`],
              filterData.ranges[`${PersonEnum.HEIGHT}MaxValue`]
            ],
            }
          )
    }
  });

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChanges = (event: any, newValue: number | number[], sliderType: PersonEnum) => {
    setSlidersData({...slidersData, [sliderType]: newValue as number[]});
  };

  const renderSlider = (sliderType: PersonEnum) => (
    <div className={classes.root}>
      <Typography id={`range-slider-title-${sliderType}`} gutterBottom>
        {locale[sliderType]}
      </Typography>
      <Slider
        name={sliderType}
        value={slidersData[sliderType]}
        onChange={(event, value) => handleChanges(event, value, sliderType)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        max={filterData?.ranges[`${sliderType}MaxValue`]}
        min={filterData?.ranges[`${sliderType}MinValue`]}
      />
    </div>
  );

  const handleSelectMultipleChange = (event: React.ChangeEvent<{ value: unknown }>, multiSelectOption: PersonEnum) => {
    setMultiSelectValue({...multiSelectValue, [multiSelectOption]: event.target.value as string[]});
  };

  const renderMultiselect = (dataOption: PersonEnum) => (
    <FormControl className={classes.formControl}>
      <InputLabel id={`mutiple-input-label-${dataOption}`}>{locale[dataOption]}</InputLabel>
      <Select
        labelId={`mutiple-checkbox-label-${dataOption}`}
        id={`mutiple-checkbox-${dataOption}`}
        multiple
        value={multiSelectValue[dataOption]}
        onChange={(event) => handleSelectMultipleChange(event, dataOption)}
        input={<Input />}
        renderValue={(selected) => (selected as string[]).join(', ')}
        MenuProps={MenuProps}
      >
        {filterData && filterData[dataOption].map((name: any) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={multiSelectValue[dataOption].indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )

  const onChangeName = (event: any) => {
    setPersonName(event.target.value)
  }

  const onClickFilter = () => {
    dispatch(getListDataFromFilter({
      [PersonEnum.NAME]: personName,
      [PersonEnum.HAIR_COLOR]: multiSelectValue[PersonEnum.HAIR_COLOR],
      [PersonEnum.PROFESSION]: multiSelectValue[PersonEnum.PROFESSION],
      ranges: slidersData
    } as SelectedFilterData, globalData));
  }

  return (
    <div
      className={classes.list}
      role="presentation"
    >
      <List>
        <ListItem key="filterTitle">
          <ListItemText primary={locale.SelectToFilter} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={PersonEnum.NAME}>
          <TextField
            className={classes.nameImput}
            id="standard-basic"
            label={locale.Name}
            onChange={onChangeName} />
        </ListItem>
        <ListItem key={PersonEnum.AGE}>
          {renderSlider(PersonEnum.AGE)}
        </ListItem>
        <ListItem key={PersonEnum.WEIGHT}>
          {renderSlider(PersonEnum.WEIGHT)}
        </ListItem>
        <ListItem key={PersonEnum.HEIGHT}>
          {renderSlider(PersonEnum.HEIGHT)}
        </ListItem>
        <ListItem key={PersonEnum.HAIR_COLOR}>
          {renderMultiselect(PersonEnum.HAIR_COLOR)}
        </ListItem>
        <ListItem key={PersonEnum.PROFESSION}>
          {renderMultiselect(PersonEnum.PROFESSION)}
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem className={classes.filterButton} button key="filterButton" onClick={onClickFilter}>
          <ListItemText className={classes.buttonText} primary={locale.Filter} />
        </ListItem>
      </List>
    </div>
  );
}

export default FilterComponent;