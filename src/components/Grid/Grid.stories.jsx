import Grid from './Grid';

export default {
  title: 'Grid',
  component: Grid,
};

export const Default = () => (
  <Grid $col={[1, 1, 2, 3, 4]}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Grid>
);
