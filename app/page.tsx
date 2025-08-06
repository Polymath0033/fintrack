import DashboardTitle from "@/components/dashboard/dashboard-title"
import DashboardNumberCards from "@/components/dashboard/dashboard-number-cards";
import TransactionTable from "@/components/dashboard/transaction-table";

export default function Home() {
  return (
    
      <div className="flex flex-col items-start [flex:1_0_0]">
        <DashboardTitle />
        <div className="flex flex-col flex-start space-y-3 w-full" >
          <h4 className="text-secondary font-bold text-xl leading-[120%] -tracking-[0.4px] " >Summary</h4>
           <DashboardNumberCards />
        </div>
        <div className="flex flex-col items-start gap-4.5 mt-3 my-7 w-full">
          <TransactionTable />
        </div>
      </div>
  )
}
