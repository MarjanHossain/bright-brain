import { blogsData } from "../../../assets/data";
import BlogCard from "./BlogCard";

const Blogs = () => {
    return (
        <section id="recent-blog-posts" className="recent-blog-posts">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Blog</h2>
                    <p>Recent posts form our Blog</p>
                </header>

                <div className="row">

                    {
                        blogsData.map((blogInfo, i) => <BlogCard key={i} blogInfo={blogInfo} />)
                    }

                </div>

            </div>

        </section >
    );
};

export default Blogs;