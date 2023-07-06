import { chainInfo, wizard } from "@/static";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Connected from "../connected";

function NavBar() {
  let router = useRouter();
  let activeLink = router.pathname;

  return (
    <nav className="bg-navbar w-navbar h-screen p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-extrabold !text-m-small leading-7.5">
            Madara Kit
          </h1>
        </div>
        <div>
          <Image
            src="/assets/madara.png"
            width={56}
            height={56}
            className="object-center"
            alt="madara logo"
          />
        </div>
      </div>

      {/* navbar items */}
      <div className="space-y-16 mt-16">
        <div>
          <h4 className="font-normal text-small leading-5">
            Chain information
          </h4>
          {chainInfo.map((item) => (
            <ul key={item.link}>
              <li
                key={item.link}
                className={`leading-5  ${
                  item.link === activeLink ? "bg-active" : ""
                } text-xsmall font-normal my-2 ${ item.link === activeLink? 'text-[#E62600]' : 'text-[#9CA3AF]'}`}
              >
                <Link href={item.link}>{item.value}</Link>
              </li>
            </ul>
          ))}
        </div>

        <div>
          <h4 className="font-normal text-small leading-5">Wizard</h4>
          {wizard.map((item) => (
            <ul key={item.link}>
              <li
                key={item.link}
                className={`leading-5 text-xsmall ${
                  item.link === activeLink ? "bg-active" : ""
                } font-normal my-2 ${ item.link === activeLink? 'text-[#E62600]' : 'text-[#9CA3AF]'} `}
              >
                <Link href={item.link}>{item.value}</Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <Connected />
    </nav>
  );
}

export default NavBar;
