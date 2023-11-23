import toast from "react-hot-toast";

export function SendSuccessNotification(message) {
  toast.success(message, {
    style: {
      border: "2px solid var(--text-primary)",
      color: "var(--text-primary)",
      backgroundColor: "var(--background-primary)",
      fontSize: "18px",
      borderRadius: "5px",
      boxShadow: "0px 0px 5px 0px var(--text-primary)",
    },
    duration: 4000,
    iconTheme: {
      primary: "yellowgreen",
      secondary: "var(--text-primary)",
    },
  });
}

export function SendErrorNotification(message) {
  toast.error(message, {
    style: {
      border: "2px solid var(--text-primary)",
      color: "var(--text-primary)",
      backgroundColor: "var(--background-primary)",
      fontSize: "18px",
      borderRadius: "5px",
      boxShadow: "0px 0px 5px 0px var(--text-primary)",
    },
    duration: 4000,
    iconTheme: {
      primary: "red",
      secondary: "var(--text-primary)",
    },
  });
}
