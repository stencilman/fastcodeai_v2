"use server"
import { sendMail } from "@/app/lib/mail";
const submitMail = async ({ formData }) => {
    await sendMail({ to: "arjun@fastcode.ai", body: `<h1>${formData}</h1>` })

};

export default submitMail