import { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DollarSign, 
  Calendar, 
  Clock, 
  Users, 
  Download, 
  Play,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Payroll = () => {
  const [currentPeriod] = useState('2024-01');

  const payrollSummary = {
    totalEmployees: 284,
    totalGrossPay: 245000,
    totalDeductions: 49000,
    totalNetPay: 196000,
    averageSalary: 4500,
    overtimeHours: 156,
    overtimePay: 12400
  };

  const payrollItems = [
    {
      id: '1',
      employee: 'Sarah Johnson',
      department: 'Front Desk',
      baseSalary: 4500,
      overtimeHours: 8,
      overtimePay: 300,
      grossPay: 4800,
      deductions: 960,
      netPay: 3840,
      status: 'Processed',
      period: '2024-01'
    },
    {
      id: '2',
      employee: 'Mike Chen',
      department: 'Housekeeping',
      baseSalary: 3800,
      overtimeHours: 12,
      overtimePay: 380,
      grossPay: 4180,
      deductions: 836,
      netPay: 3344,
      status: 'Processed',
      period: '2024-01'
    },
    {
      id: '3',
      employee: 'Emily Rodriguez',
      department: 'Restaurant',
      baseSalary: 5200,
      overtimeHours: 6,
      overtimePay: 390,
      grossPay: 5590,
      deductions: 1118,
      netPay: 4472,
      status: 'Pending',
      period: '2024-01'
    },
    {
      id: '4',
      employee: 'David Kim',
      department: 'Maintenance',
      baseSalary: 3500,
      overtimeHours: 0,
      overtimePay: 0,
      grossPay: 3500,
      deductions: 700,
      netPay: 2800,
      status: 'On Hold',
      period: '2024-01'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Processed':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Processed</Badge>;
      case 'Pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>;
      case 'On Hold':
        return <Badge variant="outline" className="border-red-200 text-red-800">On Hold</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Payroll Management</h1>
            <p className="text-muted-foreground">
              Process salaries and manage payroll for all employees.
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
            <Button>
              <Play className="mr-2 h-4 w-4" />
              Process Payroll
            </Button>
          </div>
        </div>

        {/* Payroll Summary */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{payrollSummary.totalEmployees}</div>
              <p className="text-xs text-muted-foreground">Active employees</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gross Payroll</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${payrollSummary.totalGrossPay.toLocaleString()}</div>
              <p className="text-xs text-green-600">+8% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Payroll</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${payrollSummary.totalNetPay.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">After deductions</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overtime Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{payrollSummary.overtimeHours}</div>
              <p className="text-xs text-orange-600">${payrollSummary.overtimePay.toLocaleString()} overtime pay</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="current" className="space-y-4">
          <TabsList>
            <TabsTrigger value="current">Current Period</TabsTrigger>
            <TabsTrigger value="history">Payroll History</TabsTrigger>
            <TabsTrigger value="settings">Payroll Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Payroll Period: January 2024</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Pay period from Jan 1, 2024 to Jan 31, 2024
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-green-600">Ready to Process</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Base Salary</TableHead>
                      <TableHead>OT Hours</TableHead>
                      <TableHead>OT Pay</TableHead>
                      <TableHead>Gross Pay</TableHead>
                      <TableHead>Deductions</TableHead>
                      <TableHead>Net Pay</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payrollItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.employee}</TableCell>
                        <TableCell>{item.department}</TableCell>
                        <TableCell>${item.baseSalary.toLocaleString()}</TableCell>
                        <TableCell>{item.overtimeHours}h</TableCell>
                        <TableCell>${item.overtimePay}</TableCell>
                        <TableCell className="font-medium">${item.grossPay.toLocaleString()}</TableCell>
                        <TableCell>${item.deductions}</TableCell>
                        <TableCell className="font-bold">${item.netPay.toLocaleString()}</TableCell>
                        <TableCell>{getStatusBadge(item.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payroll History</CardTitle>
                <p className="text-sm text-muted-foreground">
                  View previous payroll periods and processed payments
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">December 2023</h4>
                      <p className="text-sm text-muted-foreground">Processed on Jan 5, 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">$242,000</p>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">November 2023</h4>
                      <p className="text-sm text-muted-foreground">Processed on Dec 5, 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">$238,500</p>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payroll Configuration</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Configure payroll settings and calculation parameters
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-medium">Pay Period</h4>
                      <p className="text-sm text-muted-foreground">Monthly (Last day of month)</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Overtime Rate</h4>
                      <p className="text-sm text-muted-foreground">1.5x base hourly rate</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Tax Rate</h4>
                      <p className="text-sm text-muted-foreground">20% standard deduction</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Processing Day</h4>
                      <p className="text-sm text-muted-foreground">5th of each month</p>
                    </div>
                  </div>
                  <Button variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Modify Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Payroll;