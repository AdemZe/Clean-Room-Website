import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <div>
    <section className="section">
      <div className="container  ">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7 pb-0">
            <form
              className="contact-form"
              method="POST"
              action={contact_form_action}
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="Your message"
                />
              </div>
              <div className="flex justify-center items-center">
              <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300   justify-center items-center">
                Send Now
              </button>
              </div>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white ">
    <div class="container px-6 py-8 mx-auto">
        <div>
            <p class="font-medium text-blue-500 "> Contactez-nous </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-1 lg:grid-cols-3">
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-5 h-5">
                            <path strokeLinejoin="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 class="mt-3 text-base font-medium text-gray-800 ">Adresse Email                    </h2>
                    <p class="mt-1 text-base text-blue-500 ">zaouech.rami@gmail.com</p>
                </div>

                <div>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-5 h-5">
                            <path strokeLinejoin="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinejoin="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-2 text-base font-medium text-gray-800 ">Notre localisation                    </h2>
                    <p class="mt-1 text-base text-blue-500 ">Beni Khalled Nabeul (8021)
                    </p>
                </div>

                <div>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-5 h-5">
                            <path strokeLinejoin="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-2 text-base font-medium text-gray-800 ">Infoline</h2>
                    <p class="mt-1 text-base text-blue-500 ">+216 58 863 703</p>
                </div>
            </div>

            <div class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                <iframe width="100%" height="100%" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </div>
    </div>
</section>
</div>
  );
};

export default Contact;
