# Code Style Guidelines for Borderless Brand Website

## Project Overview

The Borderless Brand website is a modern, responsive, and SEO-optimized platform showcasing advertising services, portfolio, and expertise. Built with Next.js 13+ and modern web technologies, it emphasizes performance, accessibility, and maintainability.

### Technical Stack

- Framework: Next.js 13+ with App Router
- Language: TypeScript
- Styling: Tailwind CSS
- UI Components: shadcn/ui
- Authentication: NextAuth.js
- State Management: Zustand
- Data Fetching: SWR
- Database ORM: Prisma

## Style Guide Sections

### 1. File Organization

#### Directory Structure

```
/app                 # Next.js 13+ App Router pages
/components          # Reusable UI components
  /ui               # Base UI components
  /layout           # Layout components
  /features         # Feature-specific components
/lib                # Utility functions and configurations
/hooks              # Custom React hooks
/types              # TypeScript type definitions
/prisma             # Database schema and migrations
/public             # Static assets
/styles             # Global styles and Tailwind configurations
/tests              # Test files
```

#### File Naming Conventions

- React Components: PascalCase (e.g., `Button.tsx`, `NavigationMenu.tsx`)
- Utilities/Hooks: camelCase (e.g., `useAuth.ts`, `formatDate.ts`)
- Page Components: `page.tsx` (Next.js App Router convention)
- Layout Components: `layout.tsx`
- Test Files: `ComponentName.test.tsx` or `ComponentName.spec.tsx`

#### Import/Export Patterns

```typescript
// Prefer named exports for utilities
export function formatDate() { ... }

// Use default exports for components
export default function Button() { ... }

// Group related exports in index files
export * from './Button';
export * from './Input';
```

### 2. Code Formatting

#### General Rules

- Indentation: 2 spaces
- Max line length: 80 characters
- Use semicolons
- Use single quotes for strings
- Use trailing commas in multiline objects/arrays

#### Prettier Configuration

```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 80,
  "semi": true
}
```

### 3. Naming Conventions

#### Variables and Functions

```typescript
// Variables: camelCase
const userData = { ... };

// Boolean variables: is/has prefix
const isLoading = true;
const hasError = false;

// Functions: camelCase, verb prefix
function getUserData() { ... }
const updateProfile = () => { ... };

// React Components: PascalCase
function UserProfile() { ... }
```

#### Types and Interfaces

```typescript
// Interfaces: prefix with 'I'
interface IUser {
  id: string;
  name: string;
}

// Types: PascalCase
type ButtonVariant = "primary" | "secondary";

// Enums: PascalCase
enum Role {
  Admin = "ADMIN",
  User = "USER",
}
```

### 4. TypeScript Guidelines

#### Type Annotations

```typescript
// Prefer explicit return types for functions
function getData(): Promise<IUser[]> { ... }

// Use type inference for simple variables
const name = 'John'; // type: string

// Always type props in React components
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
}
```

#### Null/Undefined Handling

```typescript
// Use optional chaining
const userName = user?.profile?.name;

// Nullish coalescing for defaults
const display = name ?? "Unknown";

// Type guards for null checks
function isUser(value: any): value is IUser {
  return value && "id" in value;
}
```

### 5. Component Guidelines

#### Component Structure

```typescript
// Component with Props interface
interface CardProps {
  title: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  // State declarations
  const [isOpen, setIsOpen] = useState(false);

  // Event handlers
  const handleClick = () => setIsOpen(!isOpen);

  // Side effects
  useEffect(() => {
    // Effect logic
  }, []);

  // Render
  return (
    <div className="rounded-lg p-4">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```

#### Custom Hooks Pattern

```typescript
function useUser(userId: string) {
  const { data, error } = useSWR<IUser>(`/api/users/${userId}`);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
```

### 6. Documentation Standards

#### JSDoc Comments

```typescript
/**
 * Formats a date into a localized string
 * @param date - The date to format
 * @param locale - The locale to use for formatting
 * @returns Formatted date string
 */
function formatDate(date: Date, locale = "en-US"): string {
  return date.toLocaleDateString(locale);
}
```

#### Component Documentation

```typescript
/**
 * Button component with various styles and states
 * @example
 * <Button variant="primary" onClick={() => console.log('clicked')}>
 *   Click me
 * </Button>
 */
export function Button({ variant, children }: ButtonProps) { ... }
```

### 7. Testing Standards

#### Test Structure

```typescript
describe("Button", () => {
  // Arrange
  const defaultProps = {
    variant: "primary" as const,
    onClick: vi.fn(),
  };

  it("renders correctly", () => {
    // Act
    render(<Button {...defaultProps}>Click me</Button>);

    // Assert
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
```

### 8. Performance Guidelines

#### Code Splitting

```typescript
// Use dynamic imports for large components
const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <Spinner />,
});

// Optimize images
<Image src="/hero.jpg" alt="Hero" width={1200} height={600} priority />;
```

### 9. Security Guidelines

#### Authentication

```typescript
// Use middleware for protected routes
export const config = {
  matcher: "/protected/:path*",
};

// Validate user session
const session = await getServerSession(authOptions);
if (!session) redirect("/login");
```

### 10. Development Workflow

#### Git Commit Convention

```
type(scope): subject

Body

Footer
```

Types: feat, fix, docs, style, refactor, test, chore

#### Branch Naming

- Feature: `feature/feature-name`
- Bug Fix: `fix/bug-description`
- Release: `release/version`

## Enforcement and Tools

### ESLint Configuration

```json
{
  "extends": ["next/core-web-vitals", "prettier"],
  "rules": {
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "warn"
  }
}
```

### VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Best Practices

### Code Quality

- Write pure functions when possible
- Keep components focused and small
- Use meaningful variable names
- Implement proper error boundaries
- Follow the Single Responsibility Principle

### Performance

- Implement proper caching strategies
- Use React.memo for expensive components
- Optimize images and assets
- Implement proper loading states
- Use proper key props in lists

### Maintainability

- Keep dependencies updated
- Document complex logic
- Use consistent patterns
- Follow SOLID principles
- Regular code reviews

### Collaboration

- Regular team code reviews
- Knowledge sharing sessions
- Maintain up-to-date documentation
- Clear communication in PRs
- Regular dependency updates
