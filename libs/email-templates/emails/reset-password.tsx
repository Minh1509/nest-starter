import { Button, Heading, Hr, Link, Section, Text } from '@react-email/components';
import { BaseLayout } from '../_layouts/base';

export interface ResetPasswordEmailProps {
  title: string;
  fullName?: string;
  resetPasswordUrl: string;
}

export function ResetPasswordEmail({
  title,
  fullName,
  resetPasswordUrl,
}: ResetPasswordEmailProps) {
  return (
    <BaseLayout preview={title}>
      <Heading style={styles.heading}>{title}</Heading>
      <Text>
        Hello <strong>{fullName || ''}</strong>,
      </Text>
      <Text>
        We received a request to reset the password for your account. Please click the
        button below to proceed:
      </Text>
      <Section style={styles.buttonSection}>
        <Button href={resetPasswordUrl} style={styles.button}>
          Reset Password
        </Button>
      </Section>
      <Text>
        If the button above does not work, copy and paste this link into your browser:
      </Text>
      <Link href={resetPasswordUrl} style={styles.link}>
        {resetPasswordUrl}
      </Link>
      <Hr style={styles.hr} />
      <Text style={styles.note}>
        If you did not request a password reset, please ignore this email. Your account
        remains safe.
      </Text>
    </BaseLayout>
  );
}

const styles = {
  heading: { color: '#333333', fontSize: '24px' },
  buttonSection: { textAlign: 'center' as const, padding: '24px 0' },
  button: {
    backgroundColor: '#4caf50',
    borderRadius: '4px',
    color: '#ffffff',
    display: 'inline-block',
    padding: '15px 32px',
    textDecoration: 'none',
  },
  link: { color: '#4caf50', wordBreak: 'break-all' as const },
  hr: { borderColor: '#eeeeee', margin: '24px 0' },
  note: { color: '#777777', fontSize: '12px' },
};
