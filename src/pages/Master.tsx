import { useAuth } from '@/contexts/AuthContext';
import { AppLayout } from '@/components/layout/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Plus, Edit, Trash2 } from 'lucide-react';

const Master = () => {
  const { user } = useAuth();

  const hotels = [
    { id: '1', name: 'TrackInn Grand Hotel', location: 'Mumbai', employees: 284, status: 'active' },
    { id: '2', name: 'TrackInn Resort & Spa', location: 'Goa', employees: 156, status: 'active' },
    { id: '3', name: 'TrackInn Business Hotel', location: 'Delhi', employees: 92, status: 'active' },
  ];

  const users = [
    { id: '1', name: 'Sarah Manager', email: 'manager@trackinn.com', role: 'entityadmin', hotel: 'TrackInn Grand Hotel', status: 'active' },
    { id: '2', name: 'Lisa User', email: 'user@trackinn.com', role: 'entityuser', hotel: 'TrackInn Grand Hotel', status: 'active' },
    { id: '3', name: 'Mike Johnson', email: 'mike@trackinn.com', role: 'entityadmin', hotel: 'TrackInn Resort & Spa', status: 'active' },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Master Management</h1>
            <p className="text-muted-foreground">
              Manage hotels and users across the TrackInn network
            </p>
          </div>
          <Badge variant="outline" className="text-sm">
            {user?.role?.toUpperCase()}
          </Badge>
        </div>

        {/* Hotels Management */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Building2 className="h-5 w-5" />
              <span>Hotels Management</span>
            </CardTitle>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Hotel
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {hotels.map((hotel) => (
                <div key={hotel.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Building2 className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">{hotel.name}</h3>
                      <p className="text-sm text-muted-foreground">{hotel.location}</p>
                      <p className="text-xs text-muted-foreground">{hotel.employees} employees</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={hotel.status === 'active' ? 'default' : 'secondary'}>
                      {hotel.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Users Management */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Users Management</span>
            </CardTitle>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold">{user.name}</h3>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <p className="text-xs text-muted-foreground">{user.hotel}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="capitalize">
                      {user.role}
                    </Badge>
                    <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                      {user.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Master;