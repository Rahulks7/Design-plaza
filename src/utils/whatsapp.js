import emailjs from "@emailjs/browser";

export const sendToWhatsApp = async ({
  name,
  email,
  phone,
  message,
  type = "Enquiry",
}) => {
  const whatsappNumber = "919911631110";

  // WHATSAPP MESSAGE
  const finalText =
    message && message.startsWith("🏠")
      ? message
      : `✨ *${type}*

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}

📝 Message:
${message}`;

  try {
    // SEND EMAIL
    const response = await emailjs.send(
      "service_oudetjx", // SERVICE ID
      "template_47u0lae", // TEMPLATE ID
      {
        name,
        email,
        phone,
        message,
        type,
      },
      "VyNXskRLQxrE2AMMp" // PUBLIC KEY
    );

    console.log("EMAIL SUCCESS ✅", response);

    // OPEN WHATSAPP AFTER SUCCESS
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      finalText
    )}`;

    window.open(url, "_blank");
  } catch (error) {
    console.log("FULL EMAIL ERROR ❌", error);

    alert(
      error?.text ||
        error?.message ||
        JSON.stringify(error) ||
        "Failed to send message ❌"
    );
  }
};