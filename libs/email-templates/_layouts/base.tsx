import { Body, Container, Head, Html, Preview } from '@react-email/components';
import type { ReactNode } from 'react';

export interface BaseLayoutProps {
  preview: string;
  children: ReactNode;
}

export function BaseLayout({ preview, children }: BaseLayoutProps) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>{children}</Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: '#f4f6f8',
    fontFamily: 'Arial, sans-serif',
    padding: '24px 0',
  },
  container: {
    backgroundColor: '#ffffff',
    border: '1px solid #e1e5e9',
    borderRadius: '8px',
    margin: '0 auto',
    maxWidth: '600px',
    padding: '32px',
  },
};
