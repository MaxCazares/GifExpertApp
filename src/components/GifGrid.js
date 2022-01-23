import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useFetchGift from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import spinner from '../helper/spinner';


const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGift(category);    

    return (
        <Fragment>
            <h3 className='animate__animated animate__fadeInDown'>{category}</h3>

            {loading && spinner()}

            <div className='card-grid'>
                {
                    images.map(img => (<GifGridItem key={img.id} {...img}/>))
                }
            </div>
        </Fragment>
    );
}

export default GifGrid;

GifGrid.protoTypes = {
    category: PropTypes.string.isRequired
}