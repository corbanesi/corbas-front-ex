import { SiteHeader } from "@/components/site-header";
import { createFileRoute } from "@tanstack/react-router";
import { DataTable } from "./data-table";
import { usersColumns, type Users } from "./users-columns";

const users: Users[] = [
  { id: "u001", name: "Alice Johnson", email: "alice.johnson@example.com", role: "ADMIN" },
  { id: "u002", name: "Bob Smith", email: "bob.smith@example.com", role: "MANAGER" },
  { id: "u003", name: "Charlie Brown", email: "charlie.brown@example.com", role: "USER" },
  { id: "u004", name: "Diana Prince", email: "diana.prince@example.com", role: "USER" },
  { id: "u005", name: "Ethan Clark", email: "ethan.clark@example.com", role: "USER" },
  { id: "u006", name: "Fiona Davis", email: "fiona.davis@example.com", role: "MANAGER" },
  { id: "u007", name: "George Miller", email: "george.miller@example.com", role: "USER" },
  { id: "u008", name: "Hannah Wilson", email: "hannah.wilson@example.com", role: "USER" },
  { id: "u009", name: "Ian Thompson", email: "ian.thompson@example.com", role: "USER" },
  { id: "u010", name: "Julia Martinez", email: "julia.martinez@example.com", role: "USER" },
  { id: "u011", name: "Kevin Lee", email: "kevin.lee@example.com", role: "USER" },
  { id: "u012", name: "Laura Kim", email: "laura.kim@example.com", role: "USER" },
  { id: "u013", name: "Michael Scott", email: "michael.scott@example.com", role: "USER" },
  { id: "u014", name: "Nina Adams", email: "nina.adams@example.com", role: "USER" },
  { id: "u015", name: "Oscar Turner", email: "oscar.turner@example.com", role: "USER" },
  { id: "u016", name: "Paula Baker", email: "paula.baker@example.com", role: "USER" },
  { id: "u017", name: "Quentin Rogers", email: "quentin.rogers@example.com", role: "USER" },
  { id: "u018", name: "Rachel Cooper", email: "rachel.cooper@example.com", role: "USER" },
  { id: "u019", name: "Sam Edwards", email: "sam.edwards@example.com", role: "USER" },
  { id: "u020", name: "Tina Foster", email: "tina.foster@example.com", role: "USER" },
  { id: "u021", name: "Ulysses Gray", email: "ulysses.gray@example.com", role: "USER" },
  { id: "u022", name: "Victoria Hall", email: "victoria.hall@example.com", role: "USER" },
  { id: "u023", name: "William Young", email: "william.young@example.com", role: "USER" },
  { id: "u024", name: "Xavier Price", email: "xavier.price@example.com", role: "USER" },
  { id: "u025", name: "Yara Gonzalez", email: "yara.gonzalez@example.com", role: "USER" },
  { id: "u026", name: "Zack Rivera", email: "zack.rivera@example.com", role: "USER" },
  { id: "u027", name: "Amelia Stone", email: "amelia.stone@example.com", role: "USER" },
  { id: "u028", name: "Brian Ross", email: "brian.ross@example.com", role: "USER" },
  { id: "u029", name: "Clara Diaz", email: "clara.diaz@example.com", role: "USER" },
  { id: "u030", name: "Daniel Perez", email: "daniel.perez@example.com", role: "USER" },
];

export const Route = createFileRoute("/_authenticated/corbas/users/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <>
    <SiteHeader />
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2 md:py-6 space-y-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3 px-4 lg:px-6">
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
        </div>
        <div className="px-4 lg:px-6">
          <DataTable columns={usersColumns} data={users} />
        </div>
      </div>
    </div>
  </>;
}
