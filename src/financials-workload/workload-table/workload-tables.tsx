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
  OverflowMenu,
  OverflowMenuItem,
} from "@carbon/react";
import { usePagination } from "@openmrs/esm-framework";

export const WorkLoadTable: React.FC = () => {
  const { t } = useTranslation();
  const [currentPageSize, setCurrentPageSize] = useState<number>(10);

  const WorkLoadEntries = [
    {
      id: 1,
      department: "Antenatal Care",
      workload: 100,
    },
    {
      id: 2,
      department: "Maternity Deliveries",
      workload: 100,
    },
    {
      id: 3,
      department: "Dental Unit",
      workload: 50,
    },
    {
      id: 4,
      department: "ENT Unit",
      workload: 50,
    },
    {
      id: 5,
      department: "Eye Unit",
      workload: 100,
    },
    {
      id: 6,
      department: "Immunizations",
      workload: 100,
    },
    {
      id: 7,
      department: "In-Patient Department",
      workload: 50,
    },
    {
      id: 8,
      department: "Laboratory Department",
      workload: 50,
    },
    {
      id: 9,
      department: "Maternal and Child Health Children",
      workload: 100,
    },
    {
      id: 10,
      department: "Maternal and Child Health Mothers",
      workload: 100,
    },
    {
      id: 11,
      department: "Medical Outpatient Clinic",
      workload: 50,
    },
    {
      id: 12,
      department: "Prevention of Mother to Child Transmission Services",
      workload: 50,
    },
    {
      id: 13,
      department: "Outpatient department",
      workload: 50,
    },
    {
      id: 14,
      department: "Postnatal care Services",
      workload: 50,
    },
    {
      id: 15,
      department: "Procedures Department",
      workload: 50,
    },
    {
      id: 16,
      department: "Radiology Department",
      workload: 50,
    },
    {
      id: 17,
      department: "Pharmacy Department",
      workload: 50,
    },
  ];

  const isLoading = false;

  const searchResults = WorkLoadEntries.filter(() => {
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
    { id: 0, header: t("id", "S/No"), key: "id" },
    { id: 2, header: t("department", "DEPARTMENT"), key: "department" },
    { id: 3, header: t("workload", "WORKLOAD"), key: "workload" },
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
                totalItems={WorkLoadEntries.length}
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
