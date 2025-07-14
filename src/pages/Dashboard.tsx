import { useAuth } from '@/contexts/AuthContext';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, DollarSign, Clock, TrendingUp, Building2, UserCheck } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { title: 'Total Employees', value: '284', icon: Users, change: '+12%', changeType: 'positive' },
    { title: 'Monthly Payroll', value: '$245,000', icon: DollarSign, change: '+8%', changeType: 'positive' },
    { title: 'Attendance Rate', value: '94.2%', icon: UserCheck, change: '+2.1%', changeType: 'positive' },
    { title: 'Avg. Hours/Week', value: '42.5', icon: Clock, change: '-1.2%', changeType: 'negative' },
  ];

  const recentActivity = [
    { action: 'Payroll processed', employee: 'All employees', time: '2 hours ago', type: 'payroll' },
    { action: 'New employee added', employee: 'John Smith - Housekeeping', time: '4 hours ago', type: 'employee' },
    { action: 'Overtime approved', employee: 'Sarah Johnson - Front Desk', time: '6 hours ago', type: 'overtime' },
    { action: 'Schedule updated', employee: 'Restaurant Team', time: '8 hours ago', type: 'schedule' },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {user?.name}! Here's what's happening at {user?.hotelName || 'your hotel'}.
            </p>
          </div>
          <Badge variant="outline" className="text-sm">
            {user?.role?.toUpperCase()}
          </Badge>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`h-2 w-2 rounded-full ${
                      activity.type === 'payroll' ? 'bg-green-500' :
                      activity.type === 'employee' ? 'bg-blue-500' :
                      activity.type === 'overtime' ? 'bg-orange-500' :
                      'bg-purple-500'
                    }`} />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.employee}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                <button className="flex items-center space-x-3 p-3 text-left hover:bg-muted rounded-lg transition-colors">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Process Payroll</p>
                    <p className="text-sm text-muted-foreground">Run payroll for current period</p>
                  </div>
                </button>
                <button className="flex items-center space-x-3 p-3 text-left hover:bg-muted rounded-lg transition-colors">
                  <Users className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Add Employee</p>
                    <p className="text-sm text-muted-foreground">Register new team member</p>
                  </div>
                </button>
                <button className="flex items-center space-x-3 p-3 text-left hover:bg-muted rounded-lg transition-colors">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">View Reports</p>
                    <p className="text-sm text-muted-foreground">Generate analytics report</p>
                  </div>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hotel Performance (for super admins) */}
        {user?.role === 'superadmin' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Building2 className="h-5 w-5" />
                <span>Hotel Performance Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Anant Grand Hotel</p>
                  <p className="text-2xl font-bold">284 employees</p>
                  <p className="text-xs text-green-600">+5.2% efficiency</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Anant Resort & Spa</p>
                  <p className="text-2xl font-bold">156 employees</p>
                  <p className="text-xs text-green-600">+3.1% efficiency</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Anant Business Hotel</p>
                  <p className="text-2xl font-bold">92 employees</p>
                  <p className="text-xs text-red-600">-1.4% efficiency</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  );
};

export default Dashboard;