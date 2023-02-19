    import React from 'react'
    
    const ArticleComponent = ({id ,title , body}) => {
    
    
    
    return (
        <div key={id} className='w-[22%] border  border-[#51c4c4] p-2 m-2 
        rounded-md h-[280px] '>
        <h3 className='p-2 text-gray-800 cursor-pointer font-semibold underline hover:text-rose-800 ' >{title.slice(0,28)}</h3>
        <p className="p-2 mx-auto my-2  text-slate-800 ">{body}</p>
        </div>
    )
    }
    
    export default ArticleComponent
