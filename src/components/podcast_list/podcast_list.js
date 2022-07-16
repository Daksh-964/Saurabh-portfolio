import React from 'react'
import './podcast_list.css';

function podcast_list(props) {
    return (
        <>
            <a href={props.link}>
                <div className='episode mt-4 mb-3'>
                    <div className='img_wrappper ml-4'>
                        <a href={props.link}>

                            <button className='button' type='button'>
                                <i class="fas fa-play mx-auto" id=''></i>
                            </button>
                        </a>
                    </div>

                    <div className='content'>
                        <div className='pod_date'>{props.date}</div>
                        <div className='title_player'>
                            {props.title}</div>
                        <div className='pod_description'><p className='text_para'>{props.description}</p></div>

                    </div>
                </div>
            </a>
        </>
    )
}

export default podcast_list