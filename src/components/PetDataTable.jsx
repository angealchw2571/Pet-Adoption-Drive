import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

function PetDataTable(props) {
  console.log("datatable", props.arrData);
  console.log("2nd data", props.internalData);
  const anotherArr = [
     `Name: ${props.internalData.attributes.name }`,
    ` Age: ${props.internalData.attributes.ageString}`,
    ` Primary Breed: ${props.internalData.attributes.breedPrimary }`,
    ` Secondary Breed: ${props.internalData.attributes.breedSecondary }`,
    ` Coat Length: ${props.internalData.attributes.coatLength }`,

    ` Color: ${props.internalData.attributes.colorDetails }`,
    ` Gender: ${props.internalData.attributes.sex }`,
    ` Size: ${props.internalData.attributes.sizeGroup }`,
    ` Note: ${props.internalData.attributes.descriptionText }`,
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          p: 5,
          flexDirection: "column",
        }}
      >
        {/* <Drawer
         sx={{
           width: drawerWidth,
           flexShrink: 0,
           '& .MuiDrawer-paper': {
             width: drawerWidth,
             boxSizing: 'border-box',
           },
         }}
         variant="permanent"
         anchor="right"
       >
         <Toolbar />
         <Divider />
         <List>
           {['Name', 'Age', 'Gender', 'Breed', 'Size'].map((text, index) => (
             <ListItem button key={text}>
               <ListItemText primary={text} />
             </ListItem>
           ))}
         </List>
         <Divider />
       </Drawer> */}
        {anotherArr.map((element) => (
          <Box
            sx={{
              flexGrow: 0,
              bgcolor: "skyblue",
              p: 2,
              flexDirection: "column",
            }}
          >
            <Typography paragraph>
              {element}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
    //! =================================================================================================================

    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 500 }} aria-label="customized table">
    //     <TableHead>
    //       <TableRow>
    //         <StyledTableCell align="center">
    //           {props.internalData.attributes.name}
    //         </StyledTableCell>
    //         <StyledTableCell></StyledTableCell>
    //       </TableRow>
    //     </TableHead>

    //     <TableBody>
    //       {props.arrData.map((element) => (
    //         <StyledTableRow key={element.key}>
    //           <StyledTableCell component="th" scope="row">
    //             {element.key}
    //           </StyledTableCell>
    //           <StyledTableCell>{element.value}</StyledTableCell>
    //         </StyledTableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
}

export default PetDataTable;
