import { useTable } from "@refinedev/react-table";
import { Table } from "antd";

export const StaffList = () => {
  const { tableProps } = useTable({ resource: "staff" });

  return (
    <Table {...tableProps} rowKey="id">
      <Table.Column dataIndex="id" title="ID" />
      <Table.Column dataIndex="name" title="Name" />
      <Table.Column dataIndex="email" title="Email" />
      {/* Add more fields as needed */}
    </Table>
  );
};
