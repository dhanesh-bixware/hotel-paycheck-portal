import { useAuth } from '@/contexts/AuthContext';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Building2, Users, Plus, Edit, Search } from 'lucide-react';

const Master = () => {
  const { user } = useAuth();

  const facilities = [
    { id: '6262', code: 'HUF', name: '24TH STREET ENTERPRISES LLC', status: 'Active', createdDate: '09-27-2024 01:37:00', modifiedBy: '--', modifiedDate: '--' },
    { id: '9839', code: 'NAK', name: 'CRETE LODGING LLC', status: 'Active', createdDate: '09-27-2024 01:37:04', modifiedBy: '--', modifiedDate: '--' },
    { id: '6265', code: 'HUI', name: 'DMK INVESTMENTS LLC', status: 'Active', createdDate: '09-27-2024 01:37:00', modifiedBy: '--', modifiedDate: '--' },
    { id: '7089', code: 'JAA', name: 'FARNAM LODGING LLC', status: 'Active', createdDate: '09-27-2024 01:37:02', modifiedBy: '--', modifiedDate: '--' },
  ];

  const users = [
    { name: 'Entity User', email: 'entityuser@bixware.com', companyName: 'CRETE LODGING LLC', createdAt: '07-15-2025' },
    { name: 'GM-LNK2', email: 'gmlnk2@bixware.com', companyName: 'LNK2 LODGING LLC', createdAt: '07-15-2025' },
    { name: 'GM-NAK', email: 'gmnak@bixware.com', companyName: 'CRETE LODGING LLC', createdAt: '07-15-2025' },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Master</h1>
            <p className="text-muted-foreground">
              Manage facilities and users across the TrackInn network
            </p>
          </div>
          <Badge variant="outline" className="text-sm">
            {user?.role?.toUpperCase()}
          </Badge>
        </div>

        {/* Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full border-4 border-muted"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent rotate-[86.4deg]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">24%</span>
                  </div>
                </div>
                <h3 className="font-semibold text-muted-foreground">Facility Master</h3>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full border-4 border-muted"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent rotate-[201.6deg]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">56%</span>
                  </div>
                </div>
                <h3 className="font-semibold text-muted-foreground">Facility User</h3>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center justify-center p-6">
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full border-4 border-primary"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">100%</span>
                  </div>
                </div>
                <h3 className="font-semibold text-muted-foreground">API Configuration</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="facility" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="facility">Facility Master</TabsTrigger>
            <TabsTrigger value="user">User Master</TabsTrigger>
          </TabsList>

          <TabsContent value="facility" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5" />
                  <span>Facility Master</span>
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">Search:</span>
                    <Input placeholder="Search facilities..." className="w-64" />
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Plus className="h-4 w-4 mr-2" />
                    ADD COMPANY
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Company ID</th>
                        <th className="text-left p-3 font-medium">Company Code</th>
                        <th className="text-left p-3 font-medium">Company Name</th>
                        <th className="text-left p-3 font-medium">Status</th>
                        <th className="text-left p-3 font-medium">Created Date</th>
                        <th className="text-left p-3 font-medium">Modified By</th>
                        <th className="text-left p-3 font-medium">Modified Date</th>
                        <th className="text-left p-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {facilities.map((facility) => (
                        <tr key={facility.id} className="border-b hover:bg-muted/50">
                          <td className="p-3">{facility.id}</td>
                          <td className="p-3">{facility.code}</td>
                          <td className="p-3">{facility.name}</td>
                          <td className="p-3">
                            <Badge variant="default">{facility.status}</Badge>
                          </td>
                          <td className="p-3 text-sm text-muted-foreground">{facility.createdDate}</td>
                          <td className="p-3 text-sm text-muted-foreground">{facility.modifiedBy}</td>
                          <td className="p-3 text-sm text-muted-foreground">{facility.modifiedDate}</td>
                          <td className="p-3">
                            <Button variant="outline" size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-white border-yellow-500">
                              EDIT
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="user" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>User Master</span>
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">Search:</span>
                    <Input placeholder="Search users..." className="w-64" />
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Plus className="h-4 w-4 mr-2" />
                    ADD USER
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="All Companies" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Companies</SelectItem>
                      <SelectItem value="crete">CRETE LODGING LLC</SelectItem>
                      <SelectItem value="lnk2">LNK2 LODGING LLC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Name</th>
                        <th className="text-left p-3 font-medium">Email</th>
                        <th className="text-left p-3 font-medium">Company Name</th>
                        <th className="text-left p-3 font-medium">Created At</th>
                        <th className="text-left p-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="p-3">{user.name}</td>
                          <td className="p-3 text-muted-foreground">{user.email}</td>
                          <td className="p-3">{user.companyName}</td>
                          <td className="p-3 text-muted-foreground">{user.createdAt}</td>
                          <td className="p-3">
                            <Button variant="outline" size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-white border-yellow-500">
                              Edit
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Showing 1 to 3 of 3 entries (filtered from 8 total entries)
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Master;