import React, { useState, useEffect } from 'react';
import { DiscussForm } from 'parts/DiscussForm';

import Header from 'parts/Header';
import Footer from 'parts/Footer';

export const DiscussProjectPage = () => {
  const [data, setData] = useState({
    name: '',
    projectName: '',
    email: '',
    phone: '',
    projectIdea: '',
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const onChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setData({
      name: '',
      projectName: '',
      email: '',
      phone: '',
      projectIdea: '',
    });
  };

  return (
    <>
      <Header />
      <DiscussForm data={data} onChange={onChange} resetForm={resetForm} />
      <Footer />
    </>
  );
};
