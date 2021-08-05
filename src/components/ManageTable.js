import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TableFooter } from "@material-ui/core";

const data = {
  "Jennifer O'Brien": {
    "Test boosted CRM Mark 1000": {
      "07/25/2021": 211.0,
      "Project Type": "Hourly",
      "Company Name": "Boosted CRM Test",
      Active: "Not Active",
      "07/18/2021": 100.0,
      "08/01/2021": 300.0,
    },
  },
  "Mark O'Brien": {
    "Boosted CRM Test - PHP Developer": {
      "07/18/2021": 13.0,
      "Project Type": "Hourly",
      "Company Name": "Boosted CRM Test",
      Active: "Active",
      "07/25/2021": 27.0,
    },
    "Boosted CRM Test - PHP Developer Another Test": {
      "07/25/2021": 120.0,
      "Project Type": "Hourly",
      "Company Name": "Boosted CRM Test",
      Active: "Active",
      "08/01/2021": 220.0,
    },
  },
};
const sumData = Object.keys(data).map((key) =>
  Object.keys(data[key]).map((findData) => data[key][findData])
);

const mergeData = (data) => {
  let subData = [];

  data.map((loadData, index) => {
    // console.log(loadData)

    const mergeValue = (data) => {
      const result = {}; //(1)

      data.forEach((basket) => {
        //(2)
        for (let [key, value] of Object.entries(basket)) {
          //(3)
          if (parseInt(result[key])) {
            //(4)
            result[key] += value; //(5)
          } else {
            //(6)
            result[key] = value;
          }
        }
      });
      return result; //(7)
    };

    const objectData = mergeValue(loadData);

    subData.push(objectData);
  });

  return subData;
};

const mergedObject = mergeData(sumData);

console.log(mergedObject);

const TableHeading = [
  { id: "Company Name", label: "Company Name", align: "right" },
  { id: "Project Type", label: "Project Type", align: "right" },
  { id: "07/18/2021", date: "07/18/2021", label: "07/18/2021", align: "right" },
  { id: "07/25/2021", date: "07/25/2021", label: "07/25/2021", align: "right" },
  { id: "08/01/2021", date: "08/01/2021", label: "08/01/2021", align: "right" },
  { id: "08/08/2021", date: "08/08/2021", label: "08/08/2021", align: "right" },
  { id: "08/15/2021", date: "08/15/2021", label: "08/15/2021", align: "right" },
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ManageTable = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Opportunity Name</TableCell>
            {TableHeading.map((headInfo, index) => (
              <TableCell key={index}>
                <p>{headInfo.label}</p>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {Object.keys(data).map((key, ind) => (
          <TableBody key={key}>
            <TableRow>
              <TableCell style={{ color: "red", fontSize: "20px" }}>
                {key}
              </TableCell>
            </TableRow>

            {Object.keys(data[key]).map((xData, ind) => (
              <TableRow key={ind}>
                <TableCell>
                  <p>{xData}</p>
                </TableCell>
                {TableHeading.map((headInfo, index) => {
                  return (
                    <TableCell key={index}>
                      <p>{data[key][xData][headInfo.label] || 0}</p>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
            {mergedObject.map((mData, i) =>
          ind === i ? (
            <TableRow key={i}>
              <TableCell>SubTotal</TableCell>

              {TableHeading.map((headInfo, index) => {
                console.log(headInfo.label);
                console.log(data[key]);
                return (
                  <TableCell key={index}>
                    {/* {
                                (parseInt(mData[headInfo.label])) !== isNaN
                               
                                ? ( */}
                    <p>
                      {parseInt(mData[headInfo.label]) ? (
                        <span style={{ fontWeight: "600" }}>
                          {" "}
                          {mData[headInfo.label]}{" "}
                        </span>
                      ) : null}
                    </p>
                    {/* ):null} */}
                  </TableCell>
                );
              })}
            </TableRow>
          ) : null
        )}
          </TableBody>
        ))}
      </Table>
    </TableContainer>
  );
};

export default ManageTable;
