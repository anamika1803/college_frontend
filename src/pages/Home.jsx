import React from "react";
import { Carousel } from "react-responsive-carousel";
import Card from "../Component/Card";
import Slider from '../Component/Slider';
import study from "../assets/study.jpeg";


const Home = () => {
  return (
    <>
      <div className="flex justify-center flex-col mb-5 mt-[30vh] bg-cover bg-opacity-0">
        <div className="max-h-[80vh] flex justify-center items-center mt-[50vh] bg-cover">
          {/* Assuming Slider is a valid component */}
          <Slider className=' bg-cover' />
        </div>
        <div className="h-50vh flex items-center bg-blue-700 w-full justify-center mt-4 text-3xl font-display">
          <h1 className="text-center font-serif">
            “Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying ‘I will try again tomorrow’.”
          </h1>
        </div>
        <div className="flex flex-row  font-serif  font-semibold  dark:hover:text-lg"><br/>
          <Card title={"Empowering Minds, Shaping Futures"} className='card-img-top img-fluid' Image={study}    />
          <Card title={"Building Bright Futures Together"} Image={study} />
         <Card title={"Connecting Aspirations with Opportunities"} Image={study} />
          <Card title={"Embark on a Journey of Learning and Growth"} Image={study} />
          
        </div>
      </div>
    </>
  );
}

export default Home;
