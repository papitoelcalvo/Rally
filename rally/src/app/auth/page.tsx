"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function AuthPage() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    console.log(values);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-medium text-gray-700">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" {...field} className="border-gray-300 rounded-lg" />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-medium text-gray-700">Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" className="border-gray-300 rounded-lg" />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign In
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
