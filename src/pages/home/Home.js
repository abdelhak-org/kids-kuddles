import React from "react";
import Container from "../../layout/Container";
import useFetchData from "../../hooks/useFetchData";
import ArticleComponent from "../../components/ArticleComponent";
import ActivityComponent from "./activitypage/ActivityComponent";
const Home = () => {
  const data = useFetchData("https://jsonplaceholder.typicode.com/posts");
  return (
        <>
        <Container
          className="w-[90vw] min-h-[100vh]  pr-20 text-center font-2xl border mx-auto
          flex justify-between items-start flex-wrap
          "
          >
          {data.slice(0, 8).map((item) => (
          <ArticleComponent id={item.id} title={item.title} body={item.body} key={item.title} />
          ))}
          
        </Container>
        <ActivityComponent/>
        </>
  );
};

export default Home;
