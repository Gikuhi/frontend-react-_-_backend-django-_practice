import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import background from "./images/2272990e286120f038b235cf5920e64c.jpg"
export default function Home() {
  return (
      <>
          <title>Home</title>
    <section style={{backgroundImage:`url(${background})`,
                   backgroundRepeat: "repeat-y",
                    backgroundSize: "contain",
                    backgroundPositionX: "100%",
                    


      }} className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">



      <div className="home absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-10 " />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div id="intro" className="mx-auto max-w-2xl lg:max-w-4xl">
        {/*<img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />*/}
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              Fullstack Developer based in Nairobi (+254).
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="src/components/images/IMG_-qj4lym.jpg"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Richard Gikuhi</div>
              {/*<svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">*/}
              {/*  <circle cx={1} cy={1} r={1} />*/}
              {/*</svg>*/}
              <div className="text-gray-900">Co-CEO of Arttherapy</div>
            </div>
          </figcaption>
        </figure>
      </div>



      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                With Arttherapy, your work is going to be flowing in a flexible and reliable way. From the user side to
                the server side as there is no down time. 100% guaranteed.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            // src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Our company offers state of the art services powered by the latest technology in the market.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Push to deploy.</strong> We push our work to the
                      cloud and secure domains for our client's website.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Security</strong> Websites are hacker free as we
                      enforce firewalls to stop malicious activities.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Database backups.</strong> No need to worry about
                      your personal data being lost. We backup them us the minute they are received in the server end.
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
              <p className="mt-6">
                We create custom servers for our clients to ensure a smoothly running website. Not only that,
                  but also continue updating the server with data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/*About me Section*/}

         <div id="about" className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div id="about" className="nine columns main-col ">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <h2 >About Me</h2>
                <br></br>

               <p className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              I am 21 years old currently in school doing my third year of university at Kenyatta University(KU).
                   My main attributes are Web Development and Graphic Designing. Specialized in HTML, CSS, Bootstrap,
                   Javascript, React and Jungle in my journey of Web Development, while also being familiar while
                   using Adobe Photoshop, Adobe Premiere Pro & Adobe After Effects to make creative visuals.
               </p>


                <br></br>
                <br></br>
                <br></br>

{/*                <div className="carousel rounded-box w-96 bg-gray-900">*/}
{/*  <div className="carousel-item w-1/2">*/}
{/*    <img src="src/components/images/html-5.png "/>*/}
{/*  </div>*/}
{/*  <div className="carousel-item w-1/2">*/}
{/*    <img src="src/components/images/full-stack.png" />*/}
{/*  </div>*/}
{/*  <div className="carousel-item w-1/2">*/}
{/*    <img src="src/components/images/js.png" />*/}
{/*  </div>*/}
{/*  <div className="carousel-item w-1/2">*/}
{/*    <img src="src/components/images/react.png" />*/}
{/*  </div>*/}
{/*</div>*/}
            </blockquote>
                <br></br>
                <br></br>
                <br></br>


               <div className="row">

                   <div>
                    <div className="container my-24 mx-auto md:px-6">
  <section className="mb-32">
    <div className="flex justify-center">
      <div className="text-center md:max-w-xl lg:max-w-3xl">
        <h2 className=" text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">Contact us</h2>
      </div>
    </div>


      <br></br>
      <br></br>
      <br></br>

    <div className="">
      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">

      </div>
      <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold text-black">
                  Technical support
                </p>
                <p className="text-black">
                  richardgikm@gmail.com
                </p>
                <p className=" text-black">
                  +254 717 577 640
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold text-black">
                  Sales questions
                </p>
                <p className=" text-black">
                  richardgikm@gmail.com
                </p>
                <p className=" text-black">
                  +254 717 577 640
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="align-start flex">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold text-black">Press</p>
                <p className=" text-black">
                  richardgikm@gmail.com
                </p>
                <p className=" text-black">
                  +254 717 577 640
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="align-start flex">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold text-black">Bug report</p>
                <p className=" text-black">
                  richardgikm@gmail.com
                </p>
                <p className=" text-black">
                  +254 717 577 640
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


                   </div>
               </div>
            </div>
         </div>



    {/*Portfolio*/}

        <div>
        <h2 className=" text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">Some art</h2>
    </div>
              <br></br>
              <div>
                  <p className="text-gray-900">Art gallery 1</p>
                  <img className="object-scale-down" src="/src/components/images/JEff 2.png"/>
              </div>
              <br></br>
              <br></br>
              <div>
                  <p className="text-gray-900">Art gallery 2</p>
                  <img className="object-scale-down" src="src/components/images/sila butterflies.png"/>
              </div>
              <br></br>
              <div>
                  <p className="text-gray-900">Coast 1</p>
                  <img className="object-scale-down" src="src/components/images/56c5bce6063b06e55ad84807bbf9c147.jpg"/>
              </div>
               <br></br>
              <div>
                  <p className="text-gray-900">Coast 2</p>
                  <img className="object-scale-down" src="src/components/images/96953ac9b0d7cfa1cd829518e5e26076.jpg"/>
              </div>

      {/*Services Section*/}

      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">The services I offer are listed below.</h2>

      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Front-end Web development</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for eye appealing webpages.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$60</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Team size: <span className="font-semibold">1 developer</span></span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support: <span className="font-semibold">6 months</span></span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free updates: <span className="font-semibold">6 months</span></span>
                  </li>
              </ul>
              <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>

          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Full stack Web development</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for a company based website.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$99</span>
                  <span className="text-gray-500 dark:text-gray-400" dark:text-gray-400>/month</span>
              </div>

              <ul role="list" className="mb-8 space-y-4 text-left">

                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Team size: <span className="font-semibold">10 developers</span></span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support: <span className="font-semibold">24 months</span></span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free updates: <span className="font-semibold">24 months</span></span>
                  </li>
              </ul>
              <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>

          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Premium+</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended redistribution rights.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$399</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>

              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Team size: <span className="font-semibold">100+ developers</span></span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support: <span className="font-semibold">36 months</span></span>
                  </li>
                  <li className="flex items-center space-x-3">

                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free updates: <span className="font-semibold">36 months</span></span>
                  </li>
              </ul>
              <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>
      </div>
  </div>

       <div>

       </div>


  </section>

</>
  )
}