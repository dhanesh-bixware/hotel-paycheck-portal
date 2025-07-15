import { useAuth } from '@/contexts/AuthContext';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { FileText, Eye, Edit } from 'lucide-react';

const Reports = () => {
  const { user } = useAuth();

  const reports = [
    {
      sNo: 13,
      createdDate: '11-25-2024',
      companyName: '6256',
      startDate: '10-04-2024',
      endDate: '10-17-2024',
      hotelRevenue: 12000.0,
      fbRevenue: 6870.0,
      roomsRented: 34.0
    },
    {
      sNo: 12,
      createdDate: '11-21-2024',
      companyName: '6256',
      startDate: '10-18-2024',
      endDate: '10-31-2024',
      hotelRevenue: 6000.0,
      fbRevenue: 7000.0,
      roomsRented: 70.0
    },
    {
      sNo: 11,
      createdDate: '11-21-2024',
      companyName: '6256',
      startDate: '11-01-2024',
      endDate: '11-01-2024',
      hotelRevenue: 45322.0,
      fbRevenue: 3546.0,
      roomsRented: 3456.0
    },
    {
      sNo: 10,
      createdDate: '11-21-2024',
      companyName: '6256',
      startDate: '11-01-2024',
      endDate: '11-10-2024',
      hotelRevenue: 4464.0,
      fbRevenue: 452.0,
      roomsRented: 25345.0
    }
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Reports</h1>
            <p className="text-muted-foreground">
              Generate and manage salary reports
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
              ADD NEW SALARY
            </Button>
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
              NEW REPORT
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Salary Reports</span>
              </CardTitle>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Search:</span>
                <Input placeholder="Search reports..." className="w-64" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">S.No</th>
                    <th className="text-left p-3 font-medium">Created Date</th>
                    <th className="text-left p-3 font-medium">Company Name</th>
                    <th className="text-left p-3 font-medium">Start Date</th>
                    <th className="text-left p-3 font-medium">End Date</th>
                    <th className="text-left p-3 font-medium">Salary</th>
                    <th className="text-left p-3 font-medium">Hotel Revenue</th>
                    <th className="text-left p-3 font-medium">F&B Revenue</th>
                    <th className="text-left p-3 font-medium">Rooms Rented</th>
                    <th className="text-left p-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report.sNo} className="border-b hover:bg-muted/50">
                      <td className="p-3">{report.sNo}</td>
                      <td className="p-3">{report.createdDate}</td>
                      <td className="p-3">{report.companyName}</td>
                      <td className="p-3">{report.startDate}</td>
                      <td className="p-3">{report.endDate}</td>
                      <td className="p-3">
                        <Button 
                          size="sm" 
                          className="bg-teal-600 hover:bg-teal-700 text-white h-6 px-3 text-xs"
                        >
                          VIEW
                        </Button>
                      </td>
                      <td className="p-3">{report.hotelRevenue.toFixed(1)}</td>
                      <td className="p-3">{report.fbRevenue.toFixed(1)}</td>
                      <td className="p-3">{report.roomsRented.toFixed(1)}</td>
                      <td className="p-3">
                        <div className="flex items-center space-x-2">
                          <Button 
                            size="sm" 
                            className="bg-green-600 hover:bg-green-700 text-white h-8 px-3 text-xs"
                          >
                            VIEW
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-yellow-600 hover:bg-yellow-700 text-white h-8 px-3 text-xs"
                          >
                            EDIT
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{reports.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Hotel Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${reports.reduce((sum, report) => sum + report.hotelRevenue, 0).toLocaleString()}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total F&B Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${reports.reduce((sum, report) => sum + report.fbRevenue, 0).toLocaleString()}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Rooms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {reports.reduce((sum, report) => sum + report.roomsRented, 0).toLocaleString()}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Reports;