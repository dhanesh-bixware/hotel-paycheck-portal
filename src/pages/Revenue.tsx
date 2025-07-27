import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, TrendingUp, DollarSign, Utensils, Building2 } from 'lucide-react';

const Revenue = () => {
  const revenueData = [
    { hotel: 'TrackInn Grand Hotel', rooms: 45650, fnb: 23400, other: 5600, total: 74650 },
    { hotel: 'TrackInn Business', rooms: 32100, fnb: 18900, other: 3200, total: 54200 },
    { hotel: 'TrackInn Resort', rooms: 56800, fnb: 31200, other: 7800, total: 95800 },
  ];

  const totalRevenue = revenueData.reduce((sum, hotel) => sum + hotel.total, 0);
  const totalRooms = revenueData.reduce((sum, hotel) => sum + hotel.rooms, 0);
  const totalFnB = revenueData.reduce((sum, hotel) => sum + hotel.fnb, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Revenue Dashboard</h1>
          <p className="text-muted-foreground">Track hotel performance and revenue streams</p>
        </div>
        <Button>
          <CalendarDays className="mr-2 h-4 w-4" />
          Filter Period
        </Button>
      </div>

      {/* Revenue Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Room Revenue</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalRooms.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8.2%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">F&B Revenue</CardTitle>
            <Utensils className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalFnB.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+15.7%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Revenue/Hotel</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{Math.round(totalRevenue / revenueData.length).toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+10.3%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Revenue Table */}
      <Card>
        <CardHeader>
          <CardTitle>Hotel-wise Revenue Breakdown</CardTitle>
          <p className="text-sm text-muted-foreground">Detailed revenue analysis by property</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hotel Property</TableHead>
                <TableHead className="text-right">Room Revenue</TableHead>
                <TableHead className="text-right">F&B Revenue</TableHead>
                <TableHead className="text-right">Other Revenue</TableHead>
                <TableHead className="text-right">Total Revenue</TableHead>
                <TableHead className="text-right">Performance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {revenueData.map((hotel, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{hotel.hotel}</TableCell>
                  <TableCell className="text-right">₹{hotel.rooms.toLocaleString()}</TableCell>
                  <TableCell className="text-right">₹{hotel.fnb.toLocaleString()}</TableCell>
                  <TableCell className="text-right">₹{hotel.other.toLocaleString()}</TableCell>
                  <TableCell className="text-right font-bold">₹{hotel.total.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="secondary" className="text-green-600">
                      +{(Math.random() * 20 + 5).toFixed(1)}%
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Revenue;