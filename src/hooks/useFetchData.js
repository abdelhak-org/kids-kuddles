    import  {useState , useEffect} from 'react';
    import axios from "axios";

    const useFetchData = (url) => {
    const [data , setData ] = useState([]);

    useEffect(()=>{
        const fetchData =()=>{
            axios.get(url).then((response)=>{
                setData(response.data)
                }).catch((err)=>{
            console.log(err.message)
                })
        }
       fetchData()
       
    },[])

    return  (data)
    }

    export default useFetchData;
