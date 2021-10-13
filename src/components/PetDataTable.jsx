import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function PetDataTable(props) {
  // console.log("datatable", props.arrData);
  // console.log("2nd data", props.internalData);

  const anotherArr = [
    `Name: ${props.internalData.attributes.name}`,
    ` Age: ${props.internalData.attributes.ageString}`,
    ` Primary Breed: ${props.internalData.attributes.breedPrimary}`,
    ` Secondary Breed: ${props.internalData.attributes.breedSecondary}`,
    ` Coat Length: ${props.internalData.attributes.coatLength}`,
    ` Color: ${props.internalData.attributes.colorDetails}`,
    ` Gender: ${props.internalData.attributes.sex}`,
    ` Size: ${props.internalData.attributes.sizeGroup}`,
    ` Note: ${props.internalData.attributes.descriptionText}`,
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
        {anotherArr.map((element) => (
          <Box
            sx={{
              flexGrow: 0,
              bgcolor: "#dfffff",
              p: 1,
              flexDirection: "column",
              textAlign: "center",
              
            }}
          >
            <Typography sx={{ fontWeight: 'bold', letterSpacing: 2
           }} paragraph>{element}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default PetDataTable;
