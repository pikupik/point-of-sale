import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosClient from "@/utils/axiosClient";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginForm = () => {
  const [mounted, setMounted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // Updated to `errorMessage` for typo fix

  // Set HTML hydration in Next.js
  useEffect(() => {
    setMounted(true);
  }, []);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  // Mutation for login using Tanstack Query
  const loginMutation = useMutation({
    mutationFn: async (formData) => {
      try {
        const { data } = await axiosClient.post("/users/login", formData, {
          withCredentials: true,
        });
        return data;
      } catch (error) {
        throw error; // Rethrow to be handled by onError
      }
    },
    onSuccess: (data) => {
      console.log("Login successful", data);
      router.push("/");
    },
    onError: (error) => {
      // Handle Axios error gracefully
      if (axiosClient.isAxiosError(error)) {
        const errorMsg =
          error.response?.data?.error ||
          "Invalid credentials, please try again.";
        setErrorMessage(errorMsg);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    },
  });

  // Handle onSubmit here
  const onSubmit = (data) => {
    setErrorMessage(null); // Reset error message before a new attempt
    loginMutation.mutate(data);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Welcome Message */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Hello, Welcome!</h1>
        <p className="text-lg text-gray-600 mt-2">Please login to continue</p>
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="block text-gray-700 font-medium mb-2">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-6">
                  <FormLabel className="block text-gray-700 font-medium mb-2">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              disabled={loginMutation.isLoading}
            >
              {loginMutation.isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
