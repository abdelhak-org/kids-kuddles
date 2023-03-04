import React from "react";
import Container from "../../../layout/Container";
import Card from "../../../components/Card";
import cardimage from "../../../assets/horn1-removebg-preview.png";
import Box from "../../../layout/Box";
import ActivityContent from "./ActivityContent";
const ActivityComponent = () => {
  return (
    <Container className="w-[90vw] h-[100vh] bg-white mx-auto  border-0 ">
      <div className="w-[80vw]  h-[60vh] mx-auto py-2 bg-pink-800">
        <ActivityContent subtitle="Activities" maintitle="KIDS ACTIVITIES" />

        <p className="text-white w-fit p-2 text-sm mx-auto font-serif">
          Download free clip art and icons, holiday backgrounds,
          <br /> borders, images and fonts. Use them in all your holiday
          projects, <br /> cards, newsletters, calendars—just about anything!
        </p>

        <Box className="w-[90%] h-auto mx-auto mt-2 bg-white flex justify-around items-center">
          <Card title="title" description="text text text" image={cardimage} />
          <Card title="title" description="text text text" image={cardimage} />
          <Card title="title" description="text text text" image={cardimage} />
          <Card title="title" description="text text text" image={cardimage} />
        </Box>
      </div>
    </Container>
  );
};

export default ActivityComponent;
