import { Paper, Typography, Table, TableRow, TableCell } from "@mui/material";

export const CustomTooltipStackedChart = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Paper sx={{p:2, opacity:0.85}}>
          <Typography variant="h5">{label}</Typography>
          <Table size="small">
            <TableRow>
                <TableCell align='left'>Non-Opec</TableCell>
                <TableCell align='left'>{payload[0].payload['non_opec_tot']}</TableCell>
                <TableCell align='left'>{100*(payload[0].payload['non_opec_tot']/payload[0].payload['total_sum']).toFixed(4)}%</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align='left'>Opec</TableCell>
                <TableCell align='left'>{payload[0].payload['opec_tot']}</TableCell>
                <TableCell align='left'>{100*(payload[0].payload['opec_tot']/payload[0].payload['total_sum']).toFixed(4)}%</TableCell>
            </TableRow>
          </Table>
        </Paper>
      );
    }
    return null;
  };

  
export const CustomTooltipAveLineChart = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Paper sx={{p:2, opacity:0.85}}>
        <Typography variant="h5">{label}</Typography>
        <Table size="small">
          <TableRow>
              <TableCell align='left'>Non-Opec</TableCell>
              <TableCell align='left'>{(payload[0].payload['not_opec_roll_ave']).toFixed(3)}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell align='left'>Opec</TableCell>
              <TableCell align='left'>{(payload[0].payload['opec_roll_ave']).toFixed(3)}</TableCell>
          </TableRow>
        </Table>
      </Paper>
    );
  }
  return null;
};

export const CustomLegend = ({payload}) => {
    // TODO might come back to this
    return (
      <Typography variant="body">Legend Here</Typography>
    )
}