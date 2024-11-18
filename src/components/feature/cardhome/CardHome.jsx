import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CardHome() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Earnings Today</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-start gap-4">
          {/* Earnings display aligned to the left */}
          <div className="text-xl font-bold text-green-600">
            IDR.350.000.000.00
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 justify-center w-full">
        {/* First button centered and full width */}
        <Button className="w-full">Export to xlx</Button>
        {/* Second button centered and full width */}
        <Button className="w-full">View all item checkout</Button>
      </CardFooter>
    </Card>
  );
}
