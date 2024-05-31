import React from 'react';
import Edit from '../images/edit.png';
import Delete from '../images/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';


const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className="content">      
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>user name</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write/edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae repellendus assumenda fugit corporis fuga a atque nesciunt amet consequatur, eligendi, nostrum tempora natus pariatur ipsum voluptatem commodi inventore enim?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae repellendus assumenda fugit corporis fuga a atque nesciunt amet consequatur, eligendi, nostrum tempora natus pariatur ipsum voluptatem commodi inventore enim?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae repellendus assumenda fugit corporis fuga a atque nesciunt amet consequatur, eligendi, nostrum tempora natus pariatur ipsum voluptatem commodi inventore enim?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae repellendus assumenda fugit corporis fuga a atque nesciunt amet consequatur, eligendi, nostrum tempora natus pariatur ipsum voluptatem commodi inventore enim?
          </p>
        </p>
      </div>
      <Menu/>
    </div>
  )
}

export default SinglePost
