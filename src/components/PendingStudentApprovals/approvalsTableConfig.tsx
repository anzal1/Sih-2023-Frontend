import { ColumnDef } from "@tanstack/react-table";

import { ChevronsUpDown, CopyIcon, GripHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export enum StatusFilter {
  Pending = "pending",
  Approved = "approved",
  Rejected = "rejected",
  ModificationRequired = "modification_requested",
}

export enum StateFilter {
  Active = "active",
  Inactive = "inactive",
}

export interface IExam {
  id: number;
  name: string;
  duration: number;
  startTime: string;
  totalQuestions: number;
  examType: string;
  description: string;
  passingMarks: number;
}

// interface ITableConfig {
//   setOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
// }

const TableConfig = () => {
  const columnsConfig: ColumnDef<IExam>[] = [
    {
      accessorKey: "id",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Id
            <ChevronsUpDown className="w-4 h-4 ml-2" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="flex gap-2">
          <div className="lowercase">{row.getValue("id")}</div>
          <button
            className={
              "text-slate-400 hover:text-slate-800 active:text-slate-400"
            }
            onClick={() => navigator.clipboard.writeText(row.getValue("id"))}
          >
            <CopyIcon size={16} />
          </button>
        </div>
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "email",
      header: () => <div className="">Email</div>,
      cell: ({ row }) => {
        return <div className="font-medium">{row.getValue("email")}</div>;
      },
    },
    // actions mei view documents ka option dena jisse ek modal khule jisme sare documents hon, usme approve ya deny ka option ho
    {
      id: "actions",
      accessorKey: "Actions",
      enableHiding: false,
      cell: ({ row }) => {
        //   console.log(row?.original?.id);
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-8 h-8 p-0 ">
                <span className="sr-only">Open menu</span>
                <GripHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return columnsConfig;
};

export default TableConfig;