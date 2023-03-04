import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box } from '@mui/material';
// components
import { useChart } from '../../../components/chart';

// ----------------------------------------------------------------------

AppReceipe.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  instructions: PropTypes.array.isRequired,
  chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function AppReceipe({ title, subheader, instructions, chartData, ...other }) {
 
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
       {instructions?.map((obj)=><li>{obj}</li>)}
      </Box>
    </Card>
  );
}
