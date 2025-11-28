import Link from 'next/link';

export default function Button({
  children,
  className = '',
  variant = 'primary', // primary, secondary, ghost
  size = 'md',         // sm, md, lg
  href,
  ...props
}) {
  // Base styles for all buttons
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none';

  // Style variants
  const variantStyles = {
    primary: 'bg-gradient-to-r from-brand-pink to-brand-rose text-white hover:opacity-90 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:scale-105',
    secondary: 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-brand-pink/50 backdrop-blur-sm',
    ghost: 'bg-transparent text-brand-muted hover:text-brand-pink',
  };

  // Size variants
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}