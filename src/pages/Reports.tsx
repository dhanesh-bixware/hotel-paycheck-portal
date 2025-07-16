import { useAuth } from '@/contexts/AuthContext';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { FileText, Eye, Edit, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const Reports = () => {
  const { user } = useAuth();
  const [selectedReport, setSelectedReport] = useState(null);
  const [editingReport, setEditingReport] = useState(null);
  const [showExcelView, setShowExcelView] = useState(false);
  const [showSalaryDetails, setShowSalaryDetails] = useState(false);

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
                          onClick={() => setShowSalaryDetails(true)}
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
                            onClick={() => setShowExcelView(true)}
                          >
                            VIEW
                          </Button>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                size="sm" 
                                className="bg-yellow-600 hover:bg-yellow-700 text-white h-8 px-3 text-xs"
                                onClick={() => setEditingReport(report)}
                              >
                                EDIT
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md">
                              <DialogHeader>
                                <DialogTitle className="flex items-center justify-between">
                                  Edit Report
                                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                    ×
                                  </Button>
                                </DialogTitle>
                              </DialogHeader>
                              {editingReport && (
                                <div className="space-y-4">
                                  <div>
                                    <Label htmlFor="startDate">Start Date</Label>
                                    <Input 
                                      id="startDate" 
                                      defaultValue={editingReport.startDate}
                                      className="mt-1"
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor="endDate">End Date</Label>
                                    <Input 
                                      id="endDate" 
                                      defaultValue={editingReport.endDate}
                                      className="mt-1 bg-gray-100"
                                      readOnly
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor="hotelRevenue">Hotel Revenue</Label>
                                    <Input 
                                      id="hotelRevenue" 
                                      type="number"
                                      defaultValue={editingReport.hotelRevenue}
                                      className="mt-1"
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor="fbRevenue">F&B Revenue</Label>
                                    <Input 
                                      id="fbRevenue" 
                                      type="number"
                                      defaultValue={editingReport.fbRevenue}
                                      className="mt-1"
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor="roomsRented">Rooms Rented</Label>
                                    <Input 
                                      id="roomsRented" 
                                      type="number"
                                      defaultValue={editingReport.roomsRented}
                                      className="mt-1"
                                    />
                                  </div>
                                  <div className="flex justify-end space-x-2 pt-4">
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                      UPDATE
                                    </Button>
                                    <Button variant="outline">
                                      Close
                                    </Button>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
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

        {/* Excel Report View Modal */}
        <Dialog open={showExcelView} onOpenChange={setShowExcelView}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" onClick={() => setShowExcelView(false)}>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                Excel Report
              </DialogTitle>
            </DialogHeader>
            <div className="p-4">
              <div className="grid grid-cols-8 gap-2 mb-6 text-sm font-medium">
                <div className="col-span-2 text-center p-2 border">HOTEL</div>
                <div className="text-center p-2 border">LNK2 LODGING LLC</div>
                <div className="text-center p-2 border">PAY PERIOD</div>
                <div className="col-span-4 text-center p-2 border">10-04-2024 TO 10-17-2024</div>
              </div>
              
              <div className="grid grid-cols-14 gap-0 text-xs mb-4">
                <div className="col-span-2 bg-blue-900 text-white p-2 border text-center font-bold">DAY 1</div>
                <div className="bg-blue-900 text-white p-2 border text-center font-bold">DAY 2</div>
                <div className="bg-blue-900 text-white p-2 border text-center font-bold">DAY 3</div>
                <div className="bg-blue-900 text-white p-2 border text-center font-bold">DAY 4</div>
                <div className="bg-blue-900 text-white p-2 border text-center font-bold">DAY 5</div>
                <div className="bg-blue-900 text-white p-2 border text-center font-bold">DAY 6</div>
                <div className="bg-blue-900 text-white p-2 border text-center font-bold">DAY 7</div>
                <div className="bg-blue-900 text-white p-2 border text-center font-bold">DAY 8</div>
                <div className="bg-blue-900 text-white p-2 border text-center font-bold">DAY 9</div>
                <div className="bg-blue-900 text-white p-2 border text-center font-bold">DAY 10</div>
                <div className="bg-blue-900 text-white p-2 border text-center font-bold">DAY 11</div>
                <div className="bg-blue-900 text-white p-2 border text-center font-bold">DAY 12</div>
                <div className="bg-blue-900 text-white p-2 border text-center font-bold">DAY 13</div>
                <div className="bg-blue-900 text-white p-2 border text-center font-bold">DAY 14</div>
              </div>

              <div className="space-y-0">
                <div className="grid grid-cols-8 gap-0">
                  <div className="col-span-2 bg-green-400 p-2 border font-medium">HOTEL REVENUE</div>
                  <div className="bg-green-100 p-2 border text-center">12,000.00</div>
                  <div className="bg-green-100 p-2 border"></div>
                  <div className="bg-green-100 p-2 border"></div>
                  <div className="bg-green-400 p-2 border text-center font-medium">OVERALL PAYROLL</div>
                  <div className="bg-green-400 p-2 border text-center">0.00%</div>
                  <div className="bg-green-400 p-2 border text-center">$ 0.01</div>
                </div>
                
                <div className="grid grid-cols-8 gap-0">
                  <div className="col-span-2 bg-green-400 p-2 border font-medium">F&B REVENUE</div>
                  <div className="bg-green-100 p-2 border text-center">6,870.00</div>
                  <div className="bg-green-100 p-2 border"></div>
                  <div className="bg-green-100 p-2 border"></div>
                  <div className="bg-green-400 p-2 border text-center font-medium">HOTEL</div>
                  <div className="bg-green-400 p-2 border text-center">0.00%</div>
                  <div className="bg-green-400 p-2 border text-center">$ 0.00</div>
                </div>

                <div className="grid grid-cols-8 gap-0">
                  <div className="col-span-2 bg-red-500 text-white p-2 border font-medium">TOTAL REVENUE</div>
                  <div className="bg-red-500 text-white p-2 border text-center">18,870.00</div>
                  <div className="bg-green-400 p-2 border text-center font-medium">FRONT DESK HOURS</div>
                  <div className="bg-green-100 p-2 border text-center">24.06</div>
                  <div className="bg-green-400 p-2 border text-center font-medium">F & B</div>
                  <div className="bg-green-400 p-2 border text-center">0.00%</div>
                  <div className="bg-green-400 p-2 border text-center">$ 0.00</div>
                </div>

                <div className="grid grid-cols-8 gap-0">
                  <div className="col-span-2 bg-green-400 p-2 border font-medium">ROOMS RENTED</div>
                  <div className="bg-green-100 p-2 border text-center">34</div>
                  <div className="bg-green-400 p-2 border text-center font-medium">ROOMS CLEANED</div>
                  <div className="bg-green-100 p-2 border text-center">0.00</div>
                  <div className="bg-green-100 p-2 border"></div>
                  <div className="bg-green-100 p-2 border"></div>
                  <div className="bg-green-100 p-2 border"></div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Salary Details Modal */}
        <Dialog open={showSalaryDetails} onOpenChange={setShowSalaryDetails}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                Salary Details
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setShowSalaryDetails(false)}>
                  ×
                </Button>
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 font-medium border-b pb-2">
                <div>Department Name</div>
                <div>Salary Amount</div>
              </div>
              
              {[
                { dept: 'GM', amount: '12.00' },
                { dept: 'SALES MANAGER', amount: '12.00' },
                { dept: 'AGM/GEC', amount: '12.00' },
                { dept: 'HEAD HOUSEKEEPER', amount: '12.00' },
                { dept: 'HEAD ENGINEER', amount: '121.00' },
                { dept: 'F&B DIRECTOR', amount: '12.00' }
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 py-2 hover:bg-gray-50">
                  <div className="text-gray-700">{item.dept}</div>
                  <div className="text-gray-700">{item.amount}</div>
                </div>
              ))}
              
              <div className="pt-4 border-t">
                <div className="text-center text-sm text-gray-600 mb-2">
                  Date Range: 08/16/2024 - 08/29/2024
                </div>
                <div className="text-center text-xs text-gray-500 mb-4">
                  Last Updated: 11/18/2024, 18:54
                </div>
                <div className="flex justify-end space-x-2">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    EDIT
                  </Button>
                  <Button variant="outline" onClick={() => setShowSalaryDetails(false)}>
                    CLOSE
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AppLayout>
  );
};

export default Reports;