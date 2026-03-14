const Layout = (props)=>{

    console.log(props);
    

    return <div>
        {props.data.map((ele,i,arr)=>{

           return <div>
            <img src={ele.image} alt="" />
            <h4>{ele.title}</h4>
            <h4>Price: {ele.price}</h4>
            <h4>Rating: {ele.rating}</h4>
           </div> 

        })}
    </div>

}

export default Layout