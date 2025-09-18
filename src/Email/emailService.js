import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendUserMessage = async (formData) => {
  try {
    // Send message to site owner only
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      formData,
      PUBLIC_KEY
    );
    console.log("Email sent to owner", result.text);

    // Only send auto-reply in specific cases if needed
    // const autoReplyResult = await emailjs.send(
    //   SERVICE_ID,
    //   AUTO_REPLY_TEMPLATE_ID,
    //   formData,
    //   PUBLIC_KEY
    // );
    
    return result;
  } catch (error) {
    console.error("Email send failed", error);
    throw error;
  }
};