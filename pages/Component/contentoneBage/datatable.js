import Image from "next/image";
import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Stack } from "react-bootstrap";

export default function Datatable() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Tracking no",
        field: "trackingno",

        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Tracking no",
        },
      },
      {
        label: "Product Name",
        field: "ProductName",
        width: 270,
      },
      {
        label: "Price ",
        field: "Price ",
        width: 100,
      },
      {
        label: "Total Order ",
        field: "totalOrder ",
        sort: "asc",
        width: 100,
      },
      {
        label: "Total Amount",
        field: "date",
        sort: "disabled",
        width: 150,
      },
    ],
    rows: [
      {
        trackingno: "#876364",
        ProductName: (
            <Stack className="pt-3" direction="horizontal" gap={2}>
              <Image src="/img/table/Rectangle91.png" width={30} height={30} />
              Camera Lens
            </Stack>
        ),
        Price:  "$170",
        totalOrder: "63",
        date: "2011/07/25",

      },
      {
        name: "#876368",
        ProductName: (
            <Stack  direction="horizontal" gap={2}>
              <Image src="/img/table/Rectangle110.png" width={30} height={30} />
              Camera Lens
            </Stack>
        ),
        office: "Singapore",
        age: "64",
        date: "2012/04/09",
        salary: "$138",
      },
      {
        name: "#876412",
        ProductName: (
            <Stack direction="horizontal" gap={2}>
              <Image src="/imges/table/Rectangle111.png" width={30} height={30} />
              Camera Lens
            </Stack>
        ),
        office: "New York",
        age: "63",
        date: "2010/01/04",
        salary: "$125",
      },
      {
        name: "#876621 ",
        ProductName: (
            <Stack direction="horizontal" gap={2}>
              <Image src="/imges/table/Rectangle90.png" width={30} height={30} />
              Camera Lens
            </Stack>
        ),
        office: "San Francisco",
        age: "56",
        date: "2012/06/01",
        salary: "$115",
      },
    ],
  });

  return (
      <MDBDataTableV5
          className="m-5"
          style={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            height: "335px",
            width: "719px",
            borderRadius: "10px",
          }}
          hover
          data={datatable}
          filter="office"
          proSelect
          searchBottom={false}
      />
  );
}
