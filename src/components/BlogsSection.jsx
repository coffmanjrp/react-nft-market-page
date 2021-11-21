import styled from 'styled-components';
import { SectionStyled } from '../Layouts';
import { MainTitle } from './';
import blogs from '../blogs';

const BlogsSectionStyled = styled.div`
  .blogs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    padding-top: 2rem;
    .blog {
      display: flex;
      flex-direction: column;
      background-color: rgba(255, 255, 255, 0.03);
      border-radius: 20px;
      .image {
        width: 100%;
        height: 300px;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        transition: all 0.4s ease-in-out;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-top-right-radius: 20px;
          border-top-left-radius: 20px;
          filter: grayscale(50%);
          transition: all 0.4s ease-in-out;
        }
      }
      h6 {
        flex: 1;
        padding: 1rem 1rem 0 1rem;
        font-size: 1.3rem;
        font-weight: 500;
      }
      .user {
        display: flex;
        padding: 2rem 1rem 1.5rem;
        p:first-child {
          padding-right: 0.4rem;
          opacity: 0.5;
        }
      }
    }
  }
`;

const BlogsSection = () => {
  return (
    <BlogsSectionStyled>
      <SectionStyled></SectionStyled>
      <div className="title-con">
        <MainTitle
          title="Popular Blogs"
          subtitle="Our Top Blogs"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
        />
      </div>
      <div className="blogs">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog">
            <div className="image">
              <img src={blog.image} alt={blog.title} />
            </div>
            <h6>{blog.title}</h6>
            <div className="user">
              <p>Creator : </p>
              <p>{blog.name}</p>
            </div>
          </div>
        ))}
      </div>
    </BlogsSectionStyled>
  );
};

export default BlogsSection;
