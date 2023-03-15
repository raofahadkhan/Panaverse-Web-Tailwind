import { Links } from "@/Data/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Logo from "/public/logo.png";
import { usefulLinks, courses } from "@/Data/FooterData";

const Footer: FC = () => {
  return (
    // <Wrapper>
    <footer className="bg-gray-200">
      <div className="p-10 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h4 className="text-2xl pb-4">
                <Image src={Logo} alt="Panaverse Logo" />
              </h4>
              <p className="text-gray-5">
                245-M-2 PECHS <br />
                Block-6 Karachi <br />
                Pakistan
                <br />
                <br />
                <strong> Phone: </strong>+1 232 2321 4543
                <br />
                <strong> E-mail: </strong>info@panaversedao.com
                <br />
              </p>
            </div>
            <div className="mb-5">
              <h4 className="pb-4">Useful Links</h4>
              <ul className="text-white">
                {usefulLinks.map((links: Links, index:number) => (
                  <li key={index} className="pb-4 flex items-center">
                    <span className="pr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </span>{" "}
                    <Link href={links.path} className="hover:text-yellow-400">
                      {links.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4">Specialization</h4>
              <ul className="text-white">
                {courses.map((links:Links, index:number) => (
                  <li key={index} className="pb-4 flex items-center">
                    <span className="pr-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </span>{" "}
                    <Link href={links.path} className="hover:text-yellow-400">
                      {links.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4">Join Our Newsletter</h4>
              <p className="text-white pb-4">
                Join 25,000+ others and never miss out on new tips, tutorials
                and more
              </p>
              <form className="flex flex-row  flex-wrap">
                <input
                  type="text"
                  className="text-gray-500 w-2/3 p-2 focus:border-yellow-500 rounded-l-xl"
                  placeholder="abc@email.com"
                />
                <button className="p-2 w-1/3 bg-yellow-500 text-white hover:bg-yellow-600 rounded-r-xl ">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 text-gray-500 px-10">
        <div>
          <div>
            <div className="text-center flex flex-col md:flex-row items-center md:justify-center ">
              <div>
                Copyright{" "}
                <strong>
                  <span>Panaverse Dao</span>
                </strong>{" "}
                All Rights Reserved
              </div>

              <div>
                <span className="mx-1">|</span>
                Designed by{" "}
                <a
                  href="https://github.com/raofahadkhan"
                  className="text-yellow-500"
                >
                  Rao Fahad Khan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    // </Wrapper>
  );
};

export default Footer;
