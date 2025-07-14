import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Building2, Users, DollarSign, TrendingUp } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate('/dashboard');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(email, password);
      if (success) {
        toast.success('Login successful!');
        navigate('/dashboard');
      } else {
        toast.error('Invalid credentials. Try demo@anant.com / demo123');
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding and Features */}
        <div className="space-y-8">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <img 
                src="/lovable-uploads/0b528c1c-6bbb-4787-9625-ce6c09b0d181.png" 
                alt="Anant Hotels" 
                className="h-12 mr-3"
              />
              <h1 className="text-3xl font-bold text-primary">Hotel Management</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive salary and payroll management for hotel chains
            </p>
          </div>

          <div className="grid gap-4">
            <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Multi-Hotel Management</h3>
                <p className="text-sm text-muted-foreground">Manage multiple properties from one dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Employee Management</h3>
                <p className="text-sm text-muted-foreground">Complete employee profiles and attendance tracking</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
              <DollarSign className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Payroll Processing</h3>
                <p className="text-sm text-muted-foreground">Automated salary calculations and payroll management</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
              <TrendingUp className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Analytics & Reports</h3>
                <p className="text-sm text-muted-foreground">Performance insights and detailed reporting</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login Form */}
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Sign In</CardTitle>
            <p className="text-muted-foreground">Access your hotel management dashboard</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@anant.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
            
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm font-medium mb-2">Demo Accounts:</p>
              <div className="text-xs space-y-1">
                <p><strong>Super Admin:</strong> admin@anant.com</p>
                <p><strong>Client Admin:</strong> manager@anant.com</p>
                <p><strong>Entity Admin:</strong> hr@anant.com</p>
                <p><strong>Entity User:</strong> user@anant.com</p>
                <p className="mt-2"><strong>Password:</strong> demo123</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;