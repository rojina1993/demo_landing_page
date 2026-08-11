"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
type Values = Record<string, string>;
const fields = [{name:"name",label:"Full Name",placeholder:"Enter your full name",type:"text",required:true},{name:"email",label:"Active Email",placeholder:"Enter your active email",type:"email",required:true},{name:"whatsapp",label:"WhatsApp Number",placeholder:"Enter your WhatsApp number",type:"tel",required:true},{name:"business",label:"Business Name",placeholder:"Enter your business name",type:"text",required:true},{name:"url",label:"Website or Facebook URL",placeholder:"Enter your website or Facebook URL",type:"url",required:false}];
export default function CTAForm() {
  const router=useRouter(); const [values,setValues]=useState<Values>({}); const [errors,setErrors]=useState<Values>({}); const [submitting,setSubmitting]=useState(false); const [submitError,setSubmitError]=useState("");
  async function submit(e:FormEvent) {
    e.preventDefault(); const next:Values={}; fields.filter(f=>f.required).forEach(f=>{if(!values[f.name]?.trim()) next[f.name]="This field is required."}); if(values.email && !/^\S+@\S+\.\S+$/.test(values.email)) next.email="Please enter a valid email address."; if(Object.keys(next).length){setErrors(next);return;}
    setSubmitting(true); setSubmitError("");
    try {
      const response = await fetch("https://formsubmit.co/ajax/rojinaghale33@gmail.com", { method:"POST", headers:{ "Content-Type":"application/json", Accept:"application/json" }, body:JSON.stringify({ "Full Name":values.name, "Active Email":values.email, "WhatsApp Number":values.whatsapp, "Business Name":values.business, "Website or Facebook URL":values.url || "Not provided", "Anything You Want to Say":values.message || "Not provided", _subject:"New AI Marketing Consultation Request", _template:"table", _captcha:"false" }) });
      if(!response.ok) throw new Error("Submission failed");
      router.push("/thank-you");
    } catch { setSubmitError("We couldn’t send your request right now. Please try again."); setSubmitting(false); }
  }
  const update=(name:string,value:string)=>{setValues({...values,[name]:value});setErrors({...errors,[name]:""});};
  return <section id="book-call" className="px-5 py-20 sm:py-28"><div className="form-wrap"><div className="form-intro"><p className="eyebrow">BOOK THE CALL</p><h2>Let’s make your next move clearer.</h2><p>Get personalized marketing guidance based on your specific business. Discover what to improve, what to prioritize, and where AI can help you move forward.</p></div><form noValidate onSubmit={submit} className="form-card">{fields.map(f=><label key={f.name}>{f.label}{f.required&&<em> *</em>}<input name={f.name} type={f.type} value={values[f.name]||""} onChange={e=>update(f.name,e.target.value)} placeholder={f.placeholder} aria-invalid={!!errors[f.name]}/>{errors[f.name]&&<small>{errors[f.name]}</small>}</label>)}<label>Anything You Want to Say<textarea name="message" value={values.message||""} onChange={e=>update("message",e.target.value)} placeholder="Tell us about your business or marketing challenge" rows={4}/></label>{submitError&&<p className="submit-error" role="alert">{submitError}</p>}<button className="primary-button w-full" type="submit" disabled={submitting}>{submitting ? "Sending your request…" : <>Get My Free AI Marketing Plan <span aria-hidden="true">→</span></>}</button><p className="privacy">We respect your privacy. No spam.</p></form></div></section>;
}
