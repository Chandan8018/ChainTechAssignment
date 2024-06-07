import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../utils/cn";
import { Spotlight } from "../ui/Spotlight";
import { Button } from "../ui/moving-border";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { update } from "../../data/data";
import { Alert, Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUsers,
  updateStart,
  updateSuccess,
  updateFailure,
  updateUser,
} from "../../redux/user/userSlice";
import { useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();
  const { theme } = useSelector((state) => state.theme);
  const userState = useSelector((state) => state.user);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [successUpdate, setSuccessUpdate] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const { loading, error: errorMessage } = userState || {
    loading: false,
    error: null,
  };
  console.log(formData);
  useEffect(() => {
    const userUpdate = users.find((user) => user.id === currentUser.id);
    setFormData(userUpdate);
  }, [id, users]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(updateStart());
      dispatch(updateUser(formData));
      dispatch(updateSuccess(formData));
      setFormData({});
      setSuccessUpdate(true);
    } catch (error) {
      dispatch(updateFailure("Failed to Update Profile"));
    }
  };
  return (
    <div className='h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center'>
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20 z-10'
        fill={theme === "dark" ? "white" : "#13C6F7"}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <div className='max-w-3xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#abb1bb] dark:bg-[#1a232f] '>
        <div className='flex justify-center'>
          <TypewriterEffectSmooth words={update} />
        </div>
        <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
          Create an account to access our features
        </p>
        {successUpdate && (
          <Alert className='mt-5' color='success'>
            Profile Updated
          </Alert>
        )}
        {errorMessage && (
          <Alert className='mt-5' color='failure'>
            {errorMessage}
          </Alert>
        )}
        <form className='my-8' onSubmit={handleSubmit}>
          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
            <LabelInputContainer>
              <Label htmlFor='firstname'>First name</Label>
              <Input
                id='firstname'
                placeholder='Tyler'
                type='text'
                value={formData.firstname}
                onChange={handleChange}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor='lastname'>Last name</Label>
              <Input
                id='lastname'
                placeholder='Durden'
                type='text'
                value={formData.lastname}
                onChange={handleChange}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className='mb-4'>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              id='email'
              placeholder='name@company.com'
              type='email'
              value={formData.email}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className='mb-8'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              placeholder='••••••••'
              type='password'
              value={formData.password}
              onChange={handleChange}
            />
          </LabelInputContainer>

          <Button
            borderRadius='1.75rem'
            className='bg-gray-600 dark:bg-slate-400 text-white dark:text-black border-neutral-200 dark:border-slate-800 w-full text-md font-semibold'
            type='submit'
          >
            {loading ? (
              <>
                <Spinner size='sm' />
                <span className='pl-3'>Loading...</span>
              </>
            ) : (
              "Update Profile"
            )}

            <BottomGradient />
          </Button>

          <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />
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

export default Profile;
