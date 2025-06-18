import { clsx } from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";

export enum ButtonSizes {
  Small = "Small",
  Large = "Large",
}

export enum ButtonVariants {
  Primary = "Primary",
  Secondary = "Secondary",
  Destructive = "Destructive",
}

export enum ButtonColors {
  Neutral = "Neutral",
  Primary = "Primary",
  Warn = "Warn",
}

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: ButtonSizes;
  variant?: ButtonVariants;
  color?: ButtonColors;
};

export const getButtonClasses = (
  size: ButtonSizes,
  variant: ButtonVariants,
  color: ButtonColors,
) =>
  clsx({
    "box-border font-normal leading-36px text-14px inline-flex items-center rounded-md focus:outline-hidden transition-colors transition-shadow duration-300":
      true,
    "shadow-sm hover:shadow-xl active:shadow-xl disabled:border-none disabled:bg-gray-300 disabled:text-gray-600 disabled:shadow-none disabled:cursor-not-allowed dark:disabled:bg-gray-800 dark:disabled:text-gray-900":
      variant === ButtonVariants.Primary,
    "bg-primary-light-500 dark:bg-primary-dark-500 hover:bg-primary-light-400 dark:hover:bg-primary-dark-400 text-primary-light-contrast-500 dark:text-primary-dark-contrast-500":
      variant === ButtonVariants.Primary && color !== ButtonColors.Warn,
    "bg-warn-light-500 dark:bg-warn-dark-500 hover:bg-warn-light-400 dark:hover:bg-warn-dark-400 text-white dark:text-white":
      variant === ButtonVariants.Primary && color === ButtonColors.Warn,
    "border border-button-light-border dark:border-button-dark-border text-gray-950 hover:bg-gray-500 hover:bg-opacity-20 dark:hover:bg-white dark:hover:bg-opacity-10 focus:bg-gray-500 focus:bg-opacity-20 dark:focus:bg-white dark:focus:bg-opacity-10 dark:text-white disabled:text-gray-600 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent disabled:cursor-not-allowed dark:disabled:text-gray-900":
      variant === ButtonVariants.Secondary,
    "border border-button-light-border dark:border-button-dark-border text-warn-light-500 dark:text-warn-dark-500 hover:bg-warn-light-500 hover:bg-opacity-10 dark:hover:bg-warn-light-500 dark:hover:bg-opacity-10 focus:bg-warn-light-500 focus:bg-opacity-20 dark:focus:bg-warn-light-500 dark:focus:bg-opacity-20":
      color === ButtonColors.Warn && variant !== ButtonVariants.Primary,
    "px-16 py-2": size === ButtonSizes.Large,
    "px-4 h-[36px]": size === ButtonSizes.Small,
  });

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = ButtonVariants.Primary,
      size = ButtonSizes.Small,
      color = ButtonColors.Primary,
      ...props
    },
    ref,
  ) => (
    <button
      type="button"
      ref={ref}
      className={`${getButtonClasses(size, variant, color)} ${className}`}
      {...props}
    >
      {children}
    </button>
  ),
);
