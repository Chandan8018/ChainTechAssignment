import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../utils/cn";
import { Spotlight } from "../components/ui/Spotlight";
import { useSelector } from "react-redux";
import { Button } from "../components/ui/moving-border";
import { Word } from "../data/data";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  const { theme } = useSelector((state) => state.theme);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className='h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center items-center'>
      {/* Spot Light */}
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20 z-10'
        fill={theme === "dark" ? "white" : "#13C6F7"}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      {/* Log In Form */}
      <div className='max-w-3xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#abb1bb] dark:bg-[#1a232f] '>
        <div className='flex justify-center'>
          <TypewriterEffectSmooth words={Word} />
        </div>
        <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
          Login to aceternity if you can because we don&apos;t have a login flow
          yet
        </p>

        <form className='my-8' onSubmit={handleSubmit}>
          <LabelInputContainer className='mb-4'>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              id='email'
              placeholder='name@company.com'
              type='email'
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </LabelInputContainer>

          <LabelInputContainer className='mb-8'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              placeholder='••••••••'
              type='password'
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </LabelInputContainer>

          <Button
            borderRadius='1.75rem'
            className='bg-gray-600 dark:bg-slate-400 text-white dark:text-black border-neutral-200 dark:border-slate-800 w-full text-md font-semibold'
            type='submit'
          >
            Sign In &rarr;
            <BottomGradient />
          </Button>

          <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />
          <div className='flex justify-start gap-1 opacity-100'>
            <span className='text-md font-normal text-black dark:text-white'>
              Don't have an account?
            </span>
            <span
              className='text-md font-normal text-blue-600 cursor-pointer'
              onClick={() => navigate("/sign-up")}
            >
              Sign Up
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
      <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default SignIn;
