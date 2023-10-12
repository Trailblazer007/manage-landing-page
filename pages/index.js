import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(true);

  function handleToggle() {
    setVisible(!visible);
    setOpen(!open);
  }

  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <Image
              src="/images/logo.svg"
              alt="logo image"
              width={146}
              height={24}
            />
          </div>

          {/* Menu Items */}
          <div className="hidden space-x-6 md:flex">
            <Link href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </Link>
            <Link href="#" className="hover:text-darkGrayishBlue">
              Product
            </Link>
            <Link href="#" className="hover:text-darkGrayishBlue">
              About Us
            </Link>
            <Link href="#" className="hover:text-darkGrayishBlue">
              Careers
            </Link>
            <Link href="#" className="hover:text-darkGrayishBlue">
              Community
            </Link>
          </div>

          {/* Button */}
          <div className=" flex justify-center">
            <Link
              href="#"
              className=" hidden p-3 px-6 text-white bg-brightRed rounded-full 
                    items-baseline hover:bg-brightRedLight md:block"
            >
              Get Started
            </Link>

            {/* Hamburger Icon */}
            <button
              id="menu-btn"
              className="block hamburger md:hidden focus:outline-none"
            >
              {!open && (
                <Image
                  src="/images/icon-close.svg"
                  width={21}
                  height={22}
                  alt="menu-close icon"
                  onClick={handleToggle}
                />
              )}

              {open && (
                <Image
                  src="/images/icon-hamburger.svg"
                  width={25}
                  height={18}
                  alt="menu-open icon"
                  onClick={handleToggle}
                />
              )}
            </button>

            {/* Mobile Menu */}

            {visible && (
              <div className="md:hidden">
                <div
                  id="menu"
                  className="  absolute flex flex-col items-center self-end 
                            py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto 
                            sm:self-center left-6 right-6 drop-shadow-md"
                >
                  <Link href="#">Pricing</Link>
                  <Link href="#">Product</Link>
                  <Link href="#">About Us</Link>
                  <Link href="#">Careers</Link>
                  <Link href="#">Community</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        <div
          className="container flex flex-col-reverse items-center 
                        px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0"
        >
          {/* Left Item */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1
              className="max-w-md text-4xl font-bold text-center md:text-5xl 
                          md:text-left"
            >
              Bring everyone together to build better products
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link
                href="#"
                className="p-3 px-6 text-white bg-brightRed rounded-full 
                    baseline hover:bg-brightRedLight"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Image*/}
          <div className="md:w-1/2 ">
            <Image
              src="/images/illustration-intro.svg"
              alt="illustration image"
              width={580}
              height={525}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        {/* Flex container */}
        <div
          className="container flex flex-col px-4 mx-auto mt-10 space-y-12 
                      md:space-y-0 md:flex-row"
        >
          {/* What's Different */}
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What’s different about Manage?
            </h2>

            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          {/* Numbered List */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* List Item 1 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>

                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p className="text-darkGrayishBlue ">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </div>
            </div>
            {/* List Item 2 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    02
                  </div>

                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Advanced built-in reports
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Advanced built-in reports
                </h3>
                <p className="text-darkGrayishBlue ">
                  et internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>

            {/* List Item 3 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2 ">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    03
                  </div>

                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Everything you need in one place
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Everything you need in one place
                </h3>
                <p className="text-darkGrayishBlue ">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        {/* Container to heading and testm blocks */}
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-4l font-bold text-center ">
            What's Different About Manage?
          </h2>
          {/* Testimonials Container */}
          <div className="flex flex-col my-24 md:flex-row md:space-x-6">
            {/* Testimonial 1 */}
            <div
              className="flex flex-col items-center p-6 space-y-6 rounded-lg
                          bg-veryLightGray md:w-1/3 "
            >
              <Image
                src="/images/avatar-anisha.png"
                className="w-16 -mt-14"
                width={144}
                height={144}
                alt="image of Anisha Li"
              />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <div className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </div>
            </div>

            {/* Testimonial 2 */}
            <div
              className="hidden flex-col items-center p-6 space-y-6 rounded-lg
                          bg-veryLightGray md:flex md:w-1/3 "
            >
              <Image
                src="/images/avatar-ali.png"
                className="w-16 -mt-14"
                width={144}
                height={144}
                alt=""
              />
              <h5 className="text-lg font-bold">Anisha Bravo</h5>
              <div className="text-sm text-darkGrayishBlue">
                We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </div>
            </div>

            {/* Testimonial 3 */}
            <div
              className="hidden flex-col items-center p-6 space-y-6 rounded-lg
                          bg-veryLightGray md:flex md:w-1/3 "
            >
              <Image
                src="/images/avatar-richard.png"
                className="w-16 -mt-14"
                width={144}
                height={144}
                alt=""
              />
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <div className="text-sm text-darkGrayishBlue">
                “Manage allows us to provide structure and process. It keeps us
                organized and focused. I can’t stop recommending them to
                everyone I talk to!”
              </div>
            </div>
          </div>

          <div className="my-16">
            <Link
              href="#"
              className="p-3 px-6 text-white bg-brightRed rounded-full 
                    baseline hover:bg-brightRedLight"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section id="cta" className="bg-brightRed">
        {/* Flex Container */}
        <div
          className="container flex flex-col items-center justify-between px-6 py-24
                       mx-auto space-y-12 md:flex-row md:space-y-0"
        >
          {/* Heading */}
          <h2
            className="text-5xl font-bold leading-tight text-center text-white 
                         md:text-4xl md:max-w-xl md:text-left"
          >
            Simplify how your team works today
          </h2>

          {/* Button */}
          <Link
            href="#"
            className="p-3 px-6 bg-white text-brightRed rounded-full 
                    baseline shadow-2xl hover:bg-gray-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-veryDarkBlue ">
        {/* Flex Container */}
        <div
          className="flex max-w-4xl flex-col-reverse justify-between px-6 py-10 
                        mx-auto space-y-8 md:flex-row md:space-y-0"
        >
          {/* Logo and social links container  */}
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; All Rights Reserved
          </div>
          <div
            className="flex flex-col-reverse items-center justify-between 
                        space-y-12 md:flex-col md:space-y-0 md:items-start "
          >
            {/* Logo */}
            <div className="mt-4">
              <Image
                src="/images/logo.svg"
                alt="logo image"
                width={146}
                height={24}
              ></Image>
            </div>

            {/* Social Links Container*/}
            <div className="flex justify-center space-x-4">
              {/* Link 1 */}
              <Link href="#">
                <Image
                  src="./images/icon-facebook.svg"
                  alt="facebook logo"
                  width={20}
                  height={20}
                ></Image>
              </Link>

              {/* Link 2 */}
              <Link href="#">
                <Image
                  src="./images/icon-youtube.svg"
                  alt="youtube logo"
                  width={20}
                  height={20}
                ></Image>
              </Link>

              {/* Link 3 */}
              <Link href="#">
                <Image
                  src="./images/icon-twitter.svg"
                  alt="twitter logo"
                  width={20}
                  height={20}
                ></Image>
              </Link>

              {/* Link 4 */}
              <Link href="#">
                <Image
                  src="./images/icon-pinterest.svg"
                  alt="pinterest logo"
                  width={20}
                  height={20}
                ></Image>
              </Link>

              {/* Link 5 */}
              <Link href="#">
                <Image
                  src="./images/icon-instagram.svg"
                  alt="instagram logo"
                  width={20}
                  height={20}
                ></Image>
              </Link>
            </div>
          </div>

          {/* List Container */}
          <div className="flex justify-around space-x-16 ">
            <div className="flex flex-col space-y-3 text-white">
              <Link href="#" className="hover:text-brightRed">
                Home
              </Link>
              <Link href="#" className="hover:text-brightRed">
                Pricing
              </Link>
              <Link href="#" className="hover:text-brightRed">
                Products
              </Link>
              <Link href="#" className="hover:text-brightRed">
                About
              </Link>
            </div>

            <div className="flex flex-col space-y-3 text-white">
              <Link href="#" className="hover:text-brightRed">
                Careers
              </Link>
              <Link href="#" className="hover:text-brightRed">
                Community
              </Link>
              <Link href="#" className="hover:text-brightRed">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Input Container */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className=" flex-1 px-4 rounded-full foucus:outline-none"
                  placeholder="Updated in your inbox"
                ></input>
                <button
                  className="px-6 py-2 text-white rounded-full bg-brightRedLight
                                  focus:outline-none"
                >
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>

      <div className="attribution bg-veryDarkBlue text-center text-darkGrayishBlue">
        <p>Challenge by: </p>
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        <div className="pb-4">
          Coded by <a href="#">Fatoye Oluwaseun</a>.
        </div>
      </div>
    </>
  );
}
