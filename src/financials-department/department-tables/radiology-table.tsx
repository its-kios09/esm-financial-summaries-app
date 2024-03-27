import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  DataTable,
  DataTableSkeleton,
  Pagination,
  TableContainer,
  TableToolbar,
  TableToolbarSearch,
  OverflowMenu,
  OverflowMenuItem,
} from "@carbon/react";
import { usePagination } from "@openmrs/esm-framework";

export const RadiologyTable: React.FC = () => {
  const { t } = useTranslation();
  const [currentPageSize, setCurrentPageSize] = useState<number>(10);

  const RadiologyWorkListEntries = [
    {
      name: "John Doe",
      date: "2024-03-25",
      radiotest: "X-ray Chest Bilateral",
      id: "P123",
      category: "Paying",
      sub: "General patient",
      waiver: 0,
      actual: 500,
      paid: 500,
    },
    {
      name: "Jane Smith",
      date: "2024-03-26",
      radiotest: "X-ray Chest Bilateral",
      id: "P456",
      category: "paying",
      sub: "General Patient",
      waiver: 0,
      actual: 500,
      paid: 500,
    },
    {
      name: "Alice Johnson",
      date: "2024-03-22",
      radiotest: "Skull Xray",
      id: "P789",
      category: "paying",
      sub: "General Patient",
      waiver: 0,
      actual: 1000,
      paid: 1000,
    },
    {
      name: "Alice Johnson",
      date: "2024-03-22",
      radiotest: "Skull Xray",
      id: "P789",
      category: "paying",
      sub: "General Patient",
      waiver: 0,
      actual: 1000,
      paid: 1000,
    },
    {
      name: "John Doe",
      date: "2024-03-25",
      radiotest: "X-ray Chest Bilateral",
      id: "P123",
      category: "Paying",
      sub: "General Patient",
      waiver: 0,
      actual: 500,
      paid: 500,
    },
    {
      name: "Jane Smith",
      date: "2024-03-26",
      radiotest: "X-ray Chest Bilateral",
      id: "P456",
      category: "paying",
      sub: "General Patient",
      waiver: 0,
      actual: 500,
      paid: 500,
    },
    {
      name: "Alice Johnson",
      date: "2024-03-22",
      radiotest: "Skull Xray",
      id: "P789",
      category: "paying",
      sub: "General Patient",
      waiver: 0,
      actual: 1000,
      paid: 1000,
    },
    {
      name: "Alice Johnson",
      date: "2024-03-22",
      radiotest: "Skull Xray",
      id: "P789",
      category: "paying",
      sub: "General Patient",
      waiver: 0,
      actual: 1000,
      paid: 1000,
    },
    {
      name: "John Doe",
      date: "2024-03-25",
      radiotest: "X-ray Chest Bilateral",
      id: "P123",
      category: "Paying",
      sub: "General Patient",
      waiver: 0,
      actual: 500,
      paid: 500,
    },
    {
      name: "Jane Smith",
      date: "2024-03-26",
      radiotest: "X-ray Chest Bilateral",
      id: "P456",
      category: "paying",
      sub: "General Patient",
      waiver: 0,
      actual: 500,
      paid: 500,
    },
    {
      name: "Alice Johnson",
      date: "2024-03-22",
      radiotest: "Skull Xray",
      id: "P789",
      category: "paying",
      sub: "General Patient",
      waiver: 0,
      actual: 1000,
      paid: 1000,
    },
  ];

  const isLoading = false;

  const searchResults = RadiologyWorkListEntries.filter(() => {
    return true; // No filtering applied for now
  });

  const {
    goTo,
    results: paginatedResults,
    currentPage,
  } = usePagination(searchResults, currentPageSize);

  const pageSizes = [10, 20, 30, 40, 50];

  const rows = useMemo(() => {
    return paginatedResults.map((entry) => ({
      ...entry,
      action: (
        <OverflowMenu
          flipped={document?.dir === "rtl"}
          aria-label="overflow-menu"
        >
          <OverflowMenuItem itemText="Print Receipt" />
        </OverflowMenu>
      ),
    }));
  }, [paginatedResults]);

  const tableColumns = [
    { id: 0, header: t("date", "TRANSACTION DATE"), key: "date" },
    { id: 1, header: t("radiotest", "RADIOLOGY TEST DONE"), key: "radiotest" },
    { id: 2, header: t("id", "PATIENT IDENTIFIER"), key: "id" },
    { id: 3, header: t("name", "PATIENT NAME"), key: "name" },
    { id: 4, header: t("category", "CATEGORY"), key: "category" },
    { id: 5, header: t("sub", "SUB CATEGORY"), key: "sub" },
    { id: 6, header: t("waiver", "WAIVER AMOUNT"), key: "waiver" },
    { id: 7, header: t("actual", "ACTUAL AMOUNT"), key: "actual" },
    { id: 8, header: t("paid", "PAID AMOUNT"), key: "paid" },
    { id: 9, header: t("action", "ACTION"), key: "action" },
  ];

  return isLoading ? (
    <DataTableSkeleton />
  ) : (
    <div>
      <DataTable
        rows={rows}
        headers={tableColumns}
        useZebraStyles
        overflowMenuOnHover={true}
        isSortable
      >
        {({
          rows,
          headers,
          getTableProps,
          getHeaderProps,
          getRowProps,
          getTableContainerProps,
        }) => (
          <>
            <TableContainer {...getTableContainerProps()}>
              <TableToolbar
                style={{
                  position: "static",
                  height: "3rem",
                  overflow: "visible",
                  margin: 0,
                  backgroundColor: "transparent",
                }}
              >
                <TableToolbarSearch />
              </TableToolbar>
              <Table {...getTableProps()} aria-label="sample table">
                <TableHead>
                  <TableRow>
                    {headers.map((header, i) => (
                      <TableHeader
                        key={i}
                        {...getHeaderProps({
                          header,
                        })}
                      >
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex} {...getRowProps({ row })}>
                      {row.cells.map((cell, cellIndex) => (
                        <TableCell key={cellIndex}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Pagination
                forwardText="Next page"
                backwardText="Previous page"
                page={currentPage}
                pageSize={currentPageSize}
                pageSizes={pageSizes}
                totalItems={RadiologyWorkListEntries.length}
                onChange={({ pageSize, page }) => {
                  if (pageSize !== currentPageSize) {
                    setCurrentPageSize(pageSize);
                    goTo(1);
                  }
                  if (page !== currentPage) {
                    goTo(page);
                  }
                }}
              />
            </TableContainer>
          </>
        )}
      </DataTable>
    </div>
  );
};
