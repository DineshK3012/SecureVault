"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { FaKey, FaGoogle } from "react-icons/fa";
import SignInWithGoogle from "./SignInWithGoogle.jsx";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth"; // Import the custom hook

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useAuth();

    const onSubmitCallback = async (formData) => {
        await login(formData);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div id="heading" className="text-center font-semibold text-4xl mb-5">
                Login
            </div>
            <div id="form-container" className="flex flex-col items-center w-3/4 justify-center">
                <form className="flex max-w-md flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmitCallback)}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Email"/>
                        </div>
                        <TextInput
                            id="email1"
                            {...register("email", {
                                required: "This is a required field",
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Invalid email address',
                                },
                            })}
                            color={errors.email ? "failure" : undefined}
                            helperText={errors.email ? <> {errors.email.message}</> : undefined}
                            type="email"
                            placeholder="abc@example.com"
                            rightIcon={HiMail}
                            shadow
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Password"/>
                        </div>
                        <TextInput
                            className="rounded-md"
                            id="password1"
                            {...register("password", {
                                required: "This is a required field",
                                minLength: {
                                    value: 8,
                                    message: "Password is at least 8 characters"
                                }
                            })}
                            color={errors.password ? "failure" : undefined}
                            helperText={errors.password ? <> {errors.password.message}</> : undefined}
                            type="password"
                            rightIcon={FaKey}
                            placeholder="password123"
                            shadow
                        />
                        <div id="forgot-password" className="text-right w-full max-w-md text-gray-500 text-sm mt-1">
                            <a className="cursor-pointer">Forgot Password?</a>
                        </div>
                    </div>
                    <Button type="submit"><span className="text-lg">Sign In</span></Button>
                </form>
            </div>
            <div id="divider" className={"max-w-md w-full text-center mt-4"}>
            OR
            </div>
            <SignInWithGoogle />
            <div id="register" className="text-center w-full max-w-md text-gray-500 text-sm mt-2">
                Are you new? <Link to="/register" className="text-blue-600 underline cursor-pointer">Create an account</Link>
            </div>
        </div>
    );
}
