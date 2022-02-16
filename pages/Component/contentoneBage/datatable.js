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
        width: 100,
      },
      {
        label: "Product Name",
        field: "ProductName",
        width: 270,
      },
      {
        label: "Price",
        field: "Price",
        width: 100,
      },
      {
        label: "Total Order",
        field: "totalOrder",
        sort: "asc",
        width: 100,
      },
      {
        label: "Total Amount",
        field: "TotalAmount",
        sort: "disabled",
        width: 150,
      },
    ],
    rows: [
      {
        trackingno: "#876364",
        ProductName: (
            <Stack direction="horizontal" gap={2}>
              <Image src="/imges/table/Rectangle91.png" width={30} height={30} />
              Camera Lens
            </Stack>
        ),
        Price:  "$178",
        totalOrder: "325",
        TotalAmount: "$1,46,660",

      },
      {
          trackingno: "#876368",
        ProductName: (
            <Stack  direction="horizontal" gap={2}>
              <Image src="/imges/table/Rectangle110.png" width={30} height={30} />
              Black Sleep Dress
            </Stack>
        ),
        Price:  "$14",
        totalOrder: "53",
        TotalAmount: "$46,660",

      },
      {
          trackingno: "#876412",
        ProductName: (
            <Stack direction="horizontal" gap={2}>
              <Image src="/imges/table/Rectangle111.png" width={30} height={30} />
              Argan Oil
            </Stack>
        ),
          Price:  "$21",
          totalOrder: "78",
          TotalAmount: "$3,46,676",
      },
      {
          trackingno: "#876621",
        ProductName: (
            <Stack direction="horizontal" gap={2}>
              <Image src="/imges/table/Rectangle90.png" width={30} height={30} />
                EAU DE Parfum
            </Stack>
        ),
        Price:  "$32",
        totalOrder: "98",
        TotalAmount: "$3,46,981",

      },
    ],
  });

  return (
      <>

  <MDBDataTableV5

          className="text-center"
          hover

          searchBottom={false} data={datatable} border="0" cellSpacing="0" cellpadding="0" filter="office" proSelect sortBottom={true} scrollX={true}
      />
      </>
  );
}
