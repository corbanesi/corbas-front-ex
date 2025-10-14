import { type ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Users = {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "MANAGER" | "USER"
}

export const usersColumns: ColumnDef<Users>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
]