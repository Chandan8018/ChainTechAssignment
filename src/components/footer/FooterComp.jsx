import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
  TextInput,
} from "flowbite-react";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Button } from "../ui/moving-border";
import { Link } from "react-router-dom";

function FooterComp() {
  return (
    <Footer container className='bg-gray-400 dark:bg-[#1f2937] opacity-85'>
      <div className='w-full'>
        <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
          <div className='grid grid-cols-2 md:gap-0 sm:mt-4 md:grid-cols-5 gap-6 '>
            <div className='flex flex-col gap-6 mt-2'>
              <div className='flex justify-start gap-1 items-center'>
                <img
                  src='https://media0.giphy.com/media/Dwv8Wl7vI1JUuOektL/giphy.gif?cid=6c09b952x6hnij1dfkt64jbuf8zpx3v426vavnvf92t0cfs1&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g'
                  className='h-5 sm:h-9 rounded-lg'
                  alt='ChainTech App Logo'
                />
                <span className='text-xl font-semibold dark:text-white'>
                  ChainTech™
                </span>
              </div>
              <span className='flex justify-start items-center gap-1 text-sm font-semibold'>
                <IoMdMail className='w-6 h-6 text-[#ff5555]' />{" "}
                Help@ChainTech.Com
              </span>
              <span className='flex justify-start items-center gap-1 text-sm font-semibold'>
                <IoCall className='w-6 h-6 text-[#ff5555]' />{" "}
                +1234&nbsp;456&nbsp;67889
              </span>
            </div>
            <div className='text-black dark:text-white'>
              <FooterTitle
                title='Links'
                className='text-black dark:text-white'
              />
              <FooterLinkGroup col className='text-black dark:text-white'>
                <FooterLink>
                  <Link to='/'>Home </Link>
                </FooterLink>
                <FooterLink>
                  {" "}
                  <Link to='#'>Service</Link>
                </FooterLink>
                <FooterLink>
                  <Link to='#'>About Us</Link>
                </FooterLink>
                <FooterLink>
                  <Link to='#'>Contact Us</Link>
                </FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle
                title='Legal'
                className='text-black dark:text-white'
              />
              <FooterLinkGroup col className='text-black dark:text-white'>
                <FooterLink href='#'>Terms Of Use</FooterLink>
                <FooterLink href='#'>Privacy Policy</FooterLink>
                <FooterLink href='#'>Cookie Policy</FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle
                title='Product'
                className='text-black dark:text-white'
              />
              <FooterLinkGroup col className='text-black dark:text-white'>
                <FooterLink href='#'>Take Tour</FooterLink>
                <FooterLink href='#'>Live Chat</FooterLink>
                <FooterLink href='#'>Reveiws</FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle
                title='Newsletter'
                className='text-black dark:text-white'
              />
              <FooterLinkGroup col className='text-black dark:text-white'>
                <FooterLink href='#'>Stay Up To Date</FooterLink>
                <FooterLink href='#'>
                  <div className='flex justify-start items-center'>
                    <TextInput
                      placeholder='Your email'
                      className='rounded-none'
                    />
                    <Button
                      borderRadius='4px'
                      className='bg-black text-white border-slate-800 rounded-[3px]'
                    >
                      Subscribe
                    </Button>
                  </div>
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className='w-full flex items-center justify-center'>
          <FooterCopyright
            href='#'
            by='ChainTech.Com All Rights Reserved™'
            year={new Date().getFullYear()}
            className='text-black dark:text-white'
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComp;
