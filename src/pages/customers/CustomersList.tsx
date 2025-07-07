import { useTable } from "@refinedev/react-table";
import { Table } from "antd";

export const CustomersList = () => {
  const { tableProps } = useTable({ resource: "customers" });

  return <Table {...tableProps} rowKey="id" />;
};
