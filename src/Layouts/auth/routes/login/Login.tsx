import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { loginSchema } from '@/utils/schemas';
import { loginSchemaType } from '@/utils/types';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<loginSchemaType>({
    resolver: joiResolver(loginSchema),

    defaultValues: {
      email: '',
      password: '',
    },
  });
 
  async function submitHandler(data: loginSchemaType) {
    console.log(data);
    alert("valid data");
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Card className="sm:w-[360px] mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register('email')}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <div
                
                  className="inline-block ml-auto text-xs underline"
                >
                  Forgot your password?
                </div>
              </div>
              <Input id="password" type="password" {...register('password')} />
              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full disabled:cursor-not-allowed disabled:opacity-45"
            >
         Login
            </Button>
          </div>
          <div className="mt-4 text-xs text-center">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default Login;
