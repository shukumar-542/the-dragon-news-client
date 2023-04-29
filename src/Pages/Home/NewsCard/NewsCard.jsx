import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  // console.log(news);
  const { _id, title, details, image_url, author,rating,total_view } = news
  return (
    <Card className="mb-4">
      <Card.Header className='d-flex align-items-center'>
        <Image src={author?.img} style={{ height: '40px' }} roundedCircle></Image>
        <div className='ms-3 flex-grow-1'>
          <p className='mb-0'>{author?.name}</p>
          <p className='mb-0'><small>{moment(author?.published_date).format('yyyy-MM-DD')}</small></p>
        </div>
        <div>
          <FaRegBookmark className='me-2'></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...
            <Link to={`/news/${_id}`}>Read More</Link>
          </>}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className='flex-grow-1'>
        <Rating
            readonly
            placeholderRating={rating.number}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />

         <span className='ms-2'>{rating?.number}</span>
        </div>
        <div>
          <FaEye></FaEye>
          <span className='ms-2'>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;