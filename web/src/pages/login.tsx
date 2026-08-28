import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import z from "zod/v4";

const schema = z.object({
  email: z.email().nonempty(),
  password: z.string().nonempty().min(8).max(50),
});

export function LoginPage() {
  // const { message } = App.useApp();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit = (values: any) => {
    console.log(values);
    toast.add({
      title: "Login SUccessful",
      type: "success",
    });
    // message.success("Login successful");
    setTimeout(() => navigate("/dashboard"), 1000);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-muted">
      <Card className="w-full max-w-100">
        <CardHeader className="">
          <CardTitle className="text-lg!">Paneli Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(submit)}>
            <FieldGroup>
              <Controller
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <Field aria-invalid={fieldState.invalid}>
                    <FieldLabel>Email Address</FieldLabel>
                    <Input
                      aria-invalid={fieldState.invalid}
                      type="email"
                      placeholder="Enter email address"
                      {...field}
                      className="h-11 leading-11 text-base!"
                    />
                    {fieldState.invalid && (
                      <FieldError>{fieldState.error?.message}</FieldError>
                    )}
                  </Field>
                )}
              />
              <Controller
                control={form.control}
                name="password"
                render={({ field, fieldState }) => (
                  <Field aria-invalid={fieldState.invalid}>
                    <FieldLabel>Password</FieldLabel>
                    <Input
                      aria-invalid={fieldState.invalid}
                      type="password"
                      placeholder="Enter password"
                      {...field}
                      className="h-11 leading-11 text-base!"
                    />
                    {fieldState.invalid && (
                      <FieldError>{fieldState.error?.message}</FieldError>
                    )}
                  </Field>
                )}
              />
              <Button type="submit" className="h-11">
                Sign In
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
