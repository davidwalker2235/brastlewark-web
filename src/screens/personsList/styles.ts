import { makeStyles, Theme, createStyles  } from '@material-ui/core/styles';

const styles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  container: {
    width: '80%',
    padding: 20
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default styles;