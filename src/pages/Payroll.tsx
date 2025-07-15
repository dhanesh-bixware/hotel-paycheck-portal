import { useAuth } from '@/contexts/AuthContext';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DollarSign } from 'lucide-react';

const Payroll = () => {
  const { user } = useAuth();

  const payrollProcesses = [
    {
      companyName: 'CRETE LODGING LLC',
      startDate: '11-01-2024',
      endDate: '11-15-2024',
      totalBusinessSummary: 145000,
      totalDepartmentAmount: 85000,
      process: 'Pending',
      status: 'In Progress'
    },
    {
      companyName: 'LNK2 LODGING LLC',
      startDate: '10-16-2024',
      endDate: '10-31-2024',
      totalBusinessSummary: 125000,
      totalDepartmentAmount: 72000,
      process: 'Completed',
      status: 'Processed'
    },
    {
      companyName: 'DMK INVESTMENTS LLC',
      startDate: '10-01-2024',
      endDate: '10-15-2024',
      totalBusinessSummary: 98000,
      totalDepartmentAmount: 58000,
      process: 'Completed',
      status: 'Processed'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Processed':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Processed</Badge>;
      case 'In Progress':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">In Progress</Badge>;
      case 'Pending':
        return <Badge variant="outline" className="border-orange-200 text-orange-800">Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getProcessBadge = (process: string) => {
    switch (process) {
      case 'Completed':
        return <Badge className="bg-green-600 hover:bg-green-700 text-white">Completed</Badge>;
      case 'Pending':
        return <Badge className="bg-orange-600 hover:bg-orange-700 text-white">Pending</Badge>;
      default:
        return <Badge variant="outline">{process}</Badge>;
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Payroll Process</h1>
            <p className="text-muted-foreground">
              Manage and process payroll for all hotel entities
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Process All Payroll
            </Button>
            <Button variant="outline">
              Export Summary
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Companies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{payrollProcesses.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Business Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${payrollProcesses.reduce((sum, process) => sum + process.totalBusinessSummary, 0).toLocaleString()}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Department Amount</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${payrollProcesses.reduce((sum, process) => sum + process.totalDepartmentAmount, 0).toLocaleString()}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Processed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {payrollProcesses.filter(p => p.status === 'Processed').length}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5" />
              <span>Payroll Process Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium">Company Name</th>
                    <th className="text-left p-4 font-medium">Start Date</th>
                    <th className="text-left p-4 font-medium">End Date</th>
                    <th className="text-left p-4 font-medium">Total Business Summary</th>
                    <th className="text-left p-4 font-medium">Total Department Amount</th>
                    <th className="text-left p-4 font-medium">Process</th>
                    <th className="text-left p-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {payrollProcesses.map((process, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="p-4 font-medium">{process.companyName}</td>
                      <td className="p-4">{process.startDate}</td>
                      <td className="p-4">{process.endDate}</td>
                      <td className="p-4">${process.totalBusinessSummary.toLocaleString()}</td>
                      <td className="p-4">${process.totalDepartmentAmount.toLocaleString()}</td>
                      <td className="p-4">{getProcessBadge(process.process)}</td>
                      <td className="p-4">{getStatusBadge(process.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {payrollProcesses.length === 0 && (
              <div className="text-center py-8">
                <DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-medium mb-2">No Payroll Processes</h3>
                <p className="text-sm text-muted-foreground">
                  Start by creating a new payroll process for your hotels
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Payroll;