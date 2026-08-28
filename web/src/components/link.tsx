import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { Link, type LinkProps } from "react-router";

type LinkButtonProps = LinkProps & VariantProps<typeof buttonVariants>;

export function LinkButton({
  variant,
  className,
  size,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(buttonVariants({ className, size, variant }))}
      {...props}
    />
  );
}
