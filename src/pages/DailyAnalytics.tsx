import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarDays, Users, Clock, DollarSign, Filter } from 'lucide-react';

const DailyAnalytics = () => {
  const [selectedDate, setSelectedDate] = useState('2024-01-15');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const dailyData = [
    {
      department: 'Front Desk',
      employees: [
        { name: 'John Smith', hoursWorked: 8, hourlyRate: 250, overtime: 0, totalPay: 2000 },
        { name: 'Sarah Johnson', hoursWorked: 8, hourlyRate: 280, overtime: 2, totalPay: 2800 },
      ]
    },
    {
      department: 'Housekeeping',
      employees: [
        { name: 'Maria Garcia', hoursWorked: 7.5, hourlyRate: 200, overtime: 0, totalPay: 1500 },
        { name: 'David Lee', hoursWorked: 8, hourlyRate: 220, overtime: 1, totalPay: 2020 },
        { name: 'Lisa Brown', hoursWorked: 6, hourlyRate: 200, overtime: 0, totalPay: 1200 },
      ]
    },
    {
      department: 'Food & Beverage',
      employees: [
        { name: 'Chef Antonio', hoursWorked: 9, hourlyRate: 400, overtime: 1, totalPay: 4000 },
        { name: 'Server Mike', hoursWorked: 8, hourlyRate: 180, overtime: 0, totalPay: 1440 },
      ]
    },
  ];

  const allEmployees = dailyData.flatMap(dept => 
    dept.employees.map(emp => ({ ...emp, department: dept.department }))
  );

  const totalHours = allEmployees.reduce((sum, emp) => sum + emp.hoursWorked, 0);
  const totalPay = allEmployees.reduce((sum, emp) => sum + emp.totalPay, 0);
  const totalEmployees = allEmployees.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Daily Analytics</h1>
          <p className="text-muted-foreground">Day-wise breakdown of departments and employee performance</p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedDate} onValueChange={setSelectedDate}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024-01-15">Jan 15, 2024</SelectItem>
              <SelectItem value="2024-01-14">Jan 14, 2024</SelectItem>
              <SelectItem value="2024-01-13">Jan 13, 2024</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Daily Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalEmployees}</div>
            <p className="text-xs text-muted-foreground">Active today</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalHours}</div>
            <p className="text-xs text-muted-foreground">Hours worked</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Payroll</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalPay.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Daily wages</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Hours/Employee</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(totalHours / totalEmployees).toFixed(1)}</div>
            <p className="text-xs text-muted-foreground">Per employee</p>
          </CardContent>
        </Card>
      </div>

      {/* Department-wise Breakdown */}
      {dailyData.map((department, deptIndex) => (
        <Card key={deptIndex}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{department.department}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {department.employees.length} employees • 
                  {department.employees.reduce((sum, emp) => sum + emp.hoursWorked, 0)} total hours
                </p>
              </div>
              <Badge variant="outline">
                ₹{department.employees.reduce((sum, emp) => sum + emp.totalPay, 0).toLocaleString()}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee Name</TableHead>
                  <TableHead className="text-right">Hours Worked</TableHead>
                  <TableHead className="text-right">Hourly Rate</TableHead>
                  <TableHead className="text-right">Overtime Hours</TableHead>
                  <TableHead className="text-right">Total Pay</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {department.employees.map((employee, empIndex) => (
                  <TableRow key={empIndex}>
                    <TableCell className="font-medium">{employee.name}</TableCell>
                    <TableCell className="text-right">{employee.hoursWorked}</TableCell>
                    <TableCell className="text-right">₹{employee.hourlyRate}</TableCell>
                    <TableCell className="text-right">{employee.overtime}</TableCell>
                    <TableCell className="text-right font-bold">₹{employee.totalPay.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <Badge 
                        variant={employee.overtime > 0 ? "destructive" : "secondary"}
                        className={employee.overtime > 0 ? "" : "text-green-600"}
                      >
                        {employee.overtime > 0 ? 'Overtime' : 'Regular'}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DailyAnalytics;