import React from 'react';
import Kartikeya from './Kartikeya';
import Button from '../elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <Kartikeya />
            <p className="w-full text-lg text-gray-400 font-light">
              Honoured 
              {' '}
              <br />
              to work with you.
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Intern
            </h1>
            <p className="text-lg text-gray-400 font-light">
              kartikeya.dixit31@gmail.com
            </p>
            <p className="text-lg text-gray-400 font-light">
              Work from home
            </p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Social
            </h1>
            <Button href="https://www.instagram.com/dixit_kartikeya/" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Instagram
            </Button>
            <Button href="https://mail.google.com/mail/u/0/#sent?compose=jrjtXSpVsRNcDlllzRBHpzrLBJDQxcpqdrPqHzdWFpzvnqxdBLWKsGDtznrWcdNMLDJTGSnB" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Gmail
            </Button>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Have a good day
          </p>
          <div className="flex-row">
            <p className="inline-block text-lg text-gray-400 font-light">
              Made with ❤️;                                               
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
