import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Download, 
  Calendar, 
  TrendingUp, 
  Users, 
  DollarSign,
  BarChart3,
  PieChart
} from 'lucide-react';

const Reports = () => {
  const reportCategories = [
    {
      title: 'Payroll Reports',
      icon: DollarSign,
      reports: [
        { name: 'Monthly Payroll Summary', description: 'Complete payroll breakdown by department', lastRun: '2024-01-05' },
        { name: 'Overtime Analysis', description: 'Overtime hours and costs analysis', lastRun: '2024-01-03' },
        { name: 'Tax Summary Report', description: 'Tax deductions and compliance report', lastRun: '2024-01-01' },
        { name: 'Year-end Summary', description: 'Annual payroll and tax summary', lastRun: '2023-12-31' }
      ]
    },
    {
      title: 'Employee Reports',
      icon: Users,
      reports: [
        { name: 'Employee Directory', description: 'Complete employee information list', lastRun: '2024-01-04' },
        { name: 'Attendance Report', description: 'Employee attendance tracking', lastRun: '2024-01-05' },
        { name: 'Performance Review', description: 'Employee performance metrics', lastRun: '2023-12-28' },
        { name: 'Department Analysis', description: 'Employee distribution by department', lastRun: '2024-01-02' }
      ]
    },
    {
      title: 'Analytics Reports',
      icon: TrendingUp,
      reports: [
        { name: 'Cost Analysis', description: 'Labor cost trends and projections', lastRun: '2024-01-03' },
        { name: 'Productivity Metrics', description: 'Employee productivity indicators', lastRun: '2024-01-01' },
        { name: 'Hotel Performance', description: 'Multi-property performance comparison', lastRun: '2023-12-30' },
        { name: 'Budget vs Actual', description: 'Budget variance analysis', lastRun: '2023-12-31' }
      ]
    }
  ];

  const quickStats = [
    { title: 'Reports Generated', value: '156', period: 'This Month', change: '+23%' },
    { title: 'Data Points', value: '45.2K', period: 'Total Records', change: '+12%' },
    { title: 'Export Downloads', value: '89', period: 'This Month', change: '+34%' },
    { title: 'Scheduled Reports', value: '12', period: 'Active', change: '0%' }
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Reports & Analytics</h1>
            <p className="text-muted-foreground">
              Generate comprehensive reports and analyze hotel performance data.
            </p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Report
            </Button>
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Create Custom Report
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          {quickStats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.period} • <span className="text-green-600">{stat.change}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="all-reports" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all-reports">All Reports</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="custom">Custom Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="all-reports" className="space-y-6">
            {reportCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <category.icon className="h-5 w-5" />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {category.reports.map((report, reportIndex) => (
                      <div key={reportIndex} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex-1">
                          <h4 className="font-medium">{report.name}</h4>
                          <p className="text-sm text-muted-foreground">{report.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Last run: {new Date(report.lastRun).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <BarChart3 className="h-4 w-4" />
                          </Button>
                          <Button size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="scheduled" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Reports</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Automatically generated reports sent to your email
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Monthly Payroll Summary</h4>
                      <p className="text-sm text-muted-foreground">Every 1st of the month at 9:00 AM</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-green-600 font-medium">Active</span>
                      <Button size="sm" variant="outline">Edit</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Weekly Attendance Report</h4>
                      <p className="text-sm text-muted-foreground">Every Monday at 8:00 AM</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-green-600 font-medium">Active</span>
                      <Button size="sm" variant="outline">Edit</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Favorite Reports</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Quick access to your most frequently used reports
                </p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <PieChart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-medium mb-2">No Favorite Reports</h3>
                  <p className="text-sm text-muted-foreground">
                    Star reports to add them to your favorites for quick access
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Custom Reports</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Build and manage your custom report templates
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Department Cost Analysis</h4>
                      <p className="text-sm text-muted-foreground">Custom analysis of departmental costs and efficiency</p>
                      <p className="text-xs text-muted-foreground mt-1">Created: 2023-12-15</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm">Run</Button>
                    </div>
                  </div>
                  <div className="text-center py-8 border-2 border-dashed rounded-lg">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-medium mb-2">Create New Custom Report</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Build custom reports with your specific data requirements
                    </p>
                    <Button>
                      <FileText className="mr-2 h-4 w-4" />
                      New Custom Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Reports;