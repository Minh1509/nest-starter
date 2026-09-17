import { Heading, Text, Section, Button, Link, Hr, render, Html, Head, Preview, Body, Container } from '@react-email/components';
import { jsxs, jsx } from 'react/jsx-runtime';

// index.tsx
function BaseLayout({ preview, children }) {
  return /* @__PURE__ */ jsxs(Html, { children: [
    /* @__PURE__ */ jsx(Head, {}),
    /* @__PURE__ */ jsx(Preview, { children: preview }),
    /* @__PURE__ */ jsx(Body, { style: styles.body, children: /* @__PURE__ */ jsx(Container, { style: styles.container, children }) })
  ] });
}
var styles = {
  body: {
    backgroundColor: "#f4f6f8",
    fontFamily: "Arial, sans-serif",
    padding: "24px 0"
  },
  container: {
    backgroundColor: "#ffffff",
    border: "1px solid #e1e5e9",
    borderRadius: "8px",
    margin: "0 auto",
    maxWidth: "600px",
    padding: "32px"
  }
};
function ResetPasswordEmail({
  title,
  fullName,
  resetPasswordUrl
}) {
  return /* @__PURE__ */ jsxs(BaseLayout, { preview: title, children: [
    /* @__PURE__ */ jsx(Heading, { style: styles2.heading, children: title }),
    /* @__PURE__ */ jsxs(Text, { children: [
      "Hello ",
      /* @__PURE__ */ jsx("strong", { children: fullName || "" }),
      ","
    ] }),
    /* @__PURE__ */ jsx(Text, { children: "We received a request to reset the password for your account. Please click the button below to proceed:" }),
    /* @__PURE__ */ jsx(Section, { style: styles2.buttonSection, children: /* @__PURE__ */ jsx(Button, { href: resetPasswordUrl, style: styles2.button, children: "Reset Password" }) }),
    /* @__PURE__ */ jsx(Text, { children: "If the button above does not work, copy and paste this link into your browser:" }),
    /* @__PURE__ */ jsx(Link, { href: resetPasswordUrl, style: styles2.link, children: resetPasswordUrl }),
    /* @__PURE__ */ jsx(Hr, { style: styles2.hr }),
    /* @__PURE__ */ jsx(Text, { style: styles2.note, children: "If you did not request a password reset, please ignore this email. Your account remains safe." })
  ] });
}
var styles2 = {
  heading: { color: "#333333", fontSize: "24px" },
  buttonSection: { textAlign: "center", padding: "24px 0" },
  button: {
    backgroundColor: "#4caf50",
    borderRadius: "4px",
    color: "#ffffff",
    display: "inline-block",
    padding: "15px 32px",
    textDecoration: "none"
  },
  link: { color: "#4caf50", wordBreak: "break-all" },
  hr: { borderColor: "#eeeeee", margin: "24px 0" },
  note: { color: "#777777", fontSize: "12px" }
};
async function renderEmail(Component, props) {
  return render(/* @__PURE__ */ jsx(Component, { ...props }));
}

export { ResetPasswordEmail, renderEmail };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map