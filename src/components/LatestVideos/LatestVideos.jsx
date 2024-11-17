import './LatestVideos.css';


export const LatestVideos = () => {
    return (
        <>
        <section className='latest-videos-container'>
            <div className='latest-videos-heading'>
                <span className="dash"></span>
                <span className='my-font-l'>Latest videos</span>
                <span className="dash"></span>
            </div>
            <div className='latest-videos-inner'>
                <div className='videos-left'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut, voluptatum molestias suscipit dolorem maxime nulla asperiores tenetur id quos labore nam nemo iste sunt laborum eius. Neque, maiores dolore.
                    </p>
                </div>
                <div className='videos-right'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti, perferendis dolorum libero ad fugiat autem. Consectetur optio accusantium cupiditate suscipit incidunt deserunt aut facere amet dolor. Minima, architecto quam?</p>
                </div>
            </div>
        </section>
        </>
    );
}
