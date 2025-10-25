import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { overviewSchema } from "@/lib/mockApi";
import type z from "zod";

export function SectionCards({
  data: initialData,
}: {
  data: z.infer<typeof overviewSchema>[];
}) {
  console.log(initialData);

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {initialData.map((data) => (
        <Card
          className="@container/card"
          data-test="highlight-card"
          key={data.id}
        >
          <CardHeader>
            <CardDescription>{data.title}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {data.value}
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                {data.growth.status === "up" ? (
                  <IconTrendingUp />
                ) : (
                  <IconTrendingDown />
                )}
                {data.growth.value}
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              {data.description}{" "}
              {data.growth.status === "up" ? (
                <IconTrendingUp className="size-4" />
              ) : (
                <IconTrendingDown className="size-4" />
              )}
            </div>
            <div className="text-muted-foreground">{data.more}</div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
