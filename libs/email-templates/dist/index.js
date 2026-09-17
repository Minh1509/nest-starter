'use strict';

var components = require('@react-email/components');
var jsxRuntime = require('react/jsx-runtime');

// index.tsx
function BaseLayout({ preview, children }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(components.Html, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(components.Head, {}),
    /* @__PURE__ */ jsxRuntime.jsx(components.Preview, { children: preview }),
    /* @__PURE__ */ jsxRuntime.jsx(components.Body, { style: styles.body, children: /* @__PURE__ */ jsxRuntime.jsx(components.Container, { style: styles.container, children }) })
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
  return /* @__PURE__ */ jsxRuntime.jsxs(BaseLayout, { preview: title, children: [
    /* @__PURE__ */ jsxRuntime.jsx(components.Heading, { style: styles2.heading, children: title }),
    /* @__PURE__ */ jsxRuntime.jsxs(components.Text, { children: [
      "Hello ",
      /* @__PURE__ */ jsxRuntime.jsx("strong", { children: fullName || "" }),
      ","
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(components.Text, { children: "We received a request to reset the password for your account. Please click the button below to proceed:" }),
    /* @__PURE__ */ jsxRuntime.jsx(components.Section, { style: styles2.buttonSection, children: /* @__PURE__ */ jsxRuntime.jsx(components.Button, { href: resetPasswordUrl, style: styles2.button, children: "Reset Password" }) }),
    /* @__PURE__ */ jsxRuntime.jsx(components.Text, { children: "If the button above does not work, copy and paste this link into your browser:" }),
    /* @__PURE__ */ jsxRuntime.jsx(components.Link, { href: resetPasswordUrl, style: styles2.link, children: resetPasswordUrl }),
    /* @__PURE__ */ jsxRuntime.jsx(components.Hr, { style: styles2.hr }),
    /* @__PURE__ */ jsxRuntime.jsx(components.Text, { style: styles2.note, children: "If you did not request a password reset, please ignore this email. Your account remains safe." })
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
  return components.render(/* @__PURE__ */ jsxRuntime.jsx(Component, { ...props }));
}

exports.ResetPasswordEmail = ResetPasswordEmail;
exports.renderEmail = renderEmail;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map