import styles from './typography.module.scss';

interface TypographyProps {
    // Most elements on Figma don't follow the design system measurements,
    // so I created the chance to choose none as a default variant.
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'sub1' | 'sub2' | 'body1' | 'body1bold' | 'body2' | 'body2bold' | 'none';
    children: React.ReactNode;
    fontSize?: string;
    fontWeight?: string;
    className?: string;
}

export default function Typography({ variant = 'none', children, fontSize="", fontWeight="", className = '' }: TypographyProps) {
    return (
        <p
            className={`${styles[variant]} ${className}`}
            style={{ fontSize, fontWeight }}
        >
            {children}
        </p>
    );
}
