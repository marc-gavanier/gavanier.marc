import type { MDXComponents } from 'mdx/types';

const components = {
  h1: ({ children }) => (
    <h1 className='text-5xl font-bold bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] bg-clip-text text-transparent my-16'>
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className='text-4xl font-bold bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] bg-clip-text text-transparent mt-18 mb-6'>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className='text-3xl font-medium bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] bg-clip-text text-transparent mt-2 mb-4'>
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className='text-xl font-medium  bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] bg-clip-text text-transparent mt-2 mb-4'>
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className='text-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] bg-clip-text text-transparent mt-2 mb-4'>
      {children}
    </h5>
  ),
  h6: ({ children }) => <h6 className='text-base  bg-gradient-to-br bg-clip-text text-transparent mt-2 mb-4'>{children}</h6>,
  blockquote: ({ children }) => (
    <blockquote className='border-l-2 not-italic border-primary font-normal pl-4 text-muted'>{children}</blockquote>
  ),
  li: ({ children }) => <li className='m-0!'>{children}</li>
} satisfies MDXComponents;
export const useMDXComponents = (): MDXComponents => components;
