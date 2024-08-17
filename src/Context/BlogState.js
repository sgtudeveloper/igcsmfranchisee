import BlogContext from "./BlogContext";

const BlogState = (props)=>{
    const company = "IGCSM"
    const news = "Indian nonprofit IGCSM empowers underprivileged with education, skill development, microfinance. ISO certified, collaborates for sustainable impact, reaching 50,000+ people since 2008. netlify"
    return(
        <BlogContext.Provider 
        // value here which we want to export
        value={{
            company,
            news
        }}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState