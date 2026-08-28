import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import axios from "axios";
import { Plus } from "lucide-react";

export function DashboardPage() {
  const handleClick = async () => {
    toast.add({
      title: "Success notification",
    });
    const res = await axios.post("/api/test");
    console.log(res.data);
  };
  return (
    <DashboardLayout>
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-xl">Apps</h3>
          <Button onClick={handleClick}>
            <Plus />
            New App
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
