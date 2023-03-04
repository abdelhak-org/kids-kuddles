import React , {useState} from "react";
import Box from "../../layout/Box"
const Post = (props) => {
    const [showPost , setShowPost ] = useState(false)
    return (
    <Box className="w-[80%] mx-auto border bg-white ">
        <h3  onClick={()=> setShowPost(!showPost)}
        className="p-2 text-[#153939] text-[22px] cursor-pointer font-serif text-justify underline hover:text-rose-800 ">{props.title}</h3>
        <p className="p-2 mx-auto my-2  text-[#426B6C] font-serif text-justify duration-2 ">{!showPost?props.body.substring(0,68):props.body}</p>
    </Box>
    );
};

export default Post;
