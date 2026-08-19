import Header from "@/components/Header";

const youtubeEmbedUrl = "https://www.youtube.com/embed/3NoylaMeiwo";
const whatsappUrl = "https://api.whatsapp.com/message/26NVBGZOJQUGP1?autoload=1&app_absent=0";

export default function ThankYou() {
  return <main>
    <Header />
    <section className="px-5 pb-20 pt-12 text-center sm:pb-28 sm:pt-20"><div className="mx-auto max-w-3xl">
      <p className="eyebrow">YOU’RE ALL SET</p>
      <h1 className="mt-5 text-4xl font-bold tracking-[-0.055em] sm:text-6xl">Your Free <span>AI Marketing Consultation</span> Is Booked!</h1>
      <p className="hero-copy mx-auto mt-6 max-w-xl text-lg leading-8">Thank you for taking the first step toward improving your marketing. Before our call, please watch the short video below.</p>
      <div className="video-frame mt-12"><iframe src={youtubeEmbedUrl} title="Watch this before your consultation" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
      <p className="hero-copy mx-auto mt-5 max-w-xl">Please watch the full video before your consultation. It will help you get more value from our one-to-one conversation.</p>
    </div></section>
    <section className="thankyou-next px-5 py-20"><div className="mx-auto max-w-3xl">
      <p className="eyebrow">WHAT HAPPENS NEXT</p><h2>Come prepared, leave with clarity.</h2>
      <ol className="next-steps"><li><b>Watch the Video</b><span>Take a few minutes to watch the video above.</span></li><li><b>Prepare for Your Consultation</b><span>Think about your biggest marketing challenge and what you want to achieve.</span></li><li><b>Join Your One-to-One Call</b><span>We’ll discuss your business and identify practical opportunities to improve your marketing and use AI more effectively.</span></li></ol>
      <div className="whatsapp-card"><div><p className="eyebrow">HAVE A QUESTION?</p><h3>Connect with me on WhatsApp</h3><p>Send a message if you have a question about your consultation or want to share something about your business before we speak.</p></div><a className="whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer">💬 WhatsApp Me <span aria-hidden="true">↗</span></a></div>
      <p className="mt-12 text-xl font-semibold">I’ll See You on the Call!</p>
    </div></section>
  </main>;
}
