
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { mockStudents } from "@/lib/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Debug the available credentials when component mounts
  useEffect(() => {
    console.log("Available credentials:", mockStudents.map(s => ({ username: s.username, password: s.password })));
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log("Login attempt with:", { username, password });
    console.log("Available users:", mockStudents);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      const student = mockStudents.find(
        (s) => s.username === username && s.password === password
      );
      
      console.log("Found student:", student);
      
      if (student) {
        // Save student data to sessionStorage
        sessionStorage.setItem("currentStudent", JSON.stringify(student));
        toast.success("Login successful");
        navigate("/dashboard");
      } else {
        toast.error("Invalid username or password");
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full max-w-md animate-scale-in">
        <Card className="border-none shadow-lg glass-panel">
          <CardHeader className="space-y-1 pb-6">
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary">
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2z"></path>
                  <path d="M9 7h6"></path>
                  <path d="M9 11h6"></path>
                  <path d="M9 15h4"></path>
                </svg>
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-center">Exam Portal</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your exam results
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="john.doe"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                <p>Demo credentials:</p>
                <p>Username: john.doe</p>
                <p>Password: password123</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                type="submit" 
                className="w-full h-11 text-sm font-medium"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
