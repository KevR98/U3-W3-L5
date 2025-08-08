import { Col } from 'react-bootstrap';

function SingleBanner({ title }) {
  return (
    <Col xs={12} sm={12} lg={4}>
      <div className='py-4 px-4 my-2 rounded banner'>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='text-white mb-0'>{title}</h5>
          <i className='bi bi-chevron-right text-white fs-4'></i>
        </div>
      </div>
    </Col>
  );
}

export default SingleBanner;
